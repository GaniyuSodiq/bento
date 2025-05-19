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

