var _ = require('lodash');
var moment = require('moment');
var bookList = require('./books.json');

var pageSize = 10;

function createBookCard(book) {
  var author = document.createElement('h6');
  author.className = 'author';
  author.innerText = book.author;

  var title = document.createElement('h2');
  title.className = 'title';
  title.innerText = book.title;

  var image = document.createElement('img');
  image.src = `https://github.com/benoitvallon/100-best-books/raw/master/static/${book.imageLink}`;
  image.alt = book.title;

  var bookCard = document.createElement('div');
  bookCard.className = 'book';
  bookCard.appendChild(image);
  bookCard.appendChild(title);
  bookCard.appendChild(author);

  var publishedDate = document.createElement('p');
  var elapsedTime = moment([book.year]).fromNow();
  publishedDate.innerText = `Published ${elapsedTime}`;
  bookCard.appendChild(publishedDate);

  return bookCard;
}

function getChunkedBooks(chunkSize = 10) {
  return _.chunk(bookList, chunkSize);
}

function getPage(page) {
  return getChunkedBooks()[page - 1];
}

function getBookList(page) {
  var books = document.createElement('ul');
  books.className = 'books';

  getPage(page).forEach(function(book) {
    var bookItem = document.createElement('li');
    books.appendChild(bookItem);
    bookItem.appendChild(createBookCard(book));
  });

  return books;
}

function getBookNavigation(currentPage, chunkSize = 10) {
  var navlist = document.createElement('ol');
  navlist.className = 'pagination';
  var numPages = Math.ceil(bookList.length / chunkSize);

  _.range(1, numPages).forEach(page => {
    var pageItem = document.createElement('li');
    if (page == currentPage) {
      pageItem.innerText = page;
    } else {
      var pageLink = document.createElement('a');
      pageLink.href = `/books/${page}`;
      pageLink.innerText = page;
      pageItem.appendChild(pageLink);
    }
    navlist.appendChild(pageItem);
  });

  return navlist;
}

function getBooks({ page = 1 }) {
  var books = document.createElement('div');
  books.appendChild(getBookNavigation(page));
  books.appendChild(getBookList(page));
  return books;
}

exports.getBooks = getBooks;
