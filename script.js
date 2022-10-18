let bookShelf = document.querySelectorAll("div.book.cards");
let bookButton = document.querySelectorAll("button.book.button");
let bookForm = document.getElementById("add book");
let bookRead = document.getElementById("read");
let childArray = bookShelf[0].children;

let inputTitle = document.getElementById("title");
let inputAuthor = document.getElementById("author");
let inputPages = document.getElementById("pages");

let titleError = document.querySelector("#title + span.titleError");
let authorError = document.querySelector("#author + span.authorError");
let pagesError = document.querySelector("#pages + span.pagesError");

let bookArray = [];

bookRead.addEventListener("click", () => {
  if (bookRead.value == "Read") {
    bookRead.value = "Unread";
  } else {
    bookRead.value = "Read";
  }
});

bookForm.addEventListener("input", (event) => {
  if (inputTitle.validity.valid) {
    titleError.textContent = "";
  }
  if (inputAuthor.validity.valid) {
    authorError.textContent = "";
  }
  if (inputPages.validity.valid) {
    pagesError.textContent = "";
  }
});

bookForm.addEventListener("submit", function (event) {
  if (
    !inputTitle.validity.valid ||
    !inputAuthor.validity.valid ||
    !inputPages.validity.valid
  ) {
    console.log("no");
    showError();
    event.preventDefault();
  } else {
    let bookTitle = document.getElementById("title").value;
    let bookAuthor = document.getElementById("author").value;
    let bookPages = document.getElementById("pages").value;
    let bookRead = document.getElementById("read");
    storeBook(bookTitle, bookAuthor, bookPages, bookRead.value);
  }
});

bookButton[0].addEventListener("click", function () {
  if (bookForm.style.display != "block") {
    bookForm.style.display = "block";
    bookButton[0].textContent = "hide";
  } else {
    bookForm.style.display = "none";
    bookButton[0].textContent = "New Book";
  }
});

function Books(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Books.prototype.changeReadStatus = function () {
  if (this.read == "Read") {
    this.read = "Unread";
  } else {
    this.read = "Read";
  }
  displayBooks();
};

function storeBook(title, author, pages, read) {
  let tmpBook = new Books(title, author, pages, read);
  bookArray.push(tmpBook);
  displayBooks();
}

function clearDisplay() {
  while (bookShelf[0].firstChild) {
    bookShelf[0].removeChild(bookShelf[0].firstChild);
  }
}

function displayBooks() {
  clearDisplay();

  bookArray.forEach((book) => {
    let bookDiv = document.createElement("div");
    bookDiv.classList.add("card");
    let titleContainer = document.createElement("p");
    titleContainer.classList.add("book", "title");
    let authorContainer = document.createElement("p");
    let pagesContainer = document.createElement("p");
    let readStatus = document.createElement("p");
    let removeBook = document.createElement("button");
    removeBook.setAttribute("id", childArray.length);
    let changeRead = document.createElement("button");
    changeRead.classList.add("change", "read");

    removeBook.textContent = "Remove Book";
    changeRead.textContent = "Change Read Status";
    titleContainer.textContent = book.title;
    authorContainer.textContent = book.author;
    pagesContainer.textContent = book.pages;
    readStatus.textContent = book.read;
    bookDiv.appendChild(titleContainer);
    bookDiv.appendChild(authorContainer);
    bookDiv.appendChild(pagesContainer);
    bookDiv.appendChild(readStatus);
    bookDiv.appendChild(removeBook);
    bookDiv.appendChild(changeRead);

    bookShelf[0].appendChild(bookDiv);

    changeRead.addEventListener("click", function () {
      book.changeReadStatus();
    });

    removeBook.addEventListener("click", function () {
      this.parentElement.remove();
      bookArray.splice(this.id, 1);
    });
  });
}

function showError() {
  if (inputTitle.validity.tooShort) {
    titleError.textContent = "Title too short!";
  }
  if (inputAuthor.validity.tooShort) {
    authorError.textContent = "Author name too short!";
  }
  if (inputPages.validity.tooShort) {
    pagesError.textContent = "Not enough pages!";
  }

  if (inputTitle.validity.valueMissing) {
    titleError.textContent = "Title cannot be blank";
  }
  if (inputAuthor.validity.valueMissing) {
    authorError.textContent = "Author cannot be blank";
  }
  if (inputPages.validity.valueMissing) {
    pagesError.textContent = "Pages cannot be blank";
  }
}
