// Index Exam Navigation JS
// Function to handle navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('data-target');
        document.querySelectorAll('.section').forEach(section => {
            section.classList.add('hidden');
        });
        document.getElementById(targetId).classList.remove('hidden');
    });
});

// Function to initialize the page
function initializePage() {
    const defaultSectionId = 'overview'; // Set the default section ID to be shown
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
    const defaultSection = document.getElementById(defaultSectionId);
    if (defaultSection) {
        defaultSection.classList.remove('hidden');
    }
}

// Initialize the page on load
window.addEventListener('DOMContentLoaded', initializePage);



// Start js Here from to Index Listerning exam page
// Submit Test Function
function submitTest() {
    clearInterval(timerInterval); // Stop the timer
    console.log('Test submitted'); // Debugging log

    // Show the message modal
    const modal = document.getElementById('message-modal');
    if (modal) {
        modal.classList.remove('hidden');
    } else {
        console.error('Modal not found');
    }

    // Hide other sections
    document.getElementById('exam-content')?.classList.add('hidden');
    document.getElementById('review-sheet')?.classList.add('hidden');
    document.getElementById('notepad')?.classList.add('hidden');

    // Automatically save data
    saveExamData();

    // Redirect to the main screen after a delay to allow the modal to be visible
    setTimeout(() => {
        console.log('Redirecting to index_exam.html'); // Debugging log
        window.location.href = 'index exam.html'; // Ensure this path is correct
    }, 2000); // Adjust the delay as needed
}

// Close Modal Function
function closeModal() {
    const modal = document.getElementById('message-modal');
    if (modal) {
        modal.classList.add('hidden');
    } else {
        console.error('Modal not found');
    }
}

// Click Outside Modal to Close
window.onclick = function (event) {
    const modal = document.getElementById('message-modal');
    if (modal && event.target === modal) {
        closeModal();
    }
}

// Update Navigation Buttons
let currentPart = 1;

function updateNavigationButtons() {
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    if (prevButton) prevButton.classList.toggle('hidden', currentPart === 1);
    if (nextButton) nextButton.classList.toggle('hidden', currentPart === 4);
}

// Toggle Notepad Visibility
function toggleNotepad() {
    const notepad = document.getElementById('notepad');
    if (notepad) notepad.classList.toggle('hidden');
}

// Toggle Review Sheet Visibility
function toggleReview() {
    const review = document.getElementById('review-sheet');
    if (review) {
        if (review.classList.contains('hidden')) {
            showReview();
            review.classList.remove('hidden');
        } else {
            review.classList.add('hidden');
        }
    } else {
        console.error('Review sheet not found');
    }
}

// Show Part Function
function showPart(partNumber) {
    for (let i = 1; i <= 4; i++) {
        const part = document.getElementById(`part${i}`);
        if (part) {
            if (i === partNumber) {
                part.classList.remove('hidden');
            } else {
                part.classList.add('hidden');
            }
        } else {
            console.error(`Part ${i} not found`);
        }
    }
    currentPart = partNumber;
    updateNavigationButtons();
}

// Next Part Function
function nextPart() {
    if (currentPart < 4) {
        showPart(currentPart + 1);
    }
}

// Previous Part Function
function prevPart() {
    if (currentPart > 1) {
        showPart(currentPart - 1);
    }
}

// Timer with automatic audio playback
let time = 1800; // 30 minutes in seconds
const timerDisplay = document.getElementById('time');
const audioElement = document.getElementById('audio'); // Ensure this ID matches your audio element's ID

// Start the timer and audio automatically
const timerInterval = setInterval(() => {
    if (time === 1800 && audioElement) {
        audioElement.play().catch(error => console.error('Audio play error:', error));
    }

    if (time <= 0) {
        clearInterval(timerInterval);
        submitTest();
    } else {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        if (timerDisplay) {
            timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        } else {
            console.error('Timer display not found');
        }
        time--;
    }
}, 1000);

// Drag and Drop Functionality
document.addEventListener('DOMContentLoaded', () => {
    const draggables = document.querySelectorAll('.draggable');
    const blanks = document.querySelectorAll('.blank');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart);
    });

    blanks.forEach(blank => {
        blank.addEventListener('dragover', dragOver);
        blank.addEventListener('drop', drop);
        blank.addEventListener('dragleave', dragLeave);
    });

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.textContent);
    }

    function dragOver(e) {
        e.preventDefault();
        e.target.classList.add('drag-over');
    }

    function drop(e) {
        e.preventDefault();
        const data = e.dataTransfer.getData('text/plain');
        const blank = e.target;

        if (blank.classList.contains('blank')) {
            blank.textContent = data;
            blank.dataset.answer = data;
        }

        e.target.classList.remove('drag-over');
    }

    function dragLeave(e) {
        e.target.classList.remove('drag-over');
    }
});

// Initialize the exam
showPart(currentPart);

// Show Review Function
function showReview() {
    const reviewListBody = document.getElementById('review-list-body');
    if (reviewListBody) {
        reviewListBody.innerHTML = '';

        // Loop through all questions and get their answers
        for (let i = 1; i <= 40; i++) {
            const answerElement = document.querySelector(`[name="q${i}"]`);
            const answer = answerElement ? answerElement.value : "Not answered";
            const row = document.createElement('tr');
            const questionCell = document.createElement('td');
            const answerCell = document.createElement('td');
            questionCell.textContent = `Question ${i}`;
            answerCell.textContent = answer;
            row.appendChild(questionCell);
            row.appendChild(answerCell);
            reviewListBody.appendChild(row);
        }

        // Add drag-and-drop answers to the review sheet
        document.querySelectorAll('.blank').forEach(blank => {
            const questionNumber = blank.dataset.question;
            const answer = blank.textContent.trim() || "Not answered";
            const row = document.createElement('tr');
            const questionCell = document.createElement('td');
            const answerCell = document.createElement('td');
            questionCell.textContent = `Question ${questionNumber}`;
            answerCell.textContent = answer;
            row.appendChild(questionCell);
            row.appendChild(answerCell);
            reviewListBody.appendChild(row);
        });
    } else {
        console.error('Review list body not found');
    }
}

// Save Exam Data Function
function saveExamData() {
    // Implement the logic to save exam data here
    // This could be an API call or saving to local storage
    console.log('Saving exam data...');
}


// Flip cards for vocab

// Sample data for flashcards
// Sample data for flashcards
const flashcards = {
    easy: [
        {
            word: "Innovate",
            definition: "Make changes in something established, especially by introducing new methods or ideas.",
            example: "The company aims to innovate and create new technologies.",
            advantages: "Leads to growth and new opportunities.",
            disadvantages: "Can be risky and requires investment."
        },
        {
            word: "Resilient",
            definition: "Able to withstand or recover quickly from difficult conditions.",
            example: "She was resilient in the face of adversity.",
            advantages: "Builds strength and endurance.",
            disadvantages: "Can lead to stress if pushed too far."
        }
    ],
    medium: [
        {
            word: "Tenacious",
            definition: "Holding tightly onto something, or keeping an opinion in a determined way.",
            example: "Her tenacious attitude led to her success.",
            advantages: "Shows determination and persistence.",
            disadvantages: "Can be seen as stubborn or inflexible."
        }
    ],
    hard: [
        {
            word: "Obfuscate",
            definition: "To deliberately make something unclear or difficult to understand.",
            example: "The lawyer's response was meant to obfuscate the facts.",
            advantages: "Can be useful in negotiations.",
            disadvantages: "Causes confusion and misunderstanding."
        }
    ]
};

let currentWordIndex = 0;
let currentLevel = "easy";

// Function to load the next word
function nextWord() {
    currentWordIndex = (currentWordIndex + 1) % flashcards[currentLevel].length;
    displayWord(currentWordIndex);
}

// Function to display a word's details
function displayWord(index) {
    const card = flashcards[currentLevel][index];
    document.getElementById('word').innerText = card.word;
    document.getElementById('definition').innerText = card.definition;
    document.getElementById('example').innerText = card.example;
    document.getElementById('advantages').innerText = card.advantages;
    document.getElementById('disadvantages').innerText = card.disadvantages;
}

// Function to play pronunciation without flipping the card
function playPronunciation(event) {
    event.stopPropagation();
    const card = flashcards[currentLevel][currentWordIndex];
    const utterance = new SpeechSynthesisUtterance(card.word);
    window.speechSynthesis.speak(utterance);
}

// Function to flip the card
function flipCard(card) {
    card.classList.toggle('flipped');
}

// Function to handle feedback
function handleFeedback(knewWord) {
    if (knewWord) {
        alert("Great! You knew this word!");
    } else {
        alert("No worries! Keep practicing.");
    }
    nextWord();
}

// Function to change level
function showLevel(level) {
    currentLevel = level;
    currentWordIndex = 0;
    displayWord(currentWordIndex);
}

// Load the first word when the page loads
window.onload = () => {
    showLevel('easy'); // Default level
};



