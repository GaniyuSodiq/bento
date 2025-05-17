function createBasketLink () {

    const basketOfLinks = document.querySelector("#basket");

    root = {
        link : document.createElement("input"),
        linkTitle : document.createElement("input"),
        linkDescription : document.createElement("input"),
        removeLinkButton : document.createElement("button"),
        linkContainer : document.createElement("div"),        
    }

    root.linkContainer.classList.add("link")
    root.link.type = "url";
    root.link.placeholder = "Link";
    root.linkTitle.placeholder = "Link Title";
    root.linkDescription.placeholder = "Link Description";
    root.removeLinkButton.innerText = "Remove This Link";
    root.removeLinkButton.type = "button"
    root.removeLinkButton.addEventListener("click", () => {
        root.linkContainer.remove();
    })

    root.linkContainer.appendChild(root.link);
    root.linkContainer.appendChild(root.linkTitle);
    root.linkContainer.appendChild(root.linkDescription);
    root.linkContainer.appendChild(root.removeLinkButton);

    basketOfLinks.appendChild(root.linkContainer);
}

createBasketLink();
createBasketLink();
createBasketLink();