const bookCard = document.querySelector('.books-grid');
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

// function readBoolean(boolean) {
//     if (boolean) {
//         return 'Is read'
//     } else {
//         return 'Not read'
//     }
// }

bookInfo.prototype = Object.create(Book.prototype)

const el = document.createElement('div');
el.classList.add('book-card');

// addBookBtn.onclick = () => toggleModal();
// .onclick = () => cancelButton();


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
    readButton.classList.add(isReadCreate === 'Read' ? 'btn-light-green' : 'btn-light-red');
    readButton.classList.add('btn');
    removeButton.classList.add('btn');

    title.textContent = titleCreate;
    author.textContent = authorCreate;
    pages.textContent = pagesCreate + ' pages';
    readButton.textContent = isReadCreate;
    removeButton.textContent = 'Remove';

    bookCard.appendChild(newCard);
    newCard.appendChild(title);
    newCard.appendChild(author);
    newCard.appendChild(pages);
    newCard.appendChild(buttonGroup);
    buttonGroup.appendChild(readButton);
    buttonGroup.appendChild(removeButton);
}

function addToLibrary(titleCreate, authorCreate, pagesCreate, isReadCreate) {
    const newBook = new bookInfo(titleCreate, authorCreate, pagesCreate, isReadCreate);
    myLibrary.push(newBook);
    createCard(newBook.title, newBook.author, newBook.pages, newBook.isRead);
}

//initial card 
addToLibrary('Tears of the Kingdom', 'Eiji Aonuma', 230, 'Not read');

