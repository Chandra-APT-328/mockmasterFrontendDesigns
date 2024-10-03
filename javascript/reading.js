let timeLeft = 60 * 60; // 60 minutes in seconds
        const timerElement = document.getElementById('timer');
        
        function updateTimer() {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            if (timeLeft > 0) {
                timeLeft--;
                setTimeout(updateTimer, 1000);
            } else {
                submitExam();
            }
        }
        
        updateTimer();

        const passages = [
            {
                image: 'https://via.placeholder.com/300',
                text: "Passage 1: The history of the automobile industry dates back to the late 19th century when cars were initially developed in Europe and America. Over time, the industry grew significantly, shaping economies and transforming societies globally. The technological advancements in this field have been vast, ranging from the invention of internal combustion engines to the creation of electric cars."
            },
            {
                image: 'https://via.placeholder.com/300',
                text: "Passage 2: The natural world has always fascinated humanity. From ancient times, humans have been observing the stars, mountains, oceans, and wildlife. One of the key areas of interest has been the behavior of migratory animals, which travel vast distances, often navigating with precision across continents."
            },
            {
                image: 'https://via.placeholder.com/300',
                text: "Passage 3: The rise of social media platforms has drastically changed the way we communicate. Starting as simple tools for connecting people, they have evolved into complex ecosystems where users can share media, network professionally, and even participate in political discussions. This change has brought both opportunities and challenges."
            }
        ];

        const allQuestions = [
            [
                { type: 'text', question: 'When did the automobile industry begin?' },
                { type: 'text', question: 'What was the first major technological advancement in automobiles?' },
                { type: 'radio', question: 'Which of the following is not a car type?', options: ['Sedan', 'SUV', 'Bus'] },
                { type: 'radio', question: 'Who is known as the father of the automobile?', options: ['Henry Ford', 'Karl Benz', 'Elon Musk'] },
                { type: 'checkbox', question: 'Select the types of cars mentioned in the passage.', options: ['Electric', 'Hybrid', 'SUV'] },
                { type: 'checkbox', question: 'Choose all benefits of the automobile industry.', options: ['Economic growth', 'Job creation', 'Pollution reduction'] },
                { type: 'text', question: 'What industry growth did the passage highlight?' },
                { type: 'text', question: 'How did cars impact global societies?' },
                { type: 'radio', question: 'What year was the automobile industry significantly developed?', options: ['1900s', '1800s', '2000s'] },
                { type: 'radio', question: 'Which country was NOT mentioned in the development of automobiles?', options: ['Germany', 'France', 'China'] },
                { type: 'checkbox', question: 'Select the major milestones in the automobile industry.', options: ['Electric cars', 'Airbags', 'Automatic transmissions'] },
                { type: 'checkbox', question: 'Choose the key developments in automotive technology.', options: ['Internal combustion engines', 'Electric batteries', 'Autonomous driving'] },
                { type: 'text', question: 'How has technology influenced the automobile industry?' }
            ],
            [
                { type: 'text', question: 'What is the main focus of the passage about the natural world?' },
                { type: 'radio', question: 'Which animal behavior was specifically highlighted?', options: ['Breeding', 'Migration', 'Hibernation'] },
                { type: 'radio', question: 'Who has been most fascinated by the natural world?', options: ['Scientists', 'Politicians', 'Engineers'] },
                { type: 'checkbox', question: 'Select all areas of the natural world mentioned in the passage.', options: ['Stars', 'Mountains', 'Urban areas'] },
                { type: 'checkbox', question: 'Choose all human activities related to nature discussed.', options: ['Observing stars', 'Building cities', 'Studying wildlife'] },
                { type: 'text', question: 'Why do people study migratory animals?' },
                { type: 'text', question: 'What are the main observations humans have made about nature?' },
                { type: 'radio', question: 'What has been a key focus of scientific study?', options: ['Weather patterns', 'Animal migration', 'Plant growth'] },
                { type: 'radio', question: 'Which concept was not covered in the passage?', options: ['Astronomy', 'Geography', 'Oceanography'] },
                { type: 'checkbox', question: 'Select the topics mentioned in the passage.', options: ['Animal behavior', 'Human history', 'Natural phenomena'] },
                { type: 'checkbox', question: 'Choose the types of nature-related studies mentioned.', options: ['Animal migration', 'Celestial observations', 'Soil composition'] },
                { type: 'text', question: 'What role do mountains play in human understanding of nature?' },
                { type: 'text', question: 'How have observations of nature influenced scientific progress?' }
            ],
            [
                { type: 'text', question: 'What is the main theme of the passage on social media?' },
                { type: 'radio', question: 'Which platform was not mentioned?', options: ['Facebook', 'LinkedIn', 'MySpace'] },
                { type: 'radio', question: 'What is a major change brought by social media?', options: ['Increased face-to-face interactions', 'Enhanced online communication', 'Decreased technology use'] },
                { type: 'checkbox', question: 'Select all functions of social media described in the passage.', options: ['Media sharing', 'Networking', 'Gaming'] },
                { type: 'checkbox', question: 'Choose the challenges associated with social media.', options: ['Privacy concerns', 'Increased connectivity', 'Information overload'] },
                { type: 'text', question: 'How has social media changed communication?' },
                { type: 'text', question: 'What opportunities and challenges have arisen from social media?' },
                { type: 'radio', question: 'What was not mentioned as a function of social media?', options: ['Professional networking', 'Media sharing', 'E-commerce'] },
                { type: 'radio', question: 'Which of the following is a result of social media?', options: ['Increased face-to-face interactions', 'Decreased online activity', 'Enhanced digital presence'] },
                { type: 'checkbox', question: 'Select all impacts of social media on society.', options: ['Political engagement', 'Social isolation', 'Cultural exchange'] },
                { type: 'checkbox', question: 'Choose the platforms that have evolved significantly.', options: ['Twitter', 'Instagram', 'Reddit'] },
                { type: 'text', question: 'What are the key effects of social media on professional networking?' },
                { type: 'text', question: 'How does social media influence political discussions?' },
                { type: 'text', question: 'In what ways has social media impacted global communication?' }
            ]
        ];

        let currentPart = 0;
        const partElements = [document.getElementById('part1'), document.getElementById('part2'), document.getElementById('part3')];
        const passageContent = document.getElementById('passage-content');
        const passageImage = document.getElementById('passage-image');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const submitBtn = document.getElementById('submit-btn');
        const partIndicator = document.getElementById('part-indicator');

        function updatePart() {
            partElements.forEach((part, index) => {
                part.classList.toggle('block', index === currentPart);
                part.classList.toggle('hidden', index !== currentPart);
            });
            const currentPassage = passages[currentPart];
            passageContent.textContent = currentPassage.text;
            passageImage.src = currentPassage.image;
            prevBtn.disabled = currentPart === 0;
            nextBtn.style.display = currentPart === 2 ? 'none' : 'inline-block';
            submitBtn.style.display = currentPart === 2 ? 'inline-block' : 'none';
            partIndicator.textContent = `Part ${currentPart + 1}`;
        }

        prevBtn.addEventListener('click', () => {
            if (currentPart > 0) {
                currentPart--;
                updatePart();
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentPart < 2) {
                currentPart++;
                updatePart();
            }
        });

        // Populate questions for each part
        allQuestions.forEach((questions, partIndex) => {
            const partElement = document.getElementById(`part${partIndex + 1}`);
            questions.forEach((question, index) => {
                const questionDiv = document.createElement('div');
                questionDiv.classList.add('mb-5');
                questionDiv.innerHTML = `<p class="font-semibold mb-2">Question ${index + 1}:</p><p>${question.question}</p>`;
                if (question.type === 'text') {
                    questionDiv.innerHTML += `<input type="text" placeholder="Write your answer" class="mt-2 p-2 border border-gray-300 rounded-md w-full">`;
                } else if (question.type === 'radio') {
                    question.options.forEach(option => {
                        questionDiv.innerHTML += `<label class="block mt-1"><input type="radio" name="q${index}" class="mr-2">${option}</label>`;
                    });
                } else if (question.type === 'checkbox') {
                    question.options.forEach(option => {
                        questionDiv.innerHTML += `<label class="block mt-1"><input type="checkbox" class="mr-2">${option}</label>`;
                    });
                }
                partElement.appendChild(questionDiv);
            });
        });

        // Submit functionality
        function submitExam() {
            document.body.innerHTML = `
                <div class="flex items-center justify-center h-screen bg-green-100 text-green-800">
                    <div class="text-center p-6 bg-white shadow-lg rounded-lg">
                        <h1 class="text-3xl font-bold mb-4">Exam Submitted!</h1>
                        <p class="text-xl mb-4">Thank you for completing the IELTS Reading Module.</p>
                        <button onclick="window.location.reload();" class="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">Return to Start</button>
                    </div>
                </div>
            `;
        }

        submitBtn.addEventListener('click', submitExam);

        updatePart(); // Initialize first part