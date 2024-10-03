// Index Exam Navigation JS 

 //   Script for Sidebar Toggle 
const toggleButton = document.getElementById('toggleButton');
const sidebar = document.getElementById('sidebar');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('-translate-x-full');
});


// Function to handle navigation For exam gauidline page
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

// Function to initialize the page For exam gauidline page
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

// Initialize the page on load For exam gauidline page
window.addEventListener('DOMContentLoaded', initializePage);



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
        console.log('Redirecting to index_exam.html'); // Debugging log
        window.location.href = 'index exam.html'; // Ensure this path is correct
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


// Flip cards for vocab



// CALANDER for dashbord

const currentYearElement = document.getElementById('current-year');
const calendarGrid = document.getElementById('calendar-grid');
const months = document.querySelectorAll('.month');
const confirmationContainer = document.getElementById('confirmation-container');
const calendarContainer = document.getElementById('calendar-container');
const selectedDateElement = document.getElementById('selected-date');

let currentYear = new Date().getFullYear();
let selectedDate = '';
const today = new Date();

function generateCalendarGrid(year, month) {
    calendarGrid.innerHTML = '';

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (let i = 0; i < daysOfWeek.length; i++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('weekday', 'text-center', 'font-semibold', 'py-2', 'bg-gray-100', 'text-gray-700');
        dayElement.textContent = daysOfWeek[i];
        calendarGrid.appendChild(dayElement);
    }

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.classList.add('day', 'py-4');
        calendarGrid.appendChild(emptyDay);
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement('div');
        const dayDate = new Date(year, month, i);

        dayElement.classList.add('day', 'text-center', 'py-4', 'cursor-pointer', 'hover:bg-gray-200', 'transition', 'duration-200', 'ease-in-out');
        dayElement.textContent = i;

        if (dayDate < today) {
            dayElement.classList.add('text-gray-400', 'cursor-not-allowed');
        } else {
            dayElement.addEventListener('click', () => {
                document.querySelectorAll('.day').forEach(day => day.classList.remove('bg-blue-200', 'text-blue-600'));
                dayElement.classList.add('bg-blue-200', 'text-blue-600');
                selectedDate = `${i} ${months[month].textContent} ${year}`;
                showConfirmation();
            });
        }

        calendarGrid.appendChild(dayElement);
    }

    calendarGrid.classList.add('active');
}

function updateCalendar() {
    currentYearElement.textContent = currentYear;

// Disable selection of past months for dashbord
    months.forEach((month, index) => {
        const monthDate = new Date(currentYear, index);
        if (monthDate < new Date(today.getFullYear(), today.getMonth())) {
            month.classList.add('text-gray-400', 'cursor-not-allowed');
            month.removeEventListener('click', handleMonthClick);
        } else {
            month.classList.remove('text-gray-400', 'cursor-not-allowed');
            month.addEventListener('click', handleMonthClick);
        }
    });
}

function handleMonthClick(event) {
    const selectedMonth = parseInt(event.target.getAttribute('data-month'));
    generateCalendarGrid(currentYear, selectedMonth);
}

function showConfirmation() {
    calendarContainer.style.display = 'none';
    confirmationContainer.style.display = 'block';
    selectedDateElement.textContent = `You have booked the date: ${selectedDate}`;
}

document.getElementById('prev-year').addEventListener('click', () => {
    currentYear -= 1;
    updateCalendar();
});

document.getElementById('next-year').addEventListener('click', () => {
    currentYear += 1;
    updateCalendar();
});

document.getElementById('update-date').addEventListener('click', () => {
    confirmationContainer.style.display = 'none';
    calendarContainer.style.display = 'block';
});

updateCalendar();


// Targated Score for dashbord

const scoreForm = document.getElementById('score-form');
const confirmationMessage = document.getElementById('confirmation-message');
const editScoresButton = document.getElementById('edit-scores');

scoreForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const listeningScore = document.getElementById('listening-score').value;
    const readingScore = document.getElementById('reading-score').value;
    const speakingScore = document.getElementById('speaking-score').value;
    const writingScore = document.getElementById('writing-score').value;
    const overallScore = document.getElementById('overall-score').value;

    // Store the scores (could be stored in localStorage or sent to a server)
    console.log("Listening Score:", listeningScore);
    console.log("Reading Score:", readingScore);
    console.log("Speaking Score:", speakingScore);
    console.log("Writing Score:", writingScore);
    console.log("Overall Score:", overallScore);

    // Hide the form and show the confirmation message
    scoreForm.style.display = 'none';
    confirmationMessage.style.display = 'block';
});

editScoresButton.addEventListener('click', function() {
    // Show the form and hide the confirmation message
    confirmationMessage.style.display = 'none';
    scoreForm.style.display = 'block';
});



$(function () {
    window.sr = ScrollReveal();
  
    if ($(window).width() < 768) {
      if ($('.timeline-content').hasClass('js--fadeInLeft')) {
        $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
      }
  
      sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
      });
  
    } else {
      sr.reveal('.js--fadeInLeft', {
        origin: 'left',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
      });
  
      sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
      });
    }
  });
  