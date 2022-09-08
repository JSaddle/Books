function Bookshelf(books = []) {
  this.books = books;
  // Define the property of the empty array of books.

  this.addBook = function (book) {
    this.books.push(book);
  };
  // Use .push to add a book into our empty array of books, also known as our Bookshelf.

  this.removeBook = function (book) {
    // Find a book with the same title
    const idx = this.books.map((b) => b.title).indexOf(book.title);
    // Use indexOf to check if the book with the given title is in the array.
    // Use map to create a new array which doesn't include the book we chose to remove.
    if (idx !== -1) {
      this.books.splice(idx, 1);
      return book;
    } 
    // If the index does not equal -1, this means we have located our book within
    // the books array. Thus, we use splice to remove the book we have located.
    else {
      return null;
    }
    // If the index does equal -1, this means our book is not within our books array
    // and therefore we return nothing (since we cannot remove a book from an array 
    // that it is already in.)
  };

  /* CHANGE RENDER! THIS IS A TEMPLATE */
  this.render = function () {
    const ul = document.createElement("ul");
    for (const book of this.books) {
      ul.append(book.render());
    }
    return ul;
  };
}