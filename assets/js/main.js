const cards = document.querySelector('.cards');
document.addEventListener('mousemove', (e) => {
    cards.style.setProperty('--x', e.x + "px");
    cards.style.setProperty('--y', e.y + "px");
})