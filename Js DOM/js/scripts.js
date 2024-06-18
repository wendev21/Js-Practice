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

//Generar Nuevo enlace

const nuevoEnlace = document.createElement('A');
//add href
nuevoEnlace.href = 'nuevo-enlace.html';
// add text
nuevoEnlace.textContent = 'Un Nuevo Enlace';
// add class
nuevoEnlace.classList.add('navegacion__enlace');
console.log(nuevoEnlace);

// ADD DOM
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);