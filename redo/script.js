createBasketLink()

const addMoreLink = document.getElementById("add-more-link-btn");
addMoreLink.addEventListener("click", () => {
    createBasketLink()
})

function createBasketLink () {
    const root = {
        linkContainer : document.createElement("div"),
        link : document.createElement("input"),
        linkTtile : document.createElement("input"),
        linkDescription : document.createElement("input"),
        removeLinkButton : document.createElement("button"),
    };

    root.linkContainer.appendChild(root.link);
    root.linkContainer.appendChild(root.linkTtile);
    root.linkContainer.appendChild(root.linkDescription)
    root.linkContainer.appendChild(root.removeLinkButton);

    const basketOfLinks = document.querySelector("#basket");
    basketOfLinks.appendChild(root.linkContainer);

    root.removeLinkButton.addEventListener("click", (e)=>{
        e.preventDefault();
        root.linkContainer.remove();
    })

    root.removeLinkButton.textContent = "Remove Link"
    root.linkContainer.classList.add("link")
    root.link.placeholder = "Enter Your Link Here"
    root.link.name = "link"
    root.link.type = "url"
    root.linkDescription.placeholder = "Enter Your Link Description Here"
    root.linkDescription.name = "link-description"
    root.linkTtile.placeholder = "Enter Your Link Title Here"
    root.linkTtile.name = "link-title"
}

const generateBasketLink = document.querySelector("#generate-basket-link");

generateBasketLink.addEventListener("click", (e) => {
    e.preventDefault();

    const basketData = [{
        basketTitle : document.querySelector("#basket-title").value,
        basketDescription : document.querySelector("#basket-description").value,
        basketAuthor : document.querySelector("#basket-author").value
    }]

    const basketLinks = document.querySelector("#basket").children

    for (const link of basketLinks){
        const linkData = {}
        for (const element of link.children) {
            if (element.name === "link-title"){
                linkData.linkTtile = element.value
                
            }
            if (element.name === "link"){
                linkData.link = element.value
                
            }
            if (element.name === "link-description"){
                linkData.linkDescription = element.value
                
            }
        }
        
        basketData.push(linkData)
    }

    const generatedLink = document.querySelector("#generated-link");

    generatedLink.textContent = `${location.protocol}.${location.host}/redo/link.html?data=${window.btoa(encodeURIComponent(JSON.stringify(basketData)))}`;

    // MAKE THE COPY BUTTON
    const generatedLinkBox = document.querySelector("#generated")
    const copyGeneratedLinkButton = document.createElement("button");
    generatedLinkBox.appendChild(copyGeneratedLinkButton)
    copyGeneratedLinkButton.textContent = "Copy Link to Clipboard"
    copyGeneratedLinkButton.addEventListener("click", (e) => {
        e.preventDefault()
        navigator.clipboard.writeText(generatedLink.textContent)
        const message = document.querySelector("#message")
        message.textContent = "Link Copied to Clipboard!"
        setTimeout(() => {message.textContent = ""}, 2000)
    })
})
