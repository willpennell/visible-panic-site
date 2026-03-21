// Gallery lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const items = Array.from(document.querySelectorAll('.gallery-item img'));
let current = 0;

function openLightbox(index) {
    current = index;
    lightboxImg.src = items[current].src;
    lightboxImg.alt = items[current].alt;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

function showPrev() {
    current = (current - 1 + items.length) % items.length;
    lightboxImg.src = items[current].src;
    lightboxImg.alt = items[current].alt;
}

function showNext() {
    current = (current + 1) % items.length;
    lightboxImg.src = items[current].src;
    lightboxImg.alt = items[current].alt;
}

document.querySelectorAll('.gallery-item').forEach((item) => {
    const img = item.querySelector('img');
    item.addEventListener('click', () => openLightbox(items.indexOf(img)));
});

document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightboxPrev').addEventListener('click', showPrev);
document.getElementById('lightboxNext').addEventListener('click', showNext);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
});

// Mouse pixel effect
let lastPixelTime = 0;
document.addEventListener('mousemove', (e) => {
    // Throttle pixel creation to reduce density
    const now = Date.now();
    if (now - lastPixelTime < 30) return;
    lastPixelTime = now;

    // Create 1-3 random pixels per mouse move
    const pixelCount = Math.floor(Math.random() * 3) + 1;

    for (let i = 0; i < pixelCount; i++) {
        const pixel = document.createElement('div');
        pixel.className = 'mouse-pixel';

        // Smaller random offset from cursor position (reduced from 40 to 25)
        const offsetX = (Math.random() - 0.5) * 25;
        const offsetY = (Math.random() - 0.5) * 25;

        pixel.style.left = (e.pageX + offsetX) + 'px';
        pixel.style.top = (e.pageY + offsetY) + 'px';

        document.body.appendChild(pixel);

        // Remove pixel after animation
        setTimeout(() => {
            pixel.remove();
        }, 600);
    }
});
