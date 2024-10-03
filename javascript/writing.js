let timerElement = document.getElementById("timer");
        let saveStatusElement = document.getElementById("saveStatus");
        let task1Element = document.getElementById("task1");
        let task2Element = document.getElementById("task2");
        let startTestButton = document.getElementById("startTestButton");
        let nextTaskButton = document.getElementById("nextTaskButton");
        let submitTaskButton = document.getElementById("submitTaskButton");
        let instructionsPage = document.getElementById("instructionsPage");
        let task1Page = document.getElementById("task1Page");
        let task2Page = document.getElementById("task2Page");
        let submissionPage = document.getElementById("submissionPage");

        let totalTestTime = 3600; // 1 hour in seconds
        let interval;

        // Function to start the timer
        function startTimer(duration) {
            let timer = duration, minutes, seconds;
            interval = setInterval(() => {
                minutes = Math.floor(timer / 60);
                seconds = timer % 60;

                timerElement.textContent = `Time: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

                if (--timer < 0) {
                    clearInterval(interval);
                    showSubmissionPage();
                }
            }, 1000);
        }

        // Auto-save function to save content to local storage
        function autoSave() {
            localStorage.setItem("task1", task1Element.value);
            localStorage.setItem("task2", task2Element.value);
            saveStatusElement.textContent = "Auto-saved at " + new Date().toLocaleTimeString();
        }

        // Load saved content from local storage on page load
        function loadSavedContent() {
            task1Element.value = localStorage.getItem("task1") || "";
            task2Element.value = localStorage.getItem("task2") || "";
        }

        // Move to Task 1 and start the timer
        function moveToTask1() {
            instructionsPage.style.display = "none";
            task1Page.style.display = "block";
            startTimer(totalTestTime); // Start timer for both tasks
        }

        // Move to Task 2
        function moveToTask2() {
            task1Page.style.display = "none";
            task2Page.style.display = "block";
        }

        // Show submission confirmation page
        function showSubmissionPage() {
            clearInterval(interval); // Clear the interval when task is completed
            task1Page.style.display = "none";
            task2Page.style.display = "none";
            submissionPage.style.display = "block";
        }

        // Event listener to start the test and move to Task 1
        startTestButton.addEventListener("click", () => {
            moveToTask1();
        });

        // Event listener to switch to Task 2 page
        nextTaskButton.addEventListener("click", () => {
            moveToTask2();
        });

        // Event listener to simulate form submission and display the submission page
        submitTaskButton.addEventListener("click", () => {
            showSubmissionPage();
        });

        // Event listeners for auto-saving every few seconds
        task1Element.addEventListener("input", autoSave);
        task2Element.addEventListener("input", autoSave);

        // Initialize timer and load saved content on page load
        window.onload = function() {
            loadSavedContent();
        };