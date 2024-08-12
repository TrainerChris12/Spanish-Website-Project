const hamburgerIcon = document.querySelector('.hamburgerIcon');
const navLinksContainer = document.querySelector('.navLinksContainer');

hamburgerIcon.addEventListener('click', () => {
    if (navLinksContainer.style.display == 'none') {
        navLinksContainer.style.display = 'flex';
    }
    else {
        navLinksContainer.style.display = 'none';
    }
});

