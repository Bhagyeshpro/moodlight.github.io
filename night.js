// Defining values
const colors = ['#ed2939', '#880808',"#D2042D", '#FF3131', '#8B0000',   '#ff69b4','#fe4164', '#ec3b83', '#fe5a1d', '#d9004c' ,'#ffb347', "#dc143c", '#ff0f0f', '#ff4500', '#8b0000', '#ff4040', '#ff355e'];
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