// ==========================================
// 1. Typing Effect for Hero Section
// ==========================================
const typingText = "Hi, I'm Meklit Anteneh"; // Text to type
const typingElement = document.getElementById('typing-effect');
let typingIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentText = typingElement.innerHTML;

    if (!isDeleting) {
        // Typing phase
        typingElement.innerHTML = typingText.substring(0, typingIndex + 1);
        typingIndex++;

        // If the text is fully typed, switch to deleting phase
        if (typingIndex === typingText.length) {
            isDeleting = true;
            setTimeout(typeWriter, 1000); // Pause before deleting
        } else {
            setTimeout(typeWriter, 100); // Typing speed (100ms per character)
        }
    } else {
        // Deleting phase
        typingElement.innerHTML = typingText.substring(0, typingIndex - 1);
        typingIndex--;

        // If the text is fully deleted, switch back to typing phase
        if (typingIndex === 0) {
            isDeleting = false;
            setTimeout(typeWriter, 500); // Pause before typing again
        } else {
            setTimeout(typeWriter, 50); // Deleting speed (50ms per character)
        }
    }
}

// Start the typing effect when the page loads
window.onload = typeWriter;

// ==========================================
// 2. Fun Facts Section
// ==========================================
const funFacts = [
    "I had no idea what coding meant until I dove into it.",
    "I love watching podcasts related to coding in my free time.",
    "My favorite programming language is JavaScript because of its versatility.",
    "I’m a big fan of sci-fi movies and books.",
    "I started coding because I wanted to solve societal problems.",
    "I’m passionate about writing journals and documenting my thoughts and experiences.",
    "I’m always curious about how things work under the hood.",
    "I believe technology can solve some of the world’s biggest problems."
];

const showFactButton = document.getElementById('showFactButton');
const funFactText = document.getElementById('funFactText');

// Event listener for showing a random fun fact
showFactButton.addEventListener('click', () => {
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)]; // Pick a random fact
    funFactText.textContent = randomFact; // Display the fact
});

// ==========================================
// 3. Toggle Navigation Bar for Mobile
// ==========================================
const menuIcon = document.getElementById('menuIcon');
const navBar = document.getElementById('navBar');

// Toggle the navigation bar on menu icon click
menuIcon.addEventListener('click', () => {
    navBar.classList.toggle('active'); // Toggle the active class
});

// Close the navigation bar when a link is clicked (optional)
const navLinks = document.querySelectorAll('#navBar ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navBar.classList.remove('active'); // Close the menu
    });
});

// ==========================================
// 4. Night Mode Toggle (Entire Page)
// ==========================================
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved user preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    updateToggleButton(savedTheme);
}

// Toggle Theme
themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleButton(newTheme);
});

// Update Toggle Button
function updateToggleButton(theme) {
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}