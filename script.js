const booksGrid = document.querySelector(".booksGrid");

const dialog = document.querySelector("dialog");
const submitbtn = document.querySelector("#submitBtn");
const addBookbtn = document.querySelector(".addBook");
const form = document.querySelector("Form");
const myLibrary = [];

function createCard(book) {
  const bookCard = document.createElement("div");
  const title = document.createElement("p");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const isReadedLabel = document.createElement("label");
  const isReaded = document.createElement("input");
  const deleteCard = document.createElement("button");

  title.innerText = book.title;
  author.innerText = book.author;
  pages.innerText = "Pages:" + book.pages;
  isReadedLabel.innerText = "Is readed:";
  isReaded.type = "checkbox";
  deleteCard.innerText = "Delete card";

  bookCard.classList.add("bookCard");
  title.classList.add("title");
  author.classList.add("author");
  pages.classList.add("pages");
  deleteCard.classList.add("deleteCard");
  isReaded.classList.add("isReaded");

  if (book.isReaded == "on") {
    isReaded.checked = true;
  }
  deleteCard.addEventListener("click", (e) => {
    e.target.parentNode.remove();
  });

  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(isReadedLabel);
  bookCard.appendChild(isReaded);
  bookCard.appendChild(deleteCard);
  booksGrid.appendChild(bookCard);

  console.log("done");
}

function Book(object) {
  this.title = object.title;
  this.author = object.author;
  this.pages = object.pages;
  this.isReaded = object.isReaded;
}

addBookbtn.addEventListener("click", () => {
  dialog.showModal();
});
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const output = new FormData(form);
  const outputArray = Array.from(output.entries());
  const outputObject = Object.fromEntries(outputArray);
  const book = new Book(outputObject);
  myLibrary.push(book);
  createCard(book);
});
submitbtn.addEventListener("click", () => {
  dialog.close();
});
