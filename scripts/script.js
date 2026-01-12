let inputfield = document.querySelector('.input-field');
let hiddenfield = document.querySelector('.hidden-field');
let convertBtn = document.querySelector('.convert-btn');

convertBtn.addEventListener('click', function () {
    inputfield.classList.add('input-moving');

    hiddenfield.classList.replace('hidden-field', 'unhidden-field');

    setTimeout(() => {
        inputfield.classList.remove('input-moving');

        hiddenfield.classList.replace('unhidden-field', 'hidden-field');
    }, 750);
});
