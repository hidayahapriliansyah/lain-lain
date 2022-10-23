const booksList = [];
const RENDER_EVENT_UI = 'render-event-ui';
const RENDER_SEARCH_UI = 'render-search-ui';
const DATA_BOOKS = 'data-books';

document.addEventListener('DOMContentLoaded', function () {
  const submitBtn = document.getElementById('bookSubmit');
  submitBtn.addEventListener('click', function (event) {
    event.preventDefault();

    addBook();
    const title = document.getElementById('inputBookTitle');
    const author = document.getElementById('inputBookAuthor');
    const year = document.getElementById('inputBookYear');
    const isFinished = document.getElementById('inputBookIsComplete');

    title.value = '';
    author.value = '';
    year.value = '';
    isFinished.checked = false;
  });

  if (isStorageExist()) {
    loadDataFromStorage();
  }

  const searchBtnSubmit = document.querySelector('.searchSubmit');
  searchBtnSubmit.addEventListener('click', function (e) {
    e.preventDefault();
  });

  const searchInput = document.getElementById('searchBookTitle');
  searchInput.addEventListener('keyup', function (event) {
    if (searchInput.value !== '') {
      searchBtnSubmit.classList.add('clear');
      searchBtnSubmit.addEventListener('click', function () {
        searchInput.value = '';
        searchBtnSubmit.classList.remove('clear');
        document.dispatchEvent(new Event(RENDER_SEARCH_UI));
      });
    } else {
      searchBtnSubmit.classList.remove('clear');
    }
    event.preventDefault();
    document.dispatchEvent(new Event(RENDER_SEARCH_UI));
  });

  const isReadBtn = document.getElementById('inputBookIsComplete');
  isReadBtn.addEventListener('click', function (event) {
    const spanDescription = document.querySelector('.shelfDesc');
    if (event.target.checked) {
      spanDescription.innerText = 'Selesai dibaca';
      // console.log('ok');
    } else {
      spanDescription.innerText = ' Belum selesai dibaca';
    }
  });
});

function searchBook() {
  const title = document.getElementById('searchBookTitle').value.toLowerCase();
  if (title === '') return;
  const resultBooksByTitle = booksList.filter((book) =>
    book.title.toLowerCase().match(title)
  );

  return resultBooksByTitle;
}

function addBook() {
  const title = document.getElementById('inputBookTitle').value;
  const author = document.getElementById('inputBookAuthor').value;
  const year = document.getElementById('inputBookYear').value;
  const isFinished = document.getElementById('inputBookIsComplete').checked;

  if (title == '') {
    alert('Silakan isi judul');
    return;
  }
  if (author == '') {
    alert('Silakan isi penulis');
    return;
  }
  if (year == '') {
    alert('Silakan isi tahun');
    return;
  }

  const generatedId = idGenerator();

  const bookObject = generateBookObject(
    generatedId,
    title,
    author,
    year,
    isFinished
  );

  booksList.push(bookObject);

  alert('Buku ' + title + 'berhasil ditambahkan!');

  saveData();

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

function findIndexBook(bookId) {
  // for (const bookItem of booksList) {
  //   if (bookItem.id === bookId) {
  //     return bookItem;
  //   }
  // }

  // return null;
  // salah ieu teh coy, fatal ....
  //  hati hati sama for off for in
  for (const index in booksList) {
    if (booksList[index].id === bookId) {
      return index;
    }
  }

  return -1;
}

function findBook(bookId) {
  for (const bookItem of booksList) {
    if (bookItem.id == bookId) {
      return bookItem;
    }
  }

  return null;
}

function addToFinished(bookId) {
  const bookTarget = findBook(bookId);
  const bookTargetIndex = findIndexBook(bookId);

  bookTarget.isFinished = true;
  booksList.splice(bookTargetIndex, 1);
  booksList.push(bookTarget);

  saveData();

  document.dispatchEvent(new Event(RENDER_EVENT_UI));
  document.dispatchEvent(new Event(RENDER_SEARCH_UI));
}

function addToUnfinished(bookId) {
  const bookTarget = findBook(bookId);
  const bookTargetIndex = findIndexBook(bookId);

  bookTarget.isFinished = false;
  booksList.splice(bookTargetIndex, 1);
  booksList.push(bookTarget);

  saveData();
  document.dispatchEvent(new Event(RENDER_EVENT_UI));
  document.dispatchEvent(new Event(RENDER_SEARCH_UI));
}

function removeBook(bookId) {
  if (confirm('Yakin akan menghapus?') === false) return;

  const bookTarget = findIndexBook(bookId);

  if (bookTarget === -1) return;

  booksList.splice(bookTarget, 1);
  saveData();

  document.dispatchEvent(new Event(RENDER_EVENT_UI));
  document.dispatchEvent(new Event(RENDER_SEARCH_UI));
}

function saveEditedBook(book, newTitle, newAuthor, newYear, newStatus) {
  // const bookItem = findIndexBook(book.id);
  // if (bookItem === -1) return;
  // if (
  //   bookItem.title === newTitle &&
  //   bookItem.year === newYear &&
  //   bookItem.author === newAuthor &&
  //   bookItem.isFinished === newStatus
  // ) {
  //   formEdit.remove();
  //   for (const element of elementCollections) {
  //     element.style.display = '';
  //   }
  //   return;
  // }

  book.title = newTitle;
  book.author = newAuthor;
  book.year = newYear;
  book.isFinished = newStatus;

  booksList.push(book);

  saveData();
  document.dispatchEvent(new Event(RENDER_EVENT_UI));
  // document.dispatchEvent(new Event(RENDER_SEARCH_UI));
}

function showEditBookForm(event, book) {
  const articleElement = event.target.parentElement.parentElement;
  const elementCollections = articleElement.children;
  for (const element of elementCollections) {
    element.style.display = 'none';
  }

  const title = elementCollections[0].innerText;
  const author = elementCollections[1].innerText;
  const year = elementCollections[2].innerText;
  // const isFinished = elementCollections[3];

  const formEdit = document.createElement('form');
  formEdit.classList.add('edit_mode');
  formEdit.addEventListener('click', function (e) {
    e.preventDefault();
  });

  const inputTitle = document.createElement('input');
  inputTitle.setAttribute('type', 'text');
  inputTitle.setAttribute('id', 'titleEdit');
  inputTitle.setAttribute('required', '');
  inputTitle.setAttribute('value', title);

  const inputAuthor = document.createElement('input');
  inputAuthor.setAttribute('type', 'text');
  inputAuthor.setAttribute('id', 'authorEdit');
  inputAuthor.setAttribute('required', '');
  inputAuthor.setAttribute('value', author);

  const inputYear = document.createElement('input');
  inputYear.setAttribute('type', 'number');
  inputYear.setAttribute('id', 'yearEdit');
  inputYear.setAttribute('required', '');
  inputYear.setAttribute('value', year);

  const divInputInline = document.createElement('div');
  divInputInline.classList.add('input_inline');

  const labelInputIsRead = document.createElement('label');
  labelInputIsRead.setAttribute('for', 'checkbox-edit');
  labelInputIsRead.innerText = 'Sudah dibaca';

  const inputIsRead = document.createElement('input');
  inputIsRead.id = 'checkbox-edit';
  inputIsRead.type = 'checkbox';

  const bookItem = findIndexBook(book.id);
  if (bookItem.isFinished) {
    inputIsRead.setAttribute('checked', '');
  }

  let inputReadIsChecked = inputIsRead.checked;

  function checkboxSucks(e) {
    const inputIsRead = document.createElement('input');
    inputIsRead.id = 'checkbox-edit';
    inputIsRead.type = 'checkbox';

    if (e.target.getAttribute('checked') === null) {
      inputIsRead.setAttribute('checked', '');
    }

    e.target.remove();
    divInputInline.append(inputIsRead);
    inputIsRead.addEventListener('click', function (e) {
      inputReadIsChecked = checkboxSucks(e);
    });

    return inputIsRead.checked;
  }

  inputIsRead.addEventListener('click', function (e) {
    inputReadIsChecked = checkboxSucks(e);
  });

  divInputInline.append(labelInputIsRead, inputIsRead);

  const divActionEdit = document.createElement('div');
  divActionEdit.classList.add('action');

  const buttonYellowSave = document.createElement('button');
  buttonYellowSave.classList.add('save-edit');
  buttonYellowSave.setAttribute('title', 'Simpan perubahan');
  buttonYellowSave.addEventListener('click', function () {
    const bookItem = findBook(book.id);
    const bookItemIndex = findIndexBook(book.id);

    if (
      bookItem.title === inputTitle.value &&
      bookItem.author === inputAuthor.value &&
      bookItem.year === inputYear.value &&
      bookItem.isFinished === inputReadIsChecked
    ) {
      formEdit.remove();
      for (const element of elementCollections) {
        element.style.display = '';
      }

      return;
    }

    if (bookItemIndex !== -1) booksList.splice(bookItemIndex, 1);
    // console.log(bookItem, bookItemIndex); return;
    // console.log(bookItem); return;

    saveEditedBook(
      bookItem,
      inputTitle.value,
      inputAuthor.value,
      inputYear.value,
      inputReadIsChecked
    );

    return;
  });

  const buttonRedClose = document.createElement('button');
  buttonRedClose.classList.add('close-edit');
  buttonRedClose.title = 'Batal Edit';
  buttonRedClose.addEventListener('click', function () {
    formEdit.remove();
    for (const element of elementCollections) {
      element.style.display = '';
    }
  });

  divActionEdit.append(buttonYellowSave, buttonRedClose);
  formEdit.append(
    inputTitle,
    inputAuthor,
    inputYear,
    divInputInline,
    divActionEdit
  );

  // console.log(title, author, year);
  // console.log(formEdit);
  // console.log(articleElement.children);
  articleElement.append(formEdit);

  // function closeRandomClick(e) {
  //   console.log(e.target);
  //     if (e.target === formEdit || e.target.parentElement === formEdit || e.target.parentElement.parentElement === formEdit) return;
  //     formEdit.remove();
  //     for (const element of elementCollections) {
  //       element.style.display = '';
  //     }
  // }

  // function documentEvent() {
  //   document.addEventListener('click', function (e) {
  //     if (
  //       e.target === formEdit ||
  //       e.target.parentElement === formEdit ||
  //       e.target.parentElement.parentElement === formEdit
  //     )
  //       return;

  //     formEdit.remove();
  //     for (const element of elementCollections) {
  //       element.style.display = '';
  //     }
  //   });
  // }

  setTimeout(() => {
    document.addEventListener('click', function documentEvent(e) {
      // console.log('ok');
      if (
        (e.target === formEdit ||
          e.target.parentElement === formEdit ||
          e.target.parentElement.parentElement === formEdit) &&
        e.target != buttonRedClose &&
        e.target != buttonYellowSave
      )
        return;

      formEdit.remove();
      for (const element of elementCollections) {
        element.style.display = '';
      }

      document.removeEventListener('click', documentEvent);
    });
  }, 1);

  // document.addEventListener('click', function (e) {
  //   if (e.target === formEdit || e.target.parentElement === formEdit || e.target.parentElement.parentElement === formEdit) return;

  //   formEdit.remove();
  //   for (const element of elementCollections) {
  //     element.style.display = '';
  //   }
  // });

  // document.addEventListener('click', documentEvent);
}

function makeBooksUIElement(book, uiSearch = false) {
  const articleBookItem = document.createElement('article');
  articleBookItem.classList.add('book_item');
  articleBookItem.setAttribute('id', 'book-' + book.id);

  if (uiSearch) {
    const anchorBook = document.createElement('a');
    anchorBook.setAttribute('href', '#book-' + book.id);
    anchorBook.classList.add('anchor-book');
    anchorBook.addEventListener('click', function () {
      const articleTarget = document.getElementById('book-' + book.id);
      // for(let i = 1; i <= 3; i++) {
      //   setTimeout(() => {
      //     console.log(i);
      //   }, 1000);
      // }
      // for (let i = 1; i <= 2; i++) {
      const changeArticleBackground = setInterval(function () {
        articleTarget.style.backgroundColor = '#fff8ea';
        setTimeout(() => {
          articleTarget.style.backgroundColor = '';
        }, 150);
      }, 200);
      setTimeout(() => {
        clearInterval(changeArticleBackground);
      }, 1000);
      // }
    });

    const spanDetailBook = document.createElement('span');
    spanDetailBook.style.textDecoration = 'none';

    const titleAtSpan = document.createElement('b');
    titleAtSpan.innerText = book.title;
    spanDetailBook.append(titleAtSpan);
    spanDetailBook.append(', ' + book.author + ', ' + book.year);

    articleBookItem.removeAttribute('id');
    articleBookItem.append(spanDetailBook);
    anchorBook.append(articleBookItem);

    return anchorBook;
  } else {
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

    const buttonYellow = document.createElement('button');
    buttonYellow.classList.add('yellow');
    buttonYellow.setAttribute('title', 'Edit buku');

    const buttonRed = document.createElement('button');
    buttonRed.classList.add('red');
    buttonRed.setAttribute('title', 'Hapus buku');

    if (book.isFinished == false) {
      buttonGreen.setAttribute('title', 'Sudah dibaca');
      buttonGreen.addEventListener('click', function () {
        addToFinished(book.id);
      });
    } else {
      buttonGreen.setAttribute('title', 'Belum dibaca');
      buttonGreen.classList.toggle('rewind');

      buttonGreen.addEventListener('click', function () {
        addToUnfinished(book.id);
      });
    }

    buttonRed.addEventListener('click', function () {
      removeBook(book.id);
    });

    buttonYellow.addEventListener('click', function (e) {
      showEditBookForm(e, book);
    });

    divAction.append(buttonGreen, buttonYellow, buttonRed);
    articleBookItem.append(h3BookTitle, pAuthor, pYear, divAction);
  }

  return articleBookItem;
}

// custom event

document.addEventListener(RENDER_SEARCH_UI, function () {
  const elementOfbookSearchResult = document.getElementById('bookSearchResult');
  elementOfbookSearchResult.innerHTML = '';
  const booksByTitle = searchBook();

  if (booksByTitle !== undefined) {
    if (booksByTitle.length) {
      for (const bookItem of booksByTitle) {
        const bookElement = makeBooksUIElement(bookItem, true);
        elementOfbookSearchResult.append(bookElement);
      }
    } else {
      elementOfbookSearchResult.innerHTML =
        '<p align="center" style="color: white">Buku tidak ada</p>';
    }
  }
});

document.addEventListener(RENDER_EVENT_UI, function () {
  const inCompleteBooks = document.getElementById('incompleteBookshelfList');
  inCompleteBooks.innerHTML = '';
  const completeBooks = document.getElementById('completeBookshelfList');
  completeBooks.innerHTML = '';

  // console.log(booksList);

  for (const book of booksList.reverse()) {
    const bookElement = makeBooksUIElement(book);
    if (book.isFinished === true) {
      completeBooks.append(bookElement);
    } else {
      inCompleteBooks.append(bookElement);
    }
    // ini emang kudu make append, hese make innerHtml mah
  }

  function noBookInfo() {
    const pText = document.createElement('p');
    pText.style.textAlign = 'center';
    pText.innerText = 'Tidak ada buku';

    return pText;
  }

  if (inCompleteBooks.innerText == '') {
    inCompleteBooks.append(noBookInfo());
  }
  if (completeBooks.innerText == '') {
    completeBooks.append(noBookInfo());
  }
});

// storage
function isStorageExist() {
  if (typeof Storage !== undefined) return true;
}

function loadDataFromStorage() {
  const dataBooksFromStorage = localStorage.getItem(DATA_BOOKS);
  let books = JSON.parse(dataBooksFromStorage);
  if (books !== null) {
    for (const book of books) {
      booksList.push(book);
    }
  }

  document.dispatchEvent(new Event(RENDER_EVENT_UI));
}

function saveData() {
  if (isStorageExist()) {
    const booksListParsed = JSON.stringify(booksList);
    localStorage.setItem(DATA_BOOKS, booksListParsed);
  }
}
