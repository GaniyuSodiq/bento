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
]

// logic to pick random color from the array
let randomColorSelection = colorArray[Math.floor(Math.random()*colorArray.length)].name;
console.log(randomColorSelection);

// Get the color-text and color-box from the HTML page
const colorText = document.querySelector("#color-text")
const colorBox = document.querySelector("#color-box")

// loop through the array to teach each color and ask them to paint art-board
for (let i = 0; i < colorArray.length; i++) {
    colorText.textContent = `This is color ${colorArray[i].name}`
    
}