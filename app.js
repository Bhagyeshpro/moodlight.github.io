// Defining values
const colors = ["green", "red", "blue", "yellow", "orange", "black", "white", "violet", "gray", "pink", "brown" ];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const copy = document.getElementById("copyCode");


// Color Code
btn.addEventListener("click", function()  {
   const randomNumber = getRandomNumber();
   
   document.body.style.backgroundColor = colors[randomNumber];
   color.textContent = colors[randomNumber];
});


// Generating Random Code With Random Method
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
};

// Copy Button Code Working ...
copy.addEventListener("click", function() {
    console.log("1");
});

// const fax = [1, 2, 4, 5, 6];
// let hexColor = "#";
// hexColor += hex[3];
// console.log(hexColor)