import logoImg from './images/logo.jpg';

var header = document.createElement('header');
header.innerText = 'header';

var logo = document.createElement('img');
logo.src = logoImg;

header.appendChild(logo);

function sayHello() {
  return 'hello, world';
}

export { header, sayHello };
