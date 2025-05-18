const linkBasketDisplay = document.querySelector("#link-basket-display")

const incomingData = window.location.href.split("?data=")[1]
// const refinedData = JSON.parse(decodeURIComponent(window.atob(incomingData)))


try {
    let basketData = JSON.parse(decodeURIComponent(window.atob(incomingData)));
    console.log(basketData)
} catch (error) {
    linkBasketDisplay.textContent = "The URL is invalid!"
}