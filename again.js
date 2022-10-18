const students = document.querySelector("#students");
const total = document.querySelector("#total");
//const quantity = document.querySelector("#quantity");

//quantityValue = parseInt(quantity.value)


//console.log(quantity);
//console.log(quantityValue);

let discount;


const showSelected = () => {
  let quantity = document.querySelector("#quantity").value;

  switch (students.value) {
    case "00":
      discount = "";
      break;
    case "01":
      discount = (200 * 20) / 100 * quantity; // 40
      total.innerHTML += `${discount}`;
      break;
    case "02":
      discount = (200 * 50) / 100 * quantity; // 100
      total.innerHTML += `${discount}`;
      break;
    case "03":
      discount = (200 * 85) / 100 * quantity; // 170
      total.innerHTML += `${discount}`;
      break;
    default:
      "Please Select Something";
  }
  return discount;
};


