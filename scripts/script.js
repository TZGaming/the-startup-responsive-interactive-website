let inputfield = document.querySelector('.input-field');
let hiddenfield = document.querySelector('.hidden-field');
let convertBtn = document.querySelector('.convert-btn');
let musicImg = document.querySelector('.notebar-container img');

// Notenbalk fotos met muzieknoten
const noteImages = [
    'assets/template_music_bar/with_notes1.png',
    'assets/template_music_bar/with_notes2.png',
    'assets/template_music_bar/with_notes3.png'
];

// Click voor animatie trigger
let lastImage = null;

convertBtn.addEventListener('click', function () {
    if (inputfield.value.trim() === '') return;

    inputfield.classList.add('input-moving');
    hiddenfield.classList.replace('hidden-field', 'unhidden-field');
});

inputfield.addEventListener('animationend', function () {
    inputfield.classList.remove('input-moving');
    hiddenfield.classList.replace('unhidden-field', 'hidden-field');
    inputfield.value = '';

// Altijd een random pick van de 3 notenbalk fotos
    setTimeout(() => {
        let newImage;

        do {
            newImage = noteImages[Math.floor(Math.random() * noteImages.length)];
        } while (newImage === lastImage);

        musicImg.src = newImage;
        lastImage = newImage;
    }, 0);
});

// Hamburger menu die class toevoegd on click
let sideBar = document.querySelector('.side-bar');
let hamburger = document.querySelector('.hamburger-icon');

hamburger.addEventListener('click', function () {
  sideBar.classList.toggle('open');
  hamburger.classList.toggle('open');
});

// Button scale animatie on click
let primaryButton = document.querySelector('.convert-btn');

primaryButton.addEventListener('click', function () {
  primaryButton.classList.toggle('click');

    setTimeout(() => {
        primaryButton.classList.remove('click');
    }, 250);
});