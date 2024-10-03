 // Sample words data
 const words = {
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
        // Add more words here...
    ],
    medium: [
    {
            word: "Tenacious",
            definition: "Holding tightly onto something, or keeping an opinion in a determined way.",
            example: "Her tenacious attitude led to her success.",
            advantages: "Shows determination and persistence.",
            disadvantages: "Can be seen as stubborn or inflexible."
        },
{
    word: "Meticulous",
    definition: "Showing great attention to detail; very careful and precise.",
    example: "He was meticulous in his presentation.",
    advantages: "High-quality outcomes.",
    disadvantages: "Can be time-consuming and stressful."
}
        // Add more words here...
    ],
    hard: [
    {
            word: "Obfuscate",
            definition: "To deliberately make something unclear or difficult to understand.",
            example: "The lawyer's response was meant to obfuscate the facts.",
            advantages: "Can be useful in negotiations.",
            disadvantages: "Causes confusion and misunderstanding."
        },
{
    word: "Acrimonious",
    definition: "Angry and bitter in tone or manner.",
    example: "The debate became increasingly acrimonious.",
    advantages: "Expresses strong emotions.",
    disadvantages: "Can damage relationships."
}
        // Add more words here...
    ]
};

let currentLevel = 'easy';
let currentIndex = 0;

function showLevel(level) {
    currentLevel = level;
    currentIndex = 0;
    displayCard();
}

function displayCard() {
    const cardData = words[currentLevel][currentIndex];
    if (cardData) {
        document.getElementById('word').textContent = cardData.word;
        document.getElementById('definition').textContent = cardData.definition;
        document.getElementById('example').textContent = cardData.example;
        document.getElementById('advantages').textContent = cardData.advantages;
        document.getElementById('disadvantages').textContent = cardData.disadvantages;
    }
}

function flipCard(event) {
    if (event.target.id !== 'pronounce-btn') {
        event.currentTarget.classList.toggle('flipped');
    }
}

function handleFeedback(knew) {
    const messageBox = document.getElementById('messageBox');
    messageBox.style.display = 'block';
    messageBox.textContent = knew ? 'Great job!' : 'Keep trying!';
    setTimeout(() => {
        messageBox.style.display = 'none';
    }, 2000);
    nextWord();
}

function nextWord() {
    currentIndex = (currentIndex + 1) % words[currentLevel].length;
    displayCard();
}

function playPronunciation(event) {
    event.stopPropagation();
    const text = document.getElementById('word').textContent;
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}

function pageUp() {
    window.scrollBy(0, -window.innerHeight);
}

function pageDown() {
    window.scrollBy(0, window.innerHeight);
}

// Initialize with easy level
showLevel('easy');