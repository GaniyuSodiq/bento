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