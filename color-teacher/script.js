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

let randomColorSelection = colorArray[Math.floor(Math.random()*colorArray.length)].name;
console.log(randomColorSelection);