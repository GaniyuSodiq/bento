const linkBasketDisplay = document.querySelector("#link-basket-display")

const incomingData = window.location.href.split("?data=")[1]

let basketData;
// try {
//     basketData = JSON.parse(decodeURIComponent(window.atob(incomingData)));
//     console.log(basketData)
// } catch (error) {
//        linkBasketDisplay.classList.add("centered-text")
//     linkBasketDisplay.innerText = "The URL is invalid!"
// }

const basketDetails = basketData.shift()

const basketTitle = document.createElement("h1")
const basketDescription = document.createElement("h2")
const basketAuthor = document.createElement("h3")
const basketDetailsContainer = document.createElement("h1")

