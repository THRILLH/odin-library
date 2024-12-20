const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const newBook = new Book("The Hobbit", "JRR Tolkien", 277, true);
    myLibrary.push(newBook);
}

addBookToLibrary();
console.log(myLibrary);