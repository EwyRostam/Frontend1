
/* -----FOR PRICE CALCULATOR----- */

const pricePerDay = 900;
let button = document.getElementById("calculate-btn")

button.addEventListener('click', () => {

    let numOfDays = parseInt(document.getElementById("numOfDays").value);
    let numOfPersons = parseInt(document.getElementById("numOfPersons").value);
    let result = document.getElementById("result");

    const totalPrice = numOfPersons * numOfDays * 900;
    result.innerHTML ="Totalt pris: " + totalPrice + " kr";
});

/* -----FOR TOGGLE MENU------ */

let navLinks = document.getElementById("navLinks");

function hideMenu(){
    navLinks.style.right = "-500px";
}

function showMenu(){
    navLinks.style.right = "0px";
}
