// the colors and their respective details in an array of objects
const colorArray = [
    {
        name : "RED",
        code : "RED",
        audio : null,
    },
    {
        name : "GREEN",
        code : "GREEN",
        audio : null,
    },
    {
        name : "WHITE",
        code : "WHITE",
        audio : null,
    },
    {
        name : "GREEN",
        code : "GREEN",
        audio : null,
    },
]

// logic to pick random color from the array
let randomColorSelection = colorArray[Math.floor(Math.random()*colorArray.length)].name;
console.log(randomColorSelection);

// Get the color-text and color-box from the HTML page
const colorText = document.querySelector("#color-text")
const colorBox = document.querySelector("#color-box")

// get the header conatiner to append the color text and box
const headerContainer = document.querySelector("header") 

// using next and back button to move through the color array
let count = 0;

function displayColor() {
    colorText.textContent = `This is color ${colorArray[count].name}`
    headerContainer.appendChild(colorText)
    colorBox.style.backgroundColor = colorArray[count].code
    headerContainer.appendChild(colorBox)
}
displayColor()

// making the main section
const mainSection = document.querySelector("main")
const menuH3 = document.querySelector("#main-h3")
const menuArtBoard = document.querySelector("#art-board")
const menuGoodJob = document.querySelector("#main-h4")
const artBoardCols = document.querySelectorAll("div.col")


let hoveredBox = 0;
menuH3.textContent = `Now paint the box below with the color ${colorArray[count].name}`

console.log(artBoardCols)

artBoardCols.forEach((artBoardCol) => {
    artBoardCol.addEventListener("pointerover", () => {
        artBoardCol.style.backgroundColor = colorArray[count].code
        hoveredBox++;
        // DISPLAY GOOD JOB WHEN HOVERED BOXES = 40
        if (hoveredBox === 40){
            console.log(hoveredBox)
            menuGoodJob.textContent = "GOOD JOB 👍"
        }
    }) 
})

// CHANGE THE COLOR WITH BUTTONS
nextBtn.addEventListener("click", () => {
    count ++
    displayColor()
})

backBtn.addEventListener("click", () => {
    count --
    displayColor()
})

// DIDNT WORK BCS YOU CAN ONLY SELECT MULTIPLE ELEMENT TOGETHER USING document.querySelectorAll()
// BE IT A CLASS OR ID
// AND THE RESULT WILL AN ARRAY CONATAINING ALL THE ELEMENTS
// SO YOU NEED TO ITERATE THROUGH ALL THE ELEMENTS IN THE ARRAY USING ARRAY MODIFYERS 
// -eg array.forEach()
// artBoardCol.addEventListener("pointerover", () => {
//     artBoardCol.style.backgroundColor = colorArray[count].code
//     hoveredBox++;
//     // DISPLAY GOOD JOB WHEN HOVERED BOXES = 40
//     if (hoveredBox === 40){
//         console.log(hoveredBox)
//         menuGoodJob.textContent = "GOOD JOB 👍"
//     }
// })  


// // making the main section
// const mainSection = document.querySelector("main")
// const menuH3 = document.createElement("h3")
// const menuArtBoard = document.createElement("div")
// menuArtBoard.classList.add("art-board")
// const menuGoodJob = document.createElement("h4")


// setTimeout(() => {
//         let hoveredBox = 0;
//         menuH3.textContent = `Now paint the box below with the color ${colorArray[count].name}`
//         mainSection.appendChild(menuH3)
//         mainSection.appendChild(menuArtBoard)
//         mainSection.appendChild(menuGoodJob)
//         // CREATE THE ROW DIVS - parent for the col color divs
//         for (let i = 0; i < 7; i++) {
//             const rowDiv = document.createElement("div")
//             rowDiv.classList.add("row")
//             // CREATE THE COL DIVS - 
//             for (let j = 0; j < 5; j++) {
//                 const colDiv = document.createElement("div")
//                 colDiv.classList.add("col")
//                 // ADD BGCOLOR OPON POINTOVER & COUNT IF HOVERED BOXES = 40
//                 colDiv.addEventListener("pointerover", () => {
//                     colDiv.style.backgroundColor = colorArray[count].code
//                     hoveredBox++;
//                     // DISPLAY GOOD JOB WHEN HOVERED BOXES = 40
//                     if (hoveredBox === 40){
//                         console.log(hoveredBox)
//                         menuGoodJob.textContent = "GOOD JOB 👍"
//                     }
//                 })
//                 rowDiv.appendChild(colDiv)
//             }
//             menuArtBoard.appendChild(rowDiv)
//         };
// }, 5000)
