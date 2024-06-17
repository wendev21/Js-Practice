// querySelector

const heading = document.querySelector('.header__texto h2');
heading.textContent = 'Nuevo heading';
console.log(heading);

// querySelectorAll

const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces);
enlaces[0].textContent = 'Nuevo enlace'
enlaces[0].href = 'https://www.google.de/?hl=de';
enlaces[0].classList.add('nueva_clase');
enlaces[0].classList.remove('nueva_clase');

// getElementById

const heading2 = document.getElementById('heading');
console.log(heading2);