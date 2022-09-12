const app = document.querySelector('#app');

const bookshelf = new Bookshelf();

// Load in book data
for (const bookInfo of bookData) {
  const book = new Book(
    bookInfo.author,
    bookInfo.language,
    bookInfo.subject,
    bookInfo.title
  );
  bookshelf.addBook(book);
}

app.append(bookshelf.render());

const txtSrch = document.querySelector("#txtSrch");
const srchBtn = document.querySelector("#srch-btn");
srchBtn.addEventListener("click", Search);

// function Search() {
//     const txtInp = txtSrch.value.toLowerCase();
//     for (i = 0; i < bookshelf.length; i++) { 
//       if (!bookshelf[i].innerHTML.toLowerCase().includes(txtInp)) {
//           bookshelf[i].style.display="none";
//       }
//       else {
//           bookshelf[i].style.display="li";                 
//       }
//   }



// const newBookFilter = bookData.filter( x => { //DONT NEED IF/ELSE, just search for what includes
//   //
//   return .author.includes(txtinp) || x.subject.includes(txtinp))
  
//   Then ...
  
//   for (const bookInfo of newBookFilter){
//   const book = newBook(bookinfo.author..lang....sub..)
//   const newBookShelf = new Bookshelf()
//   const newbookshelf1 = newbookshelf.addBook(book)
//   app.append(newBookFilter.render())




    // const result = bookshelf.books.filter((element) =>
    //   (String(element).toLowerCase().includes(txtInp))
    //   );
    //    console.log(result);

  //  convert object to string
    
///////////Below are different methods I attempted to make my search bar work. I'm able to make an array show up in the console but the search bar is evidently not functional. ////////////////////  
   
   
  //  const result = function(element){
  //       String(element).toLowerCase().includes(txtInp)
  //       if (String(newArr).match(this.title || this.author || this.language || this.subject)) {
  //         return true;
  //       }
  //       else {
  //         return null;
  //       }
  //   }
  //   const fResult = bookshelf.books.filter(result);
  //   console.log(fResult);
  //   log result variable to make sure filter working properly
    




// console.log(result);


