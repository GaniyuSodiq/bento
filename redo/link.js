const linkBasketDisplay = document.querySelector("#link-basket-display")

const incomingData = window.location.href.split("?data=")[1]

let basketData;
try {
    basketData = JSON.parse(decodeURIComponent(window.atob(incomingData)));
    console.log(basketData)
} catch (error) {
    linkBasketDisplay.classList.add("centered-text")
    linkBasketDisplay.innerText = "The URL is invalid!"
}

// pop out the basket details section from the decoded
const basketDetails = basketData.shift()

// create the HTML element where to put the details you decoded
console.log(basketDetails)
console.log(basketData)
const basketTitle = document.createElement("h1")
const basketDescription = document.createElement("p")
const basketAuthor = document.createElement("h4")
const basketDetailsContainer = document.createElement("div")

// append the h1, p and h4 into the div container
basketDetailsContainer.appendChild(basketTitle)
basketDetailsContainer.appendChild(basketDescription)
basketDetailsContainer.appendChild(basketAuthor)

// give the div class that styled it
basketDetailsContainer.classList.add("basket-details-section")

// now put the decoded details into the created elements
basketTitle.textContent = basketDetails.basketTitle
basketDescription.textContent = basketDetails.basketDescription
basketAuthor.textContent = `Author: ${basketDetails.basketAuthor}`

// append the div container to the div corrently on page
linkBasketDisplay.appendChild(basketDetailsContainer);

// loop throught the remaining object(s) in the incoming data and display on the page

for (const link of basketData) {
    // create the link field elements
    const linkField = document.createElement("fieldset")
    const titleField = document.createElement("h3")
    const urlField = document.createElement("a")
    const descriptionField = document.createElement("p")

    // append the title url and description to the fieldset
    linkField.appendChild(titleField)
    linkField.appendChild(urlField)
    linkField.appendChild(descriptionField)

    // append the fieldset to the div on page
    linkBasketDisplay.appendChild(linkField)

    titleField.textContent = link.linkTtile
    urlField.textContent = link.link
    urlField.href = link.link
    descriptionField.textContent = link.linkDescription
}
