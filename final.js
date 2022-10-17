alert("hello world");

const getTickets = () => {

const quantity = document.querySelector("#quantity");
console.log(quantity);
const students = document.querySelector("#students");
console.log(students);

quantityValue = parseInt(quantity.value)
console.log(quantityValue);

let discount;


  switch (students.value) {
    case "00":
      discount = ""
      break;
    case "01":
      discount = (200 * 20) / 100;
      break;
    case "02":
      discount = (200 * 20) / 100;
      break;
    case "03":
      discount = (200 * 20) / 100;
      break;
    default:
      "Enter a valid number";
  }

let totalPrice = quantityValue * discount;
return totalPrice

};
getTickets()