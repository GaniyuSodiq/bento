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
    root.urlField.name = "url-field";
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

        // KEEP ALL THE FIRST PART (bento author, Title and Description) OF THE PAGE 
        // INTO AN OBJECT OF AN ARRAY CALLED BENTODATA
        const bentoData = [{
            bentoTitle : document.getElementById("bento-title").value,
            bentoAuthor : document.getElementById("bento-author").value,
            bentoDescription : document.getElementById("bento-description").value,                        
        }]

        // ADD ANOTHER OBJECT THAT CONTAINS ALL THE CONTENT OF THE LINKS CONTAINER
        // INTO THE ARRAY CALLED BENTODATA
        const links = document.getElementById("links").children;

        // FOR EACH LINK CONTAINER IN THE LINKS CONTAINER RUN THIS LOOP
        for (const link of links){
            const linkData = {}; // MAKE AN OBJECT CALLED 
            // FOR EACH ELEMENT IN THE LINK CONTAINER RUN THIS LOOP
            for (const element of link.children){
                if (element.name === "url-field"){
                    linkData.urlField = element.value;
                    continue;
                }
                if (element.name === "title-field"){
                    linkData.titleField = element.value;
                    continue;
                }
                if (element.name === "description-field"){
                    linkData.descriptionField = element.value;
                    continue;
                }                                
            }
            bentoData.push(linkData); // PUSH THE LINKDATA OBJECT INTO BENTODATA ARRAY
            // THE OOBJECT WILL BE ADDED FOR AS MANY LINK CONTAINER WE HAVE IN THE PAGE
        }
        console.log(bentoData);
        generatedLink.innerText = `${location.protocol}${location.host}/link.html?data=${window.btoa(encodeURIComponent(JSON.stringify(bentoData)))}`;
    })

    const copyButton = document.getElementById("copy-button");
    copyButton.addEventListener("click", () => {
        navigator.clipboard.writeText(generatedLink.innerText);
        const message = document.getElementById("message");
        message.innerText = "Link copied to clipboard!"
        setTimeout(() => {message.innerText = ""}, 2000)
    })
}

main()