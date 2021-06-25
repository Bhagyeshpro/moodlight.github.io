// Defining values
const colors = ["#009966","#7CFC00", '#49E20E', "#9BCD9B", "#B4EEB4", "#33FF33", "#00FA9A",  "#dc143c", "#aad688", "D8D3D6", "#96ADFC", "#DBE1F1"];
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