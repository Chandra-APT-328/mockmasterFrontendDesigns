// Start js Here from to Index Listerning exam page
// Submit Test Function
function submitTest() {
    clearInterval(timerInterval); // Stop the timer
    console.log('Test submitted'); // Debugging log

    // Show the message modal for listening exam
    const modal = document.getElementById('message-modal');
    if (modal) {
        modal.classList.remove('hidden');
    } else {
        console.error('Modal not found');
    }

    // Hide other sections for listening exam
    document.getElementById('exam-content')?.classList.add('hidden');
    document.getElementById('review-sheet')?.classList.add('hidden');
    document.getElementById('notepad')?.classList.add('hidden');

    // Automatically save data for listening exam
    saveExamData();

    // Redirect to the main screen after a delay to allow the modal to be visible for listening exam
    setTimeout(() => {
        console.log('Redirecting to listening_exam_dashboard.html'); // Debugging log
        window.location.href = 'listening_exam_dashboard.html'; // Ensure this path is correct
    }, 2000); // Adjust the delay as needed
}

// Close Modal Function for listening exam
function closeModal() {
    const modal = document.getElementById('message-modal');
    if (modal) {
        modal.classList.add('hidden');
    } else {
        console.error('Modal not found');
    }
}

// Click Outside Modal to Close for listening exam
window.onclick = function (event) {
    const modal = document.getElementById('message-modal');
    if (modal && event.target === modal) {
        closeModal();
    }
}

// Update Navigation Buttons for listening exam
let currentPart = 1;

function updateNavigationButtons() {
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    if (prevButton) prevButton.classList.toggle('hidden', currentPart === 1);
    if (nextButton) nextButton.classList.toggle('hidden', currentPart === 4);
}

// Toggle Notepad Visibility for listening exam
function toggleNotepad() {
    const notepad = document.getElementById('notepad');
    if (notepad) notepad.classList.toggle('hidden');
}

// Toggle Review Sheet Visibility for listening exam
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

// Show Part Function for listening exam
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

// Next Part Function for listening exam
function nextPart() {
    if (currentPart < 4) {
        showPart(currentPart + 1);
    }
}

// Previous Part Function for listening exam
function prevPart() {
    if (currentPart > 1) {
        showPart(currentPart - 1);
    }
}

// Timer with automatic audio playback for listening exam
let time = 1800; // 30 minutes in seconds
const timerDisplay = document.getElementById('time');
const audioElement = document.getElementById('audio'); // Ensure this ID matches your audio element's ID

// Start the timer and audio automatically for listening exam
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

// Drag and Drop Functionality for listening exam
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

// Show Review Function for listening exam 
function showReview() {
    const reviewListBody = document.getElementById('review-list-body');
    if (reviewListBody) {
        reviewListBody.innerHTML = '';

        // Loop through all questions and get their answers for listening exam
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

        // Add drag-and-drop answers to the review sheet for listening exam
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

// Save Exam Data Function for dashbord
function saveExamData() {
    // Implement the logic to save exam data here
    // This could be an API call or saving to local storage
    console.log('Saving exam data...');
}
