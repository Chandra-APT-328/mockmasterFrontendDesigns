// Handle navigation and section visibility
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('data-target');

        // Hide all sections
        sections.forEach(section => section.classList.add('hidden-section'));

        // Show the clicked section
        document.getElementById(target).classList.remove('hidden-section');
    });
});

// Show the Overview section by default
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('overview').classList.remove('hidden-section');
});

// IELTS Band Score to Raw Score Mapping
const scoreMapping = {
    9: "39-40",
    8.5: "37-38",
    8: "35-36",
    7.5: "33-34",
    7: "30-32",
    6.5: "29",
    6: "27-28",
    5.5: "25-26",
    5: "23-24",
    4.5: "21-22",
    4: "18-20",
    3.5: "16-17",
    3: "13-15",
    2.5: "10-12",
    2: "7-9",
    1.5: "4-6",
    1: "1-3"
};

// Function to generate band score table
function generateScoreTable() {
    const scoreTable = document.getElementById('scoreTable');
    scoreTable.innerHTML = ''; // Clear any existing rows

    Object.keys(scoreMapping).forEach(band => {
        const row = document.createElement('tr');
        row.classList.add('border');

        const bandCell = document.createElement('td');
        bandCell.classList.add('p-2');
        bandCell.textContent = band;

        const scoreCell = document.createElement('td');
        scoreCell.classList.add('p-2');
        scoreCell.textContent = scoreMapping[band];

        row.appendChild(bandCell);
        row.appendChild(scoreCell);
        scoreTable.appendChild(row);
    });
}

// Call the function to generate the score table on DOMContentLoaded
document.addEventListener('DOMContentLoaded', generateScoreTable);

// Timer and test logic
let timer;
let timeLeft = 60 * 60; // 60 minutes
const timeDisplay = document.getElementById('timeLeft');
const startButton = document.getElementById('startTest');
const testSection = document.getElementById('writingTest');
const instructionsSection = document.getElementById('instructions');
const submissionConfirmation = document.getElementById('submissionConfirmation');

// Update the timer display every second
function updateTime() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    timeLeft--;

    if (timeLeft < 0) {
        clearInterval(timer);
        submitTest();
    }
}

// Start the test and timer
function startTest() {
    instructionsSection.classList.add('hidden-section');
    testSection.classList.remove('hidden-section');
    timer = setInterval(updateTime, 1000);
}

// Submit the test and stop the timer
function submitTest() {
    clearInterval(timer);
    testSection.classList.add('hidden-section');
    submissionConfirmation.classList.remove('hidden-section');
}

// Event Listeners
if (startButton) {
    startButton.addEventListener('click', startTest);
}
if (document.getElementById('submitTest')) {
    document.getElementById('submitTest').addEventListener('click', submitTest);
}

// Add 10 IELTS Practice Test Links Dynamically
function generatePracticeTests() {
    const practiceTestSection = document.getElementById('practiceTestLinks');
    practiceTestSection.innerHTML = ''; // Clear any existing links

    for (let i = 1; i <= 10; i++) {
        const testLink = document.createElement('a');
        testLink.href = '#';
        testLink.textContent = `IELTS Mock Practice Test-${i}`;
        testLink.classList.add('bg-green-500', 'text-white', 'p-4', 'text-center', 'rounded-lg', 'hover:bg-green-700', 'block', 'mb-2');
        practiceTestSection.appendChild(testLink);
    }
}

// Generate practice test links on DOMContentLoaded
document.addEventListener('DOMContentLoaded', generatePracticeTests);