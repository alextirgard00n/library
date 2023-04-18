// function book(title, author, pages) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;

//     this.info = function () {
//         return (`${title} by ${author}, ${pages} pages, not read yet`);
//     }

//     this.printBook = function () {
//         console.log(this.info());
//     }
// }

// const book1 = new book('The Art of being a Nigga', 'Anthony Davis', '45');
// book1.printBook();



// function book(title, author, pages) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
// }

// book.prototype.info = function () {
//     return (`${this.title} by ${this.author}, ${this.pages} pages, not read yet`);
// }

// book.prototype.printBook = function () {
//     console.log(this.info());
// }

// const book1 = new book('The Art of being a Nigga', 'Anthony Davis', '45');
// book1.printBook();


function Book() {
}

Book.prototype.printBook = function () {
    console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`);
}

function bookInfo(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = readBoolean(isRead);
}

function readBoolean(boolean) {
    if (boolean) {
        return 'Is read'
    } else {
        return 'Not read'
    }
}

bookInfo.prototype = Object.create(Book.prototype)

const book1 = new bookInfo('The Art of being AD', 'Anthony Davis', '45', false);

book1.printBook();


let currYear = document.querySelector('.currYear');
currYear.textContent = new Date().getFullYear();
