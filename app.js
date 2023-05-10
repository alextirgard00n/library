const bookGrid = document.querySelector('.books-grid');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const addBookBtn = document.querySelector('.addBookBtn');
const main = document.querySelector('main');
const submitBtn = document.querySelector('.submit');
const cancelBtn = document.querySelector('.cancel');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');
const isRead = document.querySelector('#isRead');
const form = document.querySelector('#addBookForm');
const accountInfoBtn = document.querySelector('.account-info');

let isReadBtn;
let removeBtn;

//footer year
let currYear = document.querySelector('.currYear');
currYear.textContent = new Date().getFullYear();

//reserved for future project reiteration
accountInfoBtn.addEventListener('click', function () {
    alert("Feature not implemented yet :(");
});

//libary array for books entered
let myLibrary = [];

//initialize book object
function Book() {
}

Book.prototype.printBook = function () {
    // console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`);
    // createCard(this.title, this.author, this.pages, this.isRead);
    addToLibrary(this.title, this.author, this.pages, this.isRead);
}

function bookInfo(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    // this.isRead = readBoolean(isRead);
    this.isRead = isRead;
}

bookInfo.prototype = Object.create(Book.prototype)

// function readBoolean(boolean) {
//     if (boolean) {
//         return 'Is read'
//     } else {
//         return 'Not read'
//     }
// }



addBookBtn.addEventListener("click", overlayToggle);
cancelBtn.addEventListener("click", overlayToggle);
overlay.addEventListener("click", overlayToggle);


//toggles the add book modal
function toggleModal() {
    modal.classList.toggle('active');
    overlay.classList.toggle('active');
}

function overlayToggle(e) {
    e.preventDefault();
    toggleModal();
    form.reset();
}

submitBtn.addEventListener("click", submitClick);

function submitClick(e) {
    e.preventDefault();

    const title = bookTitle.value;
    const author = bookAuthor.value;
    const pages = bookPages.value;
    const read = isRead.checked ? 'Read' : 'Not read';

    const newBook = new bookInfo(title, author, pages, read);
    // myLibrary.push(newBook);
    newBook.printBook();

    toggleModal();
    form.reset();
};

function createCard(titleCreate, authorCreate, pagesCreate, isReadCreate) {
    const newCard = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const buttonGroup = document.createElement('div');
    const readButton = document.createElement('button');
    const removeButton = document.createElement('button');

    newCard.classList.add('book-card');
    title.classList.add('book-title');
    author.classList.add('book-author');
    pages.classList.add('book-pages');
    buttonGroup.classList.add('button-group');
    readButton.classList.add('btn', 'read', isReadCreate === 'Read' ? 'btn-light-green' : 'btn-light-red');
    removeButton.classList.add('btn', 'remove');

    title.textContent = titleCreate;
    author.textContent = authorCreate;
    pages.textContent = pagesCreate + ' pages';
    readButton.textContent = isReadCreate;
    removeButton.textContent = 'Remove';

    bookGrid.appendChild(newCard);
    newCard.appendChild(title);
    newCard.appendChild(author);
    newCard.appendChild(pages);
    newCard.appendChild(buttonGroup);
    buttonGroup.appendChild(readButton);
    buttonGroup.appendChild(removeButton);

    isReadBtn = document.querySelectorAll('.read');
    // toggleReadStatus();
    isReadBtn.forEach(button => button.addEventListener('click', toggleReadStatus));

    removeBtn = document.querySelectorAll('.remove');
    // removeBtnListener();
    removeBtn.forEach(button => button.addEventListener('click', removeBtnListener));


}

function addToLibrary(titleCreate, authorCreate, pagesCreate, isReadCreate) {
    const newBook = new bookInfo(titleCreate, authorCreate, pagesCreate, isReadCreate);
    myLibrary.push(newBook);
    createCard(newBook.title, newBook.author, newBook.pages, newBook.isRead);

}

//initial cards
addToLibrary('Tears of the Kingdom', 'Eiji Aonuma', 230, 'Not read');
addToLibrary('Breath of the Wild', 'Eiji Aonuma', 157, 'Read');
addToLibrary('Breath of the Wild', 'Eiji Aonuma', 157, 'Not read');


// removeBtn.forEach(button => {
//     button.addEventListener('click', toggleReadStatus);
// });

// removeBtn.forEach((button, index) => {
//     button.addEventListener('click', () => {
//         // Remove book from myLibrary array
//         myLibrary.splice(index, 1);
//         // Remove book card from the DOM
//         printLibrary();
//     });
// });

function removeBtnListener() {
    removeBtn.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Remove book from myLibrary array
            console.log(button);
            myLibrary.splice(index, 1);
            // Remove book card from the DOM
            printLibrary();
        });
    });
    console.log(this);
}

// function removeBtnListener() {
//     removeBtn.forEach((button, index) => {
//         // Remove book from myLibrary array
//         console.log(button);
//         myLibrary.splice(index, 1);
//         // Remove book card from the DOM
//         printLibrary();

//     });
// }

function toggleReadStatus() {
    isReadBtn.forEach((button, index) => {
        button.addEventListener('click', () => {
            const book = myLibrary[index];
            book.isRead = book.isRead === 'Read' ? 'Not read' : 'Read';
            button.textContent = book.isRead;
            printLibrary();
        });
    });
}

//refreshes the dom with the current array 
function printLibrary() {
    bookGrid.innerHTML = '';
    myLibrary.forEach((book) => {
        createCard(book.title, book.author, book.pages, book.isRead);
    });
}

// readButton.addEventListener('click', () => {
//     const book = myLibrary[index];
//     book.isRead = book.isRead === 'Read' ? 'Not read' : 'Read';
//     readButton.textContent = book.isRead;
// });




