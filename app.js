const bookGrid = document.querySelector('.books-grid');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const addBookBtn = document.querySelector('.addBookBtn');
const closeBtn = document.querySelector('.close-button');
const main = document.querySelector('main');
const submitBtn = document.querySelector('.submit');
const cancelBtn = document.querySelector('.cancel');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');
const isRead = document.querySelector('#isRead');
const form = document.querySelector('#addBookForm');
const accountInfoBtn = document.querySelector('.account-info');
const inputBox = document.querySelectorAll('.input, .number');
let isReadBtn;
let removeBtn;

addBookBtn.addEventListener("click", overlayToggle);
cancelBtn.addEventListener("click", overlayToggle);
overlay.addEventListener("click", overlayToggle);
closeBtn.addEventListener('click', overlayToggle);

//footer year
let currYear = document.querySelector('.currYear');
currYear.textContent = new Date().getFullYear();

//reserved for future project reiteration
accountInfoBtn.addEventListener('click', () => {
    alert("Feature not implemented yet :(");
});

//libary array for books entered
let myLibrary = [];

//initialize book object
function Book() {
}

Book.prototype.printBook = function () {
    addToLibrary(this.title, this.author, this.pages, this.isRead);
    printLibrary();
}

function bookInfo(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead;
}

bookInfo.prototype = Object.create(Book.prototype)



//toggles the add book modal
function toggleModal() {
    modal.classList.toggle('active');
    overlay.classList.toggle('active');
    // inputBox.classList.remove('input-success', 'input-error');
}

function overlayToggle(e) {
    // e.preventDefault();
    toggleModal();
    form.reset();

}

submitBtn.addEventListener("click", submitClick);


function submitClick(e) {
    // e.preventDefault();

    const title = bookTitle.value;
    const author = bookAuthor.value;
    const pages = bookPages.value;
    const read = isRead.checked ? 'Read' : 'Not read';

    if (title === '' || author === '' || pages === '') {
        return; //shows errors on form
    }



    const newBook = new bookInfo(title, author, pages, read);
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
    isReadBtn.forEach(button => button.addEventListener('click', toggleReadStatus));

    removeBtn = document.querySelectorAll('.remove');
    removeBtn.forEach(button => button.addEventListener('click', removeBtnListener));
}

function addToLibrary(titleCreate, authorCreate, pagesCreate, isReadCreate) {
    const newBook = new bookInfo(titleCreate, authorCreate, pagesCreate, isReadCreate);
    myLibrary.push(newBook);
    createCard(newBook.title, newBook.author, newBook.pages, newBook.isRead);
}

function removeBtnListener() {
    removeBtn.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Remove book from myLibrary array
            myLibrary.splice(index, 1);
            // Reprint library from the current array
            printLibrary();
        });
    });
}

function toggleReadStatus() {
    isReadBtn.forEach((button, index) => {
        button.addEventListener('click', () => {
            const book = myLibrary[index];
            book.isRead = book.isRead === 'Read' ? 'Not read' : 'Read';
            //updates the read/unread button
            button.textContent = book.isRead;
            // Reprint library from the current array
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
    //updates button calls
    toggleReadStatus();
    removeBtnListener();
}

//initial cards
addToLibrary('Tears of the Kingdom', 'Eiji Aonuma', 230, 'Not read');
addToLibrary('Breath of the Wild', 'Eiji Aonuma', 157, 'Read');
addToLibrary('Wind Waker', 'Eiji Aonuma', 65, 'Not read');
printLibrary();
