// Defining values
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const copy = document.getElementById("copyCode");


// Color Code
btn.addEventListener("click", function()  {
    let hexColor = "#";
    for (let i=0; i<6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    function getCode() {
        return hexColor;
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});


// Generating Random Code With Random Method
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
};

// Copy Button Code Working ...
copy.addEventListener("click", function() {
    console.log("1");
});

// const fax = [1, 2, 4, 5, 6];
// let hexColor = "#";
// hexColor += hex[3];
// console.log(hexColor)