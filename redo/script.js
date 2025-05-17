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


