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
