let lastScrollPosition = 0;
let totalRotation = 0;

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;
    const scrollDelta = currentScrollPosition - lastScrollPosition;

    totalRotation += scrollDelta * 0.5;

    const logo = document.getElementById('logo');
    logo.style.transform = `rotate(${totalRotation}deg)`;

    lastScrollPosition = currentScrollPosition;
});
