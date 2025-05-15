function createLinkForm() {
    const root = {
        container : document.createElement("div"),
        titleField : document.createElement("input"),
        urlField : document.createElement("input"),
        descriptionField : document.createElement("input"),
        removeButton : document.createElement("button")
    };

    root.container.classList.add("link");
    root.container.appendChild(root.removeButton);
    root.container.appendChild(root.urlField);
    root.container.appendChild(root.titleField);
    root.container.appendChild(root.descriptionField);

    root.urlField.placeholder = "Link";
    root.urlField.name = "link-field";
    root.titleField.placeholder = "Link Title";
    root.titleField.name = "title-field";
    root.descriptionField.placeholder = "Link description";
    root.descriptionField.name = "description-field";
    root.removeButton.innerText = "Remove"
    root.removeButton.addEventListener("click", () => {
        root.container.remove();
    })

    return root.container;
}

function main() {
    const links = document.getElementById("links");
    links.appendChild(createLinkForm());

    const addButton = document.getElementById("add-button");
    addButton.addEventListener("click", (event) => {
        event.preventDefault();
        links.appendChild(createLinkForm());
    })

    const generateBentoLink = document.getElementById("generate-bento-link");
    const generatedLink = document.getElementById("generated-link");
    generateBentoLink.addEventListener("click", (event) => {
        event.preventDefault();
        //  GET THE THE CONTENT IN THE LINKS CONTAINER - 
        const links = document.getElementById("links").children;

        const bentoData = [{
            bentoTitle : document.getElementById("bento-title"),
            bentoAuthor : document.getElementById("bento-author"),
            bentoDescription : document.getElementById("bento-description"),                        
        }]
    })
}


main()