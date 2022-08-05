let bookShelf = document.querySelectorAll('div.book.cards');

let bookArray = [];

function Books(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function storeBook(title, author, pages, read) {
    let tmpBook = new Books(title, author, pages, read);
    bookArray.push(tmpBook);
}

function displayBooks() {
    bookArray.forEach(book =>{
        let bookDiv = document.createElement('div');
        bookDiv.classList.add('card');
        let titleContainer = document.createElement('p');
        titleContainer.classList.add('book', 'title');
        let authorContainer = document.createElement('p');
        let pagesContainer = document.createElement('p');
        let readStatus = document.createElement('p');

        titleContainer.textContent = book.title;
        authorContainer.textContent = book.author;
        pagesContainer.textContent = book.pages;
        readStatus.textContent = book.read;

        bookDiv.appendChild(titleContainer);
        bookDiv.appendChild(authorContainer);
        bookDiv.appendChild(pagesContainer);
        bookDiv.appendChild(readStatus);
        
        bookShelf[0].appendChild(bookDiv)
        console.log(bookShelf)
    })
}

storeBook('meme', 'dog', 250, 'read');
storeBook('hella', 'kitten', 500,'unread');
displayBooks();