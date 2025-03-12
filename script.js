// Save user preference for light/dark mode
const toggle = document.getElementById('light-mode-toggle');

// Check if user has a saved preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    toggle.checked = true;
} else {
    document.body.classList.remove('light-mode');
    toggle.checked = false;
}

// Toggle light/dark mode and save preference
toggle.addEventListener('change', () => {
    if (toggle.checked) {
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
    }
});

// Typing effect for multiple titles
document.addEventListener('DOMContentLoaded', function() {
    const titles = ["Game Developer", "Software Developer", "UI/UX Designer"];
    const element = document.querySelector('.banner-text p');

    if (element) {
        let titleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeEffect() {
            let currentTitle = titles[titleIndex];
            
            if (!isDeleting) {
                element.textContent = currentTitle.substring(0, charIndex + 1);
                charIndex++;
            } else {
                element.textContent = currentTitle.substring(0, charIndex - 1);
                charIndex--;
            }

            let typingSpeed = isDeleting ? 100 : 150;

            if (!isDeleting && charIndex === currentTitle.length) {
                typingSpeed = 1000; // Pause before deleting
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                titleIndex = (titleIndex + 1) % titles.length;
                typingSpeed = 500; // Pause before typing new title
            }

            setTimeout(typeEffect, typingSpeed);
        }

        typeEffect();
    }
});
