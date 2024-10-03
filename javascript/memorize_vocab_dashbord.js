// Sample data for word counts in each deck
const deck1Words = ["word1", "word2", "word3", "word4", "word5", "word6" /* up to 50 words */];
const deck2Words = ["word51", "word52", "word53", "word54", "word55", "word56"/* up to 100 words */];
const deck3Words = ["word101", "word102", "word103", "word104", "word105", "word106"/* up to 150 words */];

// Calculate the number of words in each deck
document.getElementById('deck1-count').innerText = `${deck1Words.length} Words`;
document.getElementById('deck2-count').innerText = `${deck2Words.length} Words`;
document.getElementById('deck3-count').innerText = `${deck3Words.length} Words`;