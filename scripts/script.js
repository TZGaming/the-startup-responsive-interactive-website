let inputfield = document.querySelector('.input-field');
let hiddenfield = document.querySelector('.hidden-field');
let convertBtn = document.querySelector('.convert-btn');

convertBtn.addEventListener('click', function () {
    if (inputfield.value.trim() === '') return;

    inputfield.classList.add('input-moving');
    hiddenfield.classList.replace('hidden-field', 'unhidden-field');
});

inputfield.addEventListener('animationend', function () {
    inputfield.classList.remove('input-moving');
    hiddenfield.classList.replace('unhidden-field', 'hidden-field');

    inputfield.value = '';
});


let sideBar = document.querySelector('.side-bar');
let hamburger = document.querySelector('.hamburger-icon');

hamburger.addEventListener('click', function () {
  sideBar.classList.toggle('open');
  hamburger.classList.toggle('open');
});

let primaryButton = document.querySelector('.convert-btn');

primaryButton.addEventListener('click', function () {
  primaryButton.classList.toggle('click');

    setTimeout(() => {
        primaryButton.classList.remove('click');
    }, 250);
});