let bookArray = [];

function Books(title, author, pages, read) {
    this.title = title
    this.author - author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `${title} by ${author}, ${pages}, ${read}.`;
    }
}

function storeBook(title, author, pages, read) {
    let tmpBook = new Books(title, author, pages, read);
    bookArray.push(tmpBook);
}

function displayBooks() {
    bookArray.forEach(book =>{
        //do something with the book.
    })
}