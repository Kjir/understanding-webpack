import logoImg from './images/logo.jpg';

var header = document.createElement('header');

var logo = document.createElement('img');
logo.src = logoImg;

header.appendChild(logo);
header.appendChild(document.createElement('br'));

var navigation = document.createElement('nav');
header.appendChild(navigation);
var navlist = document.createElement('ol');
navigation.appendChild(navlist);
navlist.appendChild(createLinkItem('/', 'Home'));
navlist.appendChild(createLinkItem('/books', 'Books'));

function createLinkItem(path, text) {
  var linkItem = document.createElement('li');
  return linkItem.appendChild(createLink(path, text));
}

function createLink(path, text) {
  var link = document.createElement('a');
  link.href = path;
  link.innerText = text;
  link.dataset.navigo = '';
  return link;
}

export { header };
