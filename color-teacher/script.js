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
    const menuH3 = document.createElement("h3")
    const menuArtBoard = document.createElement("div")
    menuArtBoard.classList.add("art-board")
    const menuGoodJob = document.createElement("h4")
    menuH3.textContent = `Paint the box below with the color ${colorArray[count].name}`

    setTimeout(() => {
        for (let i = 0; i < 7; i++) {
            const rowDiv = document.createElement("div")
            rowDiv.classList.add("row")
            for (let j = 0; j < 5; j++) {
                const colDiv = document.createElement("div")
                colDiv.classList.add("col")
                colDiv.addEventListener("pointerover", () => {
                    colDiv.style.backgroundColor = colorArray[count].code
                })
                rowDiv.appendChild(colDiv)
            }
            menuArtBoard.appendChild(rowDiv)
        };
        mainSection.appendChild(menuH3)
        menuGoodJob.textContent = "Good 👍"
        mainSection.appendChild(menuArtBoard)
        mainSection.appendChild(menuGoodJob)
    }, 5000)


// setTimeout(() => {
//     const menuSection = document.querySelector("main")
// const menuH3 = document.createElement("h3")
// const menuArtBoard = document.createElement("div")
// const menuGoodJob = document.createElement("h4")
//     menuH3.textContent = `Paint the box below with the color ${colorArray[count].name}`
//     for (let i = 1; i <= 7; i++) {
//         const rowDiv = document.createElement("div").classList.add("row")
//         for (let i = 1; i <= 5; i++) {
//             const colDiv = document.createElement("div").classList.add("col")
//             rowDiv.appendChild(colDiv)
//         }
//         menuArtBoard.appendChild(rowDiv)
//     }
//     menuGoodJob.textContent = "Good 👍"
//     menuSection.appendChild(menuH3)
//     menuSection.appendChild(menuArtBoard)
//     menuSection.appendChild(menuGoodJob)
// }, 5000)

// setTimeout(() => {count = 2; displayColor()}, 5000)

// DIDNT WORK
// for (let i = 0; i < colorArray.length; i++) {
//     count = i;
//     setTimeout(displayColor(), 3000)
// }

// GOT THIS TO WORK
// const nextBtn = document.querySelector("#nextBtn")
// const backBtn = document.querySelector("#backBtn")

// nextBtn.addEventListener("click", () => {
//     count ++
//     displayColor()
// })

// backBtn.addEventListener("click", () => {
//     count --
//     displayColor()
// })


// COULDNT GET THIS TO WORK
// loop through the array to teach each color and ask them to paint art-board
// for (let i = 0; i < colorArray.length; i++) {

//     colorText.textContent = ``
//     colorBox.style.backgroundColor = ""
//     colorText.textContent = `This is color ${colorArray[i].name}`
//     headerContainer.appendChild(colorText)
//     colorBox.style.backgroundColor = colorArray[i].code
//     headerContainer.appendChild(colorBox)
// }

// for (const color of colorArray) {
//     console.log(color)
//     colorText.textContent = ``
//     colorBox.style.backgroundColor = ""
//     colorText.textContent = `This is color ${color.name}`
//     headerContainer.appendChild(colorText)
//     colorBox.style.backgroundColor = color.code
//     headerContainer.appendChild(colorBox)
// }