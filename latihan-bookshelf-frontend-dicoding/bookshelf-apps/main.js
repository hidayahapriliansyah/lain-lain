const booksList = [];
const RENDER_EVENT_UI = 'render-event-ui';
const RENDER_SEARCH_UI = 'render-search-ui';

document.addEventListener('DOMContentLoaded', function () {
  const submitBtn = document.getElementById('bookSubmit');
  submitBtn.addEventListener('click', function (event) {
    event.preventDefault();
    // console.log('ok');
    addBook();
  });

  const searchInput = document.getElementById('searchBookTitle');
  searchInput.addEventListener('keyup', function (event) {
    event.preventDefault();

    document.dispatchEvent(new Event(RENDER_SEARCH_UI));
  });
});

function searchBook() {
  const title = document.getElementById('searchBookTitle').value;
  const resultBooksByTitle = booksList.filter((book) =>
    book.title.match(title)
  );

  return resultBooksByTitle;
}

function addBook() {
  const title = document.getElementById('inputBookTitle').value;
  const author = document.getElementById('inputBookAuthor').value;
  const year = document.getElementById('inputBookYear').value;
  const isFinished = document.getElementById('inputBookIsComplete').checked;

  const generatedId = idGenerator();

  const bookObject = generateBookObject(
    generatedId,
    title,
    author,
    year,
    isFinished
  );

  booksList.push(bookObject);

  document.dispatchEvent(new Event(RENDER_EVENT_UI));
  document.dispatchEvent(new Event(RENDER_SEARCH_UI));
}

function idGenerator() {
  return +new Date();
}

function generateBookObject(id, title, author, year, isFinished) {
  return {
    id,
    title,
    author,
    year,
    isFinished,
  };
}

function findBook(bookId) {
  for (const bookItem of booksList) {
    if (bookItem.id === bookId) {
      return bookItem;
    }
  }

  return null;
}

function addToFinished(bookId) {
  const bookTarget = findBook(bookId);

  bookTarget.isFinished = true;
  document.dispatchEvent(new Event(RENDER_EVENT_UI));
  document.dispatchEvent(new Event(RENDER_SEARCH_UI));
}

function addToUnfinished(bookId) {
  const bookTarget = findBook(bookId);

  bookTarget.isFinished = false;
  document.dispatchEvent(new Event(RENDER_EVENT_UI));
  document.dispatchEvent(new Event(RENDER_SEARCH_UI));
}

function removeBook(bookId) {
  const bookTarget = findBook(bookId);

  if (bookTarget === -1) return;

  booksList.splice(bookTarget, 1);
  document.dispatchEvent(new Event(RENDER_EVENT_UI));
  document.dispatchEvent(new Event(RENDER_SEARCH_UI));
}

function makeBooksUIElement(book) {
  const articleBookItem = document.createElement('article');
  articleBookItem.classList.add('book_item');

  const h3BookTitle = document.createElement('h3');
  h3BookTitle.innerText = book.title;

  const pAuthor = document.createElement('p');
  pAuthor.innerText = book.author;

  const pYear = document.createElement('p');
  pYear.innerText = book.year;

  const divAction = document.createElement('div');
  divAction.classList.add('action');

  const buttonGreen = document.createElement('button');
  buttonGreen.classList.add('green');

  const buttonRed = document.createElement('button');
  buttonRed.classList.add('red');
  buttonRed.innerText = 'Hapus Buku';

  if (book.isFinished !== true) {
    buttonGreen.innerText = 'Selesai dibaca';

    buttonGreen.addEventListener('click', function () {
      addToFinished(book.id);
    });
  } else {
    buttonGreen.innerText = 'Belum selesai dibaca';

    buttonGreen.addEventListener('click', function () {
      addToUnfinished(book.id);
    });
  }

  buttonRed.addEventListener('click', function () {
    removeBook(book.id);
  });

  divAction.append(buttonGreen, buttonRed);
  articleBookItem.append(h3BookTitle, pAuthor, pYear, divAction);
  return articleBookItem;
}

// custom event

document.addEventListener(RENDER_SEARCH_UI, function () {
  const elementOfbookSearchResult = document.getElementById('bookSearchResult');
  elementOfbookSearchResult.innerHTML = '';
  const booksByTitle = searchBook();

  if (booksByTitle.length) {
    for (const bookItem of booksByTitle) {
      const bookElement = makeBooksUIElement(bookItem);
      elementOfbookSearchResult.append(bookElement);
    }
  } else {
    elementOfbookSearchResult.innerHTML = '<p>Buku tidak ada</p>';
  }
});

document.addEventListener(RENDER_EVENT_UI, function () {
  const inCompleteBooks = document.getElementById('incompleteBookshelfList');
  inCompleteBooks.innerHTML = '';
  const completeBooks = document.getElementById('completeBookshelfList');
  completeBooks.innerHTML = '';

  // console.log(booksList);

  for (const book of booksList) {
    const bookElement = makeBooksUIElement(book);
    if (book.isFinished === true) {
      completeBooks.append(bookElement);
    } else {
      inCompleteBooks.append(bookElement);
    }
    // ini emang kudu make append, hese make innerHtml mah
  }
});
