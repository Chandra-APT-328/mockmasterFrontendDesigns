// Navigation Handling
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('data-target');

        // Remove active class from all links
        navLinks.forEach(nav => nav.classList.remove('active'));
        // Add active class to the clicked link
        this.classList.add('active');

        // Hide all sections
        sections.forEach(section => section.classList.remove('active'));

        // Show the target section
        document.getElementById(target).classList.add('active');
    });
});

// Show the Overview section by default
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.nav-link[data-target="overview"]').classList.add('active');
    document.getElementById('overview').classList.add('active');
});

// Listening Test Functionality
// Initialize variables
let timer;
let timeLeft = 30 * 60; // 30 minutes in seconds
let currentSection = 1;
let currentQuestion = 1;
const totalSections = 4;
const questionsPerSection = 10;

// Sections data with 40 IELTS listening questions
const sectionsData = [
    {
        audio: 'F:\Listening\media\Practice Test 1.MP3',
        questions: [
            '1. Where does the conversation take place?',
            '2. What time does the service start?',
            '3. How much does the service cost?',
            '4. What is the main purpose of the service?',
            '5. How often does the service operate?',
            '6. What are the payment options?',
            '7. What is the man’s phone number?',
            '8. What is the address of the service location?',
            '9. How can the service be accessed?',
            '10. What is the service’s cancellation policy?',
        ]
    },
    {
        audio: 'F:\Listening\media\Practice Test 1.MP3',
        questions: [
            '11. What is the topic of the lecture?',
            '12. What is the first point the speaker makes?',
            '13. What does the speaker suggest about the topic?',
            '14. What are the benefits mentioned?',
            '15. What is the main challenge discussed?',
            '16. How can the challenge be addressed?',
            '17. What example does the speaker provide?',
            '18. What is the conclusion of the lecture?',
            '19. What is the next topic to be discussed?',
            '20. What additional information does the speaker provide?',
        ]
    },
    {
        audio: 'F:\Listening\media\Practice Test 1.MP3',
        questions: [
            '21. Who are the participants in the discussion?',
            '22. What is the main subject of the discussion?',
            '23. What argument does the first participant make?',
            '24. How does the second participant respond?',
            '25. What evidence is provided to support the argument?',
            '26. What is the outcome of the discussion?',
            '27. What does the moderator suggest?',
            '28. What are the implications of the discussion?',
            '29. What is the recommended course of action?',
            '30. What is the final decision or conclusion?',
        ]
    },
    {
        audio: 'F:\Listening\media\Practice Test 1.MP3',
        questions: [
            '31. What is the research topic being discussed?',
            '32. What methodology was used in the research?',
            '33. What were the key findings?',
            '34. What significance do the results hold?',
            '35. How does this research compare to previous studies?',
            '36. What limitations are mentioned in the research?',
            '37. What recommendations are made?',
            '38. What future research is suggested?',
            '39. What practical applications are discussed?',
            '40. What is the final takeaway from the research?',
        ]
    }
];

// Start the test
document.getElementById('startTest').addEventListener('click', function() {
    document.getElementById('instructions').classList.add('hidden');
    document.getElementById('listeningTest').classList.remove('hidden');
    loadSection(currentSection);
    startTimer();
});

// Timer function
function startTimer() {
    timer = setInterval(function() {
        timeLeft--;
        displayTime();
        if (timeLeft <= 0) {
            clearInterval(timer);
            submitTest();
        }
    }, 1000);
}

// Display the remaining time
function displayTime() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timeLeft').textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

// Ensure answers are in capital letters
function addInputListeners() {
    const inputs = document.querySelectorAll('.answer-input');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            this.value = this.value.toUpperCase();
        });
    });
}

// Load section content dynamically
function loadSection(sectionNumber) {
    const section = sectionsData[sectionNumber - 1];
    currentQuestion = 1;
    displayQuestion();
    addInputListeners();
    document.getElementById('audio').src = section.audio;
    document.getElementById('audio').play();
}

// Display a specific question
function displayQuestion() {
    const section = sectionsData[currentSection - 1];
    const question = section.questions[currentQuestion - 1];
    
    const questionContent = `
        <div class="question">
            <p>${question}</p>
        </div>
    `;
    
    const answerContent = `
        <div class="question">
            <input type="text" class="answer-input" id="q${currentQuestion}" placeholder="Your answer here...">
        </div>
    `;
    
    document.getElementById('questionPaper').innerHTML = questionContent;
    document.getElementById('answerSheet').innerHTML = answerContent;
    updateProgress();
}

// Update progress display
function updateProgress() {
    document.getElementById('currentSection').textContent = currentSection;
    document.getElementById('currentQuestion').textContent = currentQuestion;
}

// Navigate to the next question
document.getElementById('nextQuestion').addEventListener('click', function() {
    if (currentQuestion < questionsPerSection) {
        currentQuestion++;
        displayQuestion();
    } else if (currentSection < totalSections) {
        currentSection++;
        loadSection(currentSection);
    } else {
        submitTest();
    }
});

// Navigate to the previous question
document.getElementById('prevQuestion').addEventListener('click', function() {
    if (currentQuestion > 1) {
        currentQuestion--;
        displayQuestion();
    } else if (currentSection > 1) {
        currentSection--;
        loadSection(currentSection);
        currentQuestion = questionsPerSection;
        displayQuestion();
    }
});

// Submit the test
document.getElementById('submitTest').addEventListener('click', function() {
    submitTest();
});

function submitTest() {
    clearInterval(timer);
    document.getElementById('listeningTest').classList.add('hidden');
    document.getElementById('submissionConfirmation').classList.remove('active');
    // Here you would typically also handle the form data and send it to your backend or save it.
}

// Handle Submission Confirmation Navigation
// Optionally, you can navigate the user back to the overview or another section after submission


