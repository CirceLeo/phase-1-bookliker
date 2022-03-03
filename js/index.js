document.addEventListener("DOMContentLoaded", init);
const titleList = document.getElementById("list-panel")
const showPanel = document.getElementById("show-panel")

function init(){
    fetch("http://localhost:3000/books")
    .then(data => data.json())
    .then(bookArray => {
        bookArray.forEach(bookObj => renderBookTitles(bookObj))
    })

}

function renderBookTitles(bookObj){
    const newTitle = document.createElement('li')
    newTitle.textContent = bookObj.title

    newTitle.addEventListener("click", () => displayDetials(bookObj))

    titleList.appendChild(newTitle)
}

function displayDetials(bookObj){

    const bookPic = document.createElement('img')
    bookPic.src = bookObj.img_url
    console.log(bookPic.img_url)
    const bookDesc = document.createElement('p')
    bookDesc.innerText = bookObj.description
    //const likers = bookObj.users
    const likersList = document.createElement('ul')
    const likersArray = bookObj.users
    for (user of likersArray){
        const newLi = document.createElement('li')
        newLi.textContent = user.username
        likersList.appendChild(newLi)
    }

    const likeButton = document.createElement('button')
    likeButton.textContent = "LIKE THIS BOOK"
    

    showPanel.replaceChildren(bookPic, bookDesc, likersList, likeButton)

    

}