document.addEventListener('DOMContentLoaded', () => {
    const words = {
        "Abandon": "To leave something behind.",
        "Ability": "The power or skill to do something.",
        "Absent": "Not present in a place.",
        "Abundant": "Existing or available in large quantities.",
        "Accelerate": "To increase speed.",
        "Accept": "To receive or agree to.",
        "Access": "The means of approaching or entering a place.",
        "Accomplish": "To achieve or complete successfully.",
        "Account": "A record or statement of financial expenditure and receipts.",
        "Accumulate": "To gather or collect.",
        "Accuracy": "The quality or state of being correct.",
        "Achieve": "To successfully reach a desired objective.",
        "Acquire": "To buy or obtain an asset.",
        "Act": "To take action; do something.",
        "Adapt": "To adjust to new conditions.",
        "Add": "To combine or join something to something else.",
        "Address": "To speak to; to deal with a problem.",
        "Adjust": "To alter or move something slightly.",
        "Administer": "To manage and be responsible for the running of a business or organization.",
        "Admire": "To regard with respect or warm approval.",
        "Admit": "To confess to be true or to be the case.",
        "Benevolent": "Showing kindness and goodwill.",
"Balanced": "Being in a state of balance.",
"Brilliant": "Exceptionally clever or talented.",
"Bizarre": "Very strange or unusual.",
"Blissful": "Extremely happy.",
"Bold": "Showing a willingness to take risks.",
"Boundless": "Unlimited or immense.",
"Bountiful": "Large in quantity; abundant.",
"Brave": "Ready to face and endure danger or pain.",
"Breezy": "Pleasantly windy.",
"Bright": "Giving out or reflecting a lot of light.",
"Brisk": "Active, fast, and energetic.",
"Bubbly": "Cheerful and energetic.",
"Buoyant": "Able to stay afloat or rise to the top of a liquid.",
"Bustling": "Full of activity; busy.",

"Candid": "Truthful and straightforward.",
"Calm": "Not showing or feeling nervousness or anger.",
"Capable": "Having the ability to do something.",
"Careful": "Making sure of avoiding potential danger.",
"Cautious": "Careful to avoid potential problems or dangers.",
"Celebrated": "Greatly admired; renowned.",
"Charming": "Pleasant or attractive.",
"Cheerful": "Noticeably happy and optimistic.",
"Clever": "Quick to understand, learn, and devise ideas.",
"Colorful": "Having bright or varied colors.",
"Comfortable": "Providing physical ease and relaxation.",
"Confident": "Feeling or showing confidence in oneself.",
"Courageous": "Not deterred by danger or pain; brave.",
"Courteous": "Polite, respectful, or considerate.",
"Creative": "Involving the use of imagination to create something.",

"Diligent": "Showing care and conscientiousness.",
"Daring": "Adventurous or audaciously bold.",
"Decisive": "Settling an issue; producing a definite result.",
"Delicate": "Very fine in texture or structure.",
"Dependable": "Trustworthy and reliable.",
"Determined": "Having made a firm decision.",
"Dignified": "Having or showing a composed manner.",
"Diplomatic": "Dealing with people in a sensitive and tactful way.",
"Disciplined": "Showing a controlled form of behavior.",
"Dynamic": "Characterized by constant change or activity.",
"Dramatic": "Relating to drama or the performance of it.",
"Dutiful": "Conscientiously or obediently fulfilling one's duty.",
"Durable": "Able to withstand wear, pressure, or damage.",
"Dazzling": "Extremely bright, especially so as to blind.",
"Diverse": "Showing a great deal of variety.",

"Eloquent": "Fluent or persuasive in speaking or writing.",
"Eager": "Wanting to do or have something very much.",
"Earnest": "Resulting from or showing sincere conviction.",
"Efficient": "Achieving maximum productivity with minimum waste.",
"Elegant": "Pleasingly graceful and stylish.",
"Empathetic": "Showing an ability to understand others' feelings.",
"Energetic": "Showing or involving great activity or vitality.",
"Enthusiastic": "Having or showing intense and eager enjoyment.",
"Euphoric": "Characterized by or feeling intense excitement.",
"Exemplary": "Serving as a desirable model.",
"Exquisite": "Extremely beautiful and delicate.",
"Expressive": "Effectively conveying thought or feeling.",
"Extraordinary": "Very unusual or remarkable.",
"Effervescent": "Vivacious and enthusiastic.",
"Evolving": "Developing gradually.",

"Fascinating": "Extremely interesting.",
"Faithful": "Loyal, constant, and steadfast.",
"Fearless": "Lacking fear.",
"Flexible": "Capable of bending easily without breaking.",
"Focused": "Paying particular attention to.",
"Fortunate": "Favored by or involving good luck.",
"Friendly": "Kind and pleasant.",
"Frugal": "Sparing or economical with resources.",
"Fulfilled": "Satisfied or happy because of fully developing abilities.",
"Futuristic": "Having or involving advanced technology.",
"Fervent": "Having or displaying a passionate intensity.",
"Famous": "Known about by many people.",
"Fantastic": "Extraordinarily good or attractive.",
"Fearsome": "Inspiring fear or respect.",
"Flexible": "Able to adapt to different circumstances.",

"Generous": "Showing a readiness to give more of something.",
"Gentle": "Having or showing a mild, kind, or tender temperament.",
"Genuine": "Truly what something is said to be.",
"Gifted": "Having exceptional talent or natural ability.",
"Glamorous": "Having an attractive or exciting quality.",
"Glorious": "Having, worthy of, or bringing fame or admiration.",
"Graceful": "Having or showing grace or elegance.",
"Grateful": "Feeling or showing an appreciation of kindness.",
"Grounded": "Well balanced and sensible.",
"Growing": "Undergoing natural development.",
"Gutsy": "Showing courage or determination.",
"Gleeful": "Exuberantly or triumphantly joyful.",
"Gracious": "Courteous, kind, and pleasant.",
"Grand": "Magnificent and imposing in appearance.",
"Gregarious": "Fond of company; sociable.",

"Honest": "Free of deceit; truthful and sincere.",
"Humble": "Having or showing a modest or low estimate of one's importance.",
"Humorous": "Causing lighthearted laughter and amusement.",
"Harmonious": "Forming a pleasing or consistent whole.",
"Helpful": "Giving or ready to give help.",
"Hardworking": "Tending to work with energy and commitment.",
"Heroic": "Having the characteristics of a hero.",
"Hilarious": "Extremely amusing.",
"Hopeful": "Feeling or inspiring optimism about a future event.",
"Hospitable": "Friendly and welcoming to strangers or guests.",
"Humane": "Having or showing compassion.",
"Hyperactive": "Abnormally or extremely active.",
"Hypnotic": "Exerting a compelling, fascinating, or entrancing effect.",
"Honorable": "Deserving respect or high regard.",
"Healthy": "In a good physical or mental condition.",

"Innovative": "Featuring new methods; advanced and original.",
"Inspiring": "Having the effect of inspiring someone.",
"Intelligent": "Having or showing intelligence, especially of a high level.",
"Intuitive": "Using or based on what one feels to be true without reasoning.",
"Imaginative": "Having or showing creativity or inventiveness.",
"Impartial": "Treating all rivals or disputants equally.",
"Independent": "Free from outside control.",
"Industrious": "Diligent and hardworking.",
"Influential": "Having great influence on someone or something.",
"Ingenious": "Clever, original, and inventive.",
"Inquisitive": "Curious or inquiring.",
"Insightful": "Having or showing an accurate and deep understanding.",
"Inspirational": "Providing or showing creative or spiritual inspiration.",
"Invincible": "Too powerful to be defeated or overcome.",
"Inviting": "Offering the promise of an attractive or enjoyable experience.",

"Joyful": "Feeling, expressing, or causing great pleasure and happiness.",
"Judicious": "Having, showing, or done with good judgment or sense.",
"Jubilant": "Feeling or expressing great happiness and triumph.",
"Jocular": "Fond of or characterized by joking.",
"Jovial": "Cheerful and friendly.",
"Joyous": "Feeling, showing, or causing joy.",
"Judicious": "Having, showing, or done with good judgment.",
"Juicy": "Full of juice; succulent.",
"Jumpy": "Nervous or anxious, especially because of anticipation.",
"Jaded": "Tired or bored after having too much of something.",
"Jaunty": "Having or expressing a lively, cheerful manner.",
"Jazzy": "Bright, colorful, and showy.",
"Jiggly": "Tending to move or sway from side to side.",
"Jocund": "Cheerful and lighthearted.",
"Justifiable": "Able to be shown to be right or reasonable.",

"Kind": "Having or showing a friendly, generous, and considerate nature.",
"Keen": "Having or showing eagerness or enthusiasm.",
"Knowledgeable": "Intelligent and well informed.",
"Kooky": "Strange or eccentric.",
"Kingly": "Relating to a king; royal.",
"Kinetic": "Relating to or resulting from motion.",
"Keen-eyed": "Quick to notice things.",
"Knavish": "Dishonest or unscrupulous.",
"Kosher": "Genuine and legitimate.",
"Knightly": "Chivalrous and courteous.",
"Kindred": "Similar in kind; related.",
"Kissable": "Inviting to be kissed through charm.",
"Knavery": "Action or practice characteristic of a knave.",
"Knee-deep": "Very involved or committed.",
"Knockout": "An outstanding or impressive person or thing.",

"Lively": "Full of life and energy.",
"Loyal": "Giving or showing firm and constant support.",
"Lucid": "Expressed clearly; easy to understand.",
"Luminous": "Full of or shedding light; bright or shining.",
"Lavish": "Sumptuously rich, elaborate, or luxurious.",
"Lyrical": "Expressing the writer's emotions in an imaginative way.",
"Logical": "Of or according to the rules of logic.",
"Liberal": "Willing to respect or accept behavior or opinions.",
"Lovable": "Inspiring or deserving love or affection.",
"Limitless": "Without end, limit, or boundary.",
"Lasting": "Enduring or able to endure over a long period.",
"Lush": "Growing luxuriantly.",
"Laudable": "Deserving praise and commendation.",
"Level-headed": "Calm and sensible.",
"Light-hearted": "Cheerful and carefree.",

"Magnificent": "Extremely beautiful, elaborate, or impressive.",
"Majestic": "Having or showing impressive beauty or dignity.",
"Meticulous": "Showing great attention to detail; very careful.",
"Mindful": "Conscious or aware of something.",
"Modest": "Unassuming in the estimation of one's abilities.",
"Motivated": "Provided with a reason to act in a certain way.",
"Mysterious": "Difficult or impossible to understand or explain.",
"Magnetic": "Attractive in a way that holds attention.",
"Marvelous": "Causing great wonder; extraordinary.",
"Mature": "Fully developed physically; full-grown.",
"Methodical": "Done according to a systematic or established form.",
"Mighty": "Possessing great and impressive power or strength.",
"Mirthful": "Full of mirth; merry or amusing.",
"Mellow": "Pleasantly smooth or soft; free from harshness.",
"Merciful": "Showing compassion or forgiveness.",

"Noble": "Having or showing fine personal qualities or high moral principles.",
"Neat": "Arranged in a tidy way.",
"Nurturing": "Providing care and nourishment.",
"Nimble": "Quick and light in movement or action.",
"Nostalgic": "Characterized by or exhibiting feelings of nostalgia.",
"Nifty": "Particularly good, skillful, or effective.",
"Nurtured": "Cared for and protected while growing.",
"Noteworthy": "Deserving attention.",
"Nurtured": "Supported and encouraged during development.",
"Neighborly": "Friendly and helpful to others.",
"Natural": "Existing in or caused by nature.",
"Notable": "Worthy of attention or notice.",
"Noble-hearted": "Having an honorable and generous heart.",
"Neutral": "Not supporting or helping either side.",
"Nurturing": "Providing love, support, attention, and encouragement.",

"Optimistic": "Hopeful and confident about the future.",
"Outstanding": "Exceptionally good.",
"Organized": "Arranged in a systematic way.",
"Observant": "Quick to notice things.",
"Opportunistic": "Exploiting chances offered by immediate circumstances.",
"Obedient": "Complying or willing to comply with orders or requests.",
"Obliging": "Willing to do a service or kindness.",
"Open-minded": "Willing to consider new ideas.",
"Original": "Present or existing from the beginning.",
"Outspoken": "Frank in stating one's opinions.",
"Outrageous": "Shockingly bad or excessive.",
"Optimistic": "Hopeful and confident about the future.",
"Orderly": "Neatly and methodically arranged.",
"Outgoing": "Friendly and socially confident.",
"Overjoyed": "Extremely happy or delighted.",

"Polite": "Having or showing behavior that is respectful and considerate.",
"Patient": "Able to accept or tolerate delays without becoming annoyed.",
"Positive": "Constructive, optimistic, or confident.",
"Persistent": "Continuing firmly or obstinately in an action.",
"Passionate": "Showing or caused by strong feelings.",
"Perceptive": "Having or showing sensitive insight.",
"Persuasive": "Good at persuading someone to do or believe something.",
"Peaceful": "Free from disturbance; tranquil.",
"Playful": "Fond of games and amusement.",
"Punctual": "Happening or doing something at the agreed time.",
"Practical": "Concerned with the actual doing of something.",
"Powerful": "Having great power or strength.",
"Precious": "Of great value; not to be wasted or treated carelessly.",
"Productive": "Achieving a significant amount or result.",
"Proactive": "Creating or controlling a situation rather than just responding.",

"Quiet": "Making little or no noise.",
"Quick": "Moving fast or able to move fast.",
"Quaint": "Attractively unusual or old-fashioned.",
"Qualified": "Officially recognized as being trained to perform a job.",
"Quality": "The standard of something as measured against other things.",
"Quirky": "Characterized by peculiar or unexpected traits.",
"Quintessential": "Representing the most perfect or typical example of a quality.",
"Questioning": "Showing an interest in learning new things.",
"Quick-witted": "Showing or characterized by an ability to think or respond quickly.",
"Quizzical": "Indicating mild or amused puzzlement.",
"Quietude": "A state of stillness, calmness, and quiet in a person or place.",
"Quintuple": "Fivefold; consisting of five parts.",
"Quiescent": "In a state or period of inactivity or dormancy.",
"Qualified": "Competent or knowledgeable to perform a duty.",
"Quenchable": "Able to satisfy a thirst or desire.",

"Reliable": "Consistently good in quality or performance.",
"Resilient": "Able to withstand or recover quickly from difficult conditions.",
"Respectful": "Feeling or showing deference and respect.",
"Resourceful": "Having the ability to find quick and clever ways to overcome difficulties.",
"Radiant": "Sending out light; shining or glowing brightly.",
"Rational": "Based on or in accordance with reason or logic.",
"Realistic": "Having or showing a sensible and practical idea.",
"Relaxed": "Free from tension and anxiety.",
"Responsible": "Having an obligation to do something.",
"Receptive": "Willing to consider or accept new suggestions and ideas.",
"Robust": "Strong and healthy; vigorous.",
"Romantic": "Conducive to or characterized by the expression of love.",
"Righteous": "Morally right or justifiable.",
"Respectable": "Regarded by society to be good, proper, or correct.",
"Resilient": "Able to recover quickly from harm or adversity.",

"Sincere": "Free from pretense or deceit.",
"Supportive": "Providing encouragement or emotional help.",
"Sympathetic": "Feeling, showing, or expressing sympathy.",
"Serene": "Calm, peaceful, and untroubled.",
"Skillful": "Having or showing skill.",
"Sensible": "Chosen in accordance with wisdom or prudence.",
"Spontaneous": "Performed or occurring as a result of a sudden impulse.",
"Strong": "Having the power to move heavy weights or perform physical tasks.",
"Successful": "Accomplishing an aim or purpose.",
"Superior": "Higher in rank, status, or quality.",
"Surprising": "Causing surprise; unexpected.",
"Sophisticated": "Having a great deal of worldly experience and knowledge.",
"Supportive": "Providing encouragement or emotional help.",
"Steadfast": "Resolutely or dutifully firm and unwavering.",
"Sturdy": "Strong enough to withstand rough work or wear.",

"Thoughtful": "Absorbed in or involving thought.",
"Trustworthy": "Able to be relied on as honest or truthful.",
"Talented": "Having a natural aptitude or skill for something.",
"Thorough": "Performed or written with great care and completeness.",
"Tolerant": "Showing willingness to allow the existence of opinions.",
"Tactful": "Having or showing adroitness and sensitivity.",
"Thankful": "Pleased and relieved.",
"Thrifty": "Using money and other resources carefully.",
"Tenacious": "Tending to keep a firm hold of something.",
"Tranquil": "Free from disturbance; calm.",
"Terrific": "Of great size, amount, or intensity.",
"Timely": "Done or occurring at a favorable or useful time.",
"Tireless": "Having or showing great effort or energy.",
"Thoughtful": "Showing consideration for the needs of others.",
"Trusting": "Showing or tending to have a belief in a person's honesty.",

"Unique": "Being the only one of its kind; unlike anything else.",
"Upbeat": "Cheerful; optimistic.",
"Understanding": "Sympathetically aware of other people's feelings.",
"Unyielding": "Not giving way to pressure.",
"Useful": "Able to be used for a practical purpose or in several ways.",
"Uplifting": "Morally or spiritually elevating.",
"Unstoppable": "Impossible to stop or prevent.",
"Urbane": "Suave, courteous, and refined in manner.",
"Ultimate": "Being or happening at the end of a process.",
"Unassuming": "Not pretentious or arrogant.",
"Undeniable": "Unable to be denied or disputed.",
"Unquestionable": "Not able to be disputed or doubted.",
"Understanding": "Showing empathy and compassion.",
"Unforgettable": "Impossible to forget.",
"Universal": "Applicable to all cases.",

"Vibrant": "Full of energy and enthusiasm.",
"Valiant": "Possessing or showing courage or determination.",
"Versatile": "Able to adapt or be adapted to many different functions.",
"Victorious": "Having won a victory.",
"Valuable": "Worth a great deal of money.",
"Vigilant": "Keeping careful watch for possible danger.",
"Vigorous": "Strong, healthy, and full of energy.",
"Virtuous": "Having or showing high moral standards.",
"Visionary": "Thinking about or planning the future.",
"Vivid": "Producing powerful feelings or strong images.",
"Volatile": "Liable to change rapidly and unpredictably.",
"Vulnerable": "Susceptible to physical or emotional attack or harm.",
"Voracious": "Wanting or devouring great quantities of food.",
"Valiant": "Possessing or showing courage.",
"Vibrant": "Full of life and energy.",

"Wise": "Having or showing experience, knowledge, and good judgment.",
"Witty": "Showing or characterized by quick and inventive verbal humor.",
"Warm": "Having or showing enthusiasm, affection, or kindness.",
"Worthy": "Deserving effort, attention, or respect.",
"Watchful": "Watching or observing someone or something closely.",
"Wholesome": "Conducive to or suggestive of good health.",
"Welcoming": "Friendly or making you feel welcome.",
"Willing": "Ready, eager, or prepared to do something.",
"Witty": "Showing or characterized by quick and inventive verbal humor.",
"Wistful": "Having or showing a feeling of vague or regretful longing.",
"Wonderful": "Inspiring delight, pleasure, or admiration.",
"Wise": "Having or showing experience, knowledge, and good judgment.",
"Winsome": "Attractive or appealing in a fresh, innocent way.",
"Well-mannered": "Having or showing good manners.",
"Worthy": "Deserving respect or attention.",

"Xenial": "Friendly relations between host and guest.",
"Xenodochial": "Friendly to strangers.",
"Xenophile": "An individual who is attracted to foreign peoples.",
"Xenophobic": "Having a fear of foreigners.",
"Xanthic": "Yellow; yellowish.",
"Xenogeny": "The production of offspring entirely unlike the parent.",
"Xerox": "To make a copy of a document.",
"Xenogenesis": "The production of offspring that are markedly different.",
"Xenodochy": "Hospitality to strangers.",
"Xenoglossy": "The ability to speak a language that one has never learned.",
"Xylophagous": "Feeding on or obtaining nourishment from wood.",
"Xylography": "The art of engraving on wood.",
"Xylophone": "A musical instrument played by striking a row of wooden bars.",
"Xerophilous": "Able to withstand dry conditions.",
"Xenial": "Relating to hospitality between host and guest.",

"Youthful": "Young or seeming young.",
"Yielding": "Giving way under pressure.",
"Yummy": "Delicious or tasty.",
"Yare": "Quick; agile; lively.",
"Yonder": "At some distance in the direction indicated.",
"Yearning": "A feeling of intense longing for something.",
"Yahoo": "A rude, noisy, or violent person.",
"Yankee": "An American.",
"Yoke": "A wooden crosspiece fastened over the necks of two animals.",
"Yowl": "A loud wailing cry.",
"Yoke": "To join together.",
"Yeoman": "A man holding and cultivating a small landed estate.",
"Yule": "Christmas, or the Christmas season.",
"Youth": "The period between childhood and adult age.",
"Yearn": "To have an intense feeling of longing.",

"Zest": "Great enthusiasm and energy.",
"Zealous": "Having or showing zeal.",
"Zany": "Amusingly unconventional and idiosyncratic.",
"Zippy": "Bright, fresh, or lively.",
"Zenith": "The time at which something is most powerful.",
"Zonal": "Relating to a zone or zones.",
"Zestful": "Full of zest.",
"Ziggurat": "A rectangular stepped tower.",
"Zodiacal": "Relating to the zodiac.",
"Zany": "Amusingly unconventional and idiosyncratic.",
"Zero": "No quantity or number.",
"Zoom": "Move or travel very quickly.",
"Zymurgy": "The study or practice of fermentation.",
"Zodiac": "A belt of the heavens including all apparent positions of the sun.",
"Zephyr": "A gentle, mild breeze."
        // Add more words as needed
    };

    const wordList = document.getElementById('wordList');
    const popupContainer = document.getElementById('popupContainer');
    const overlay = document.getElementById('overlay');
    const popupWord = document.getElementById('popupWord');
    const popupMeaning = document.getElementById('popupMeaning');
    const popupClose = document.getElementById('popupClose');
    const pronounceButton = document.getElementById('pronounceButton');
    const searchBar = document.getElementById('searchBar');
    const filter = document.getElementById('filter');
    const scrollToTopButton = document.getElementById('scrollToTop');

    const displayWords = (filterLetter = '', searchTerm = '') => {
        wordList.innerHTML = '';
        const filteredWords = Object.keys(words).filter(word => {
            const matchesFilter = filterLetter === '' || word.toUpperCase().startsWith(filterLetter);
            const matchesSearch = searchTerm === '' || word.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesFilter && matchesSearch;
        });

        if (filteredWords.length === 0) {
            wordList.innerHTML = '<p class="col-span-full text-center text-gray-500">No words found.</p>';
            return;
        }

        filteredWords.forEach(word => {
            const wordBox = document.createElement('div');
            wordBox.className = 'bg-blue-500 text-white p-4 rounded-md cursor-pointer text-center transition hover:bg-blue-700';
            wordBox.textContent = word;

            // Add click event listener to show the popup box
            wordBox.addEventListener('click', () => {
                popupWord.textContent = word;
                popupMeaning.textContent = words[word];
                popupContainer.classList.remove('hidden');
                overlay.classList.remove('hidden');
            });

            wordList.appendChild(wordBox);
        });
    };

    // Initialize the word list
    displayWords();

    // Close popup
    popupClose.addEventListener('click', () => {
        popupContainer.classList.add('hidden');
        overlay.classList.add('hidden');
    });

    // Close popup when clicking outside the popup content
    overlay.addEventListener('click', () => {
        popupContainer.classList.add('hidden');
        overlay.classList.add('hidden');
    });

    // Pronounce the word
    pronounceButton.addEventListener('click', () => {
        const utterance = new SpeechSynthesisUtterance(popupWord.textContent);
        speechSynthesis.speak(utterance);
    });

    // Event listeners for search and filter
    searchBar.addEventListener('input', () => {
        displayWords(filter.value, searchBar.value);
    });

    filter.addEventListener('change', () => {
        displayWords(filter.value, searchBar.value);
    });

    // Show the scroll-to-top button when scrolled down
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollToTopButton.classList.remove('hidden');
        } else {
            scrollToTopButton.classList.add('hidden');
        }
    });

    // Scroll to top when button is clicked
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});