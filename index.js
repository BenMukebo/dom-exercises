const body = document.querySelector('body');
const h1 = document.createElement('h1');
const span = document.createElement('span');
const button = document.createElement('button');

h1.innerText = 'Background Color: ';
button.innerText = 'CLICK ME';

h1.appendChild(span);
body.appendChild(h1);
body.appendChild(button);
