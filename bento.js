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
}

function main() {

}


main()