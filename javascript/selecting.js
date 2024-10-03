const words = ["canyon", "cave", "field", "glacier", "desert", "cliff"];
const images = [
    {word: "canyon", src: "../media/canyon.jpg"},
    {word: "cave", src: "../media/cave.jpg"},
    {word: "field", src: "../media/field.jpg"},
    {word: "glacier", src: "../media/glacier.jpg"},
    {word: "desert", src: "../media/desert.jpg"},
    {word: "cliff", src: "../media/cliff.jpg"}
];

let currentWord = "";

function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

function playSound() {
    const audio = new Audio(`${currentWord}.mp3`);
    audio.play();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function loadImages() {
    const selectedImages = images.slice();
    shuffleArray(selectedImages);

    const correctImage = selectedImages.find(image => image.word === currentWord);
    const randomImages = shuffleArray(selectedImages.filter(image => image.word !== currentWord)).slice(0, 5);
    const imageSet = shuffleArray([correctImage, ...randomImages]);

    const imageGrid = document.getElementById('image-grid');
    imageGrid.innerHTML = '';

    imageSet.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.word;
        imgElement.classList.add('w-full', 'h-72', 'object-cover', 'border', 'border-gray-300', 'rounded', 'cursor-pointer', 'transition-transform', 'duration-200', 'hover:scale-105');
        imgElement.onclick = () => checkAnswer(image.word);
        imageGrid.appendChild(imgElement);
    });
}

function checkAnswer(selectedWord) {
    const resultMessage = document.getElementById('result-message');
    if (selectedWord === currentWord) {
        resultMessage.innerText = "Right answer!";
        resultMessage.classList.add('text-green-600');
    } else {
        resultMessage.innerText = "False answer!";
        resultMessage.classList.add('text-red-600');
    }
}

function startExercise() {
    currentWord = getRandomWord();
    loadImages();
}

document.addEventListener('DOMContentLoaded', startExercise);
