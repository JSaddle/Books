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

function Search() {
    const txtInp = txtSrch.value;
    // const result = bookshelf.books.filter((element) =>
    //   (String(element).toLowerCase().includes(txtInp))
    //   );
       // console.log(result);
   // convert object to string
    
   
   
   
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
    // console.log(fResult);
    //log result variable to make sure filter working properly
    

const result = bookshelf.books.filter(checkC);

function checkC(word){
  if (String(word).toLowerCase().includes(txtInp)){
    return true;
  }
  else {
    return null;
  }
}

console.log(result);


}