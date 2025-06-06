function main(){
    const bentoContainer = document.getElementById("bento-container");
    // GET THE CONTENT OF THE ADDRESS BAR
    // SPLIT IT INTO AN ARRAY TO VALUES WITH "?data=" THAT'S IN IT
    // GET THE SECOND VALUE IN THE ARRAY
    const data = window.location.href.split("?data=")[1];

    let bentoData;
    try {
        // CONVERT THE DATA BACK TO AN ARRAY AND STORE THE ARRAY INTO BENTODATA
        bentoData = JSON.parse(decodeURIComponent(window.atob(data)));
    } catch (error) {
        // IF BENTODATA GETS AN ERROR, THEN RUN THE CODE HERE
        bentoContainer.innerText = "You entered an invalid URL";
        return;
    }

    // POP OUT THE FIRST PART OF THE BENTODATA USING SHIFT() AND SAVE INTO BENTOMETADATA
    const bentoMetaData = bentoData.shift();

    // NOW WE CREATE THE ELEMENT INWHICH WE ARE GOING TO DISPLAY THE DATA FROM BENTOMETADATA
    const bento = {
        title : document.createElement("h1"),
        author : document.createElement("h3"),
        description : document.createElement("p"),
        linkContainer : document.createElement("div")
    }

    // NOW PUT THE BENTOMETADATA INTO THE ELEMENTS WE CREATED
    bento.title.innerText = bentoMetaData.bentoTitle;
    bento.author.innerText = "Author: " + bentoMetaData.bentoAuthor;
    bento.description.innerText = bentoMetaData.bentoDescription;


    for (const link of bentoData){

        const linkCard = {
            container : document.createElement("div"),
            title : document.createElement("h4"),
            url : document.createElement("a"),
            description : document.createElement("p")
        }

        linkCard.title.innerText = link.titleField;
        linkCard.url.innerText = link.urlField;
        linkCard.url.href = link.urlField;
        linkCard.url.target = "_blank";
        linkCard.description.innerText = link.descriptionField;

        linkCard.container.appendChild(linkCard.title);
        linkCard.container.appendChild(linkCard.url);
        linkCard.container.appendChild(linkCard.description);
        bento.linkContainer.appendChild(linkCard.container);
    }

    bentoContainer.appendChild(bento.title);
    bentoContainer.appendChild(bento.author);
    bentoContainer.appendChild(bento.description);
    bentoContainer.appendChild(bento.linkContainer);
}

main()