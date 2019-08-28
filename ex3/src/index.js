import Navigo from 'navigo';
import './css/style.css';
import { header } from './header';
import { footer } from './footer';
import { main } from './main';
import { getBooks } from './pages/books';

function swapPage(content) {
  var app = document.getElementById('app');
  if (app.childElementCount > 0) {
    app.firstChild.replaceWith(content);
  } else {
    app.appendChild(content);
  }
}

var app = document.createElement('div');
app.id = 'app';

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(header);
  document.body.appendChild(app);
  document.body.appendChild(footer);
  var router = new Navigo();
  router.on('/', () => swapPage(main));
  router.on('/books', () => swapPage(getBooks(0)));
  router.on('/books/:page', page => swapPage(getBooks(page)));
  router.resolve();
});
