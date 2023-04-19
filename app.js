// function Book() {
// }

// Book.prototype.printBook = function () {
//     console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`);
// }

// function bookInfo(title, author, pages, isRead) {
//     this.title = title
//     this.author = author
//     this.pages = pages
//     this.isRead = readBoolean(isRead);
// }

// function readBoolean(boolean) {
//     if (boolean) {
//         return 'Is read'
//     } else {
//         return 'Not read'
//     }
// }

// bookInfo.prototype = Object.create(Book.prototype)

// const book1 = new bookInfo('The Art of being AD', 'Anthony Davis', '45', false);

// book1.printBook();


let currYear = document.querySelector('.currYear');
currYear.textContent = new Date().getFullYear();

const el = document.createElement('div');
el.classList.add('book-card');

const bookCard = document.querySelector('.books-grid');
// bookCard.appendChild(el);
