function Search() {
    // bookData.filter(function(name){return name.match();});
    const srchBtn = document.querySelector("#srch-btn");
    const result = bookData.filter(word => word.includes(" "))
    srchBtn.addEventListener("click", result);

}

