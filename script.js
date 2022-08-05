let bookShelf = document.querySelectorAll('div.book.cards');
let bookButton = document.querySelectorAll('button.book.button');
let bookForm = document.getElementById('add book');
let bookArray = [];

bookButton[0].addEventListener('click', function() {
    if (bookForm.style.display != 'block') {
        bookForm.style.display = 'block';
        bookButton[0].textContent = 'hide';
    }
    
    else {
        bookForm.style.display = 'none';
        bookButton[0].textContent = 'New Book';
    }
})

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
    })
}

storeBook('meme', 'dog', 250, 'read');
storeBook('hella', 'kitten', 500,'unread');
storeBook('meme', 'dog', 250, 'read');
storeBook('hella', 'kitten', 500,'unread');
storeBook('meme', 'dog', 250, 'read');
storeBook('hella', 'kitten', 500,'unread');
storeBook('meme', 'dog', 250, 'read');
storeBook('hella', 'kitten', 500,'unread');
storeBook('meme', 'dog', 250, 'read');
storeBook('hella', 'kitten', 500,'unread');
displayBooks();