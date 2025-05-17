const addMoreLink = document.getElementById("add-more-link-btn");
addMoreLink.addEventListener("click", () => {
    createBasketLink()
})

function createBasketLink () {
    const root = {
        linkContainer : document.createElement("div"),
        link : document.createElement("input"),
        removeLinkButton : document.createElement("button"),
    };

    root.linkContainer.appendChild(root.link);
    root.linkContainer.appendChild(root.removeLinkButton);

    const basketOfLinks = document.querySelector("#basket");
    basketOfLinks.appendChild(root.linkContainer);

    root.removeLinkButton.addEventListener("click", (e)=>{
        e.preventDefault();
        root.linkContainer.remove();
    })
}


