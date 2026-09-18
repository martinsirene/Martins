// Mobile nav toggle
const navToggle = document.querySelector(’.nav-toggle’);
const navLinks = document.querySelector(’.nav-links’);
if (navToggle && navLinks) {
navToggle.addEventListener(‘click’, () => {
const open = navLinks.classList.toggle(‘open’);
navToggle.setAttribute(‘aria-expanded’, open ? ‘true’ : ‘false’);
});
}

// Bio word-reveal on scroll into view
const bioText = document.getElementById(‘bioText’);
if (bioText) {
const words = bioText.querySelectorAll(’.w’);
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
words.forEach((w, i) => {
setTimeout(() => { w.style.opacity = ‘1’; w.style.color = ‘var(–cream)’; }, i * 28);
});
observer.disconnect();
}
});
}, { threshold: 0.4 });
observer.observe(bioText);
}

// Scroll-driven timeline playhead
const playhead = document.getElementById(‘timelinePlayhead’);
if (playhead) {
const updatePlayhead = () => {
const scrollTop = window.scrollY;
const docHeight = document.documentElement.scrollHeight - window.innerHeight;
const progress = docHeight > 0 ? scrollTop / docHeight : 0;
const trackWidth = playhead.parentElement.offsetWidth;
playhead.style.transform = `translateX(${progress * trackWidth}px)`;
};
window.addEventListener(‘scroll’, updatePlayhead, { passive: true });
window.addEventListener(‘resize’, updatePlayhead);
updatePlayhead();
}
