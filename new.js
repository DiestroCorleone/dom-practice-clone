//let inputValue = document.getElementById("quantity").value;
//console.log(inputValue);
let totalToPay;
//consoleconst total = document.querySelector("#total");

/*
function getTickets(inputValue) {
  let code = document.getElementById("students").value;
  if (code === "00") {
    totalToPay = "";
    total.innerHTML = `Total a pagar: $`;
    return totalToPay;
  } else if (code === "01") {
    totalToPay = (200 * 20) / 100
    return totalToPay;
  } else if (code === "02") {
    totalToPay = (200 * 50) / 100
    return totalToPay;
  } else {
    totalToPay = (200 * 85) / 100
    totalToPay = "";
    //return totalToPay;
  }
  total.innerHTML = `${totalToPay}`
  return parseInt(totalToPay * inputValue);
}
getTickets();
*/

const getTickets = () => {
    const quantity = document.querySelector("#quantity");
const students = document.querySelector("#students");

let quantityValue = parseInt(quantity.value);

let discount;
let code = document.getElementById("students").value;

  if (code === "00") {
    totalToPay = "";
    total.innerHTML = `Total a pagar: $`;
    return totalToPay;
  } else if (code === "01") {
    totalToPay = (200 * 20) / 100
    //return totalToPay;
  } else if (code === "02") {
    totalToPay = (200 * 50) / 100
    //return totalToPay;
  } else {
    totalToPay = (200 * 85) / 100
    totalToPay = "";
    //return totalToPay;
  }


let theTotal = parseInt(quantityValue * totalToPay) 
return theTotal
}

