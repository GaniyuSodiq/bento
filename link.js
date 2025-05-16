function main(){
    const bentoContainer = document.getElementById("bento-container");
    // GET THE CONTENT OF THE ADDRESS BAR
    // SPLIT IT INTO AN ARRAY TO VALUES WITH "?data=" THAT'S IN IT
    // GET THE SECOND VALUE IN THE ARRAY
    const data = window.location.href.split("?data=")[1];

    let bentoData;
    try {
        bentoData = JSON.parse(decodeURIComponent(window.atob(data)));
    } catch (error) {
        bentoContainer.innerText = "You entered an invalid URL";
        return;
    }
}

main()