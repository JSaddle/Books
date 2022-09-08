function Book(author, language, subject, title) {
  this.author = author;
  this.language = language;
  this.subject = subject;
  this.title = title;
  // Define the properties of each book: author, language, subject, title.

  
  this.render = () => {
    const li = document.createElement('li');
    li.textContent = this.title;
    return li; 
  }
  // Create list item representing a Book and include the title of the Book in the list item.
};
