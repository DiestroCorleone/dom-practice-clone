const total = document.querySelector("#total");
let totalToPay;
let totalTickets;

function showSelected() {
  /* To get the  value */
  let code = document.getElementById("students").value;
  console.log(code); //01-02-03
  if (code === "00") {
    totalToPay = "";
    total.innerHTML = `Total a pagar: $`;
    return totalToPay;
  } else if (code === "01") {
    totalToPay = (200 * 20) / 100;
    console.log("Total to pay for Students: ", totalToPay);
    return totalToPay;
  } else if (code === "02") {
    totalToPay = (200 * 50) / 100;
    console.log("Total to pay for Trainees: ", totalToPay);
    return totalToPay;
  } else {
    totalToPay = (200 * 85) / 100;
    console.log("Total to pay for Juniors: ", totalToPay);

    totalToPay = "";
    return totalToPay;
  }

  /* To get the text */
  let texted = document.getElementById("students");
  let selected = texted.options[texted.selectedIndex].text;
  console.log(selected); // Estudiante-Trainee-Junior
}
showSelected();

const getValueInput = () => {
  let inputValue = document.getElementById("quantity").value;
  console.log(inputValue);
  return inputValue;
};

getValueInput();

/* Same with 'function' */

/*
function getValueInput() { //
    let inputValue = document.getElementById("quantity").value; 
    total.innerHTML += ` ${inputValue}`
}
getValueInput()
*/

const code = showSelected();
console.log(code);
const totalQuantity = getValueInput();
console.log(totalQuantity);
const getTicket = getTickets(code, totalQuantity);
console.log(getTicket);

function getTickets() {
  total.innerHTML = `Total a pagar: $ ${totalToPay}`;
  totalTickets = parseInt(code * totalQuantity);
  console.log(totalTickets);
  return totalTickets;
}
//getTickets(ShowSelected(), getValueInput());
//console.log(getTickets(ShowSelected(), getValueInput()))

getTickets(code, totalQuantity);

function getTickets2(code, totalQuantity) {
  function showSelected() {
    function getValueInput() {
      return code * quantity;
    }
    getValueInput()
  }
  showSelected()
}
getTickets2()


function getTickets3() {
    let code = document.getElementById("students").value;
    console.log(code); //01-02-03
    if (code === "00") {
      totalToPay = "";
      total.innerHTML = `Total a pagar: $`;
      return totalToPay;
      totalToPay = " ";
    } else if (code === "01") {
      totalToPay = (200 * 20) / 100;
      console.log("Total to pay for Students: ", totalToPay);
      return totalToPay;
    } else if (code === "02") {
      totalToPay = (200 * 50) / 100;
      console.log("Total to pay for Trainees: ", totalToPay);
      return totalToPay;
    } else {
      totalToPay = (200 * 85) / 100;
      console.log("Total to pay for Juniors: ", totalToPay);
  
      totalToPay = "";
      return totalToPay;
    }

}