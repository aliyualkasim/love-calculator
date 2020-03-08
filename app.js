//Get the names of the two love birds", the submit button and display message

/* This can be refactored to reduce DOM manipulation */
const yourName = document.querySelector("#yourName");
const partnerName = document.querySelector("#partnerName");
const message = document.querySelector("#message");
const button = document.querySelector(".calculator form button");

/* event listener to calcuate love */
button.addEventListener("click",calculate);

function calculate(){
    // love calculation logic can go here
}
