let section = document.formul.students.options[document.formul.students.selectedIndex].value;

//let quantity = document.querySelector('input[type="quantity"]');
//const students = document.querySelector('#students');
const total = document.querySelector('#total');
//let switchBtn = document.querySelector('input[type="button"]');
let totalToPay = 0;

let quantity = document.querySelector("#quantity").value;
console.log(quantity);


function getTicket () {
 return function ShowSelected() {
if (cod === 01) {
    totalToPay = (200 * 80 / 100) * quantity
    console.log('Total to pay: ', totalToPay)
    total.innerHTML += `${totalToPay}`
    return totalToPay
} else if (cod === 02) {
    totalToPay = (200 * 50 / 100)  * quantity
    console.log('Total to pay: ', totalToPay)
    total.innerHTML += `${totalToPay}`
    return totalToPay
} else {
    totalToPay = (200 * 15 / 100)  * quantity
    console.log('Total to pay: ', totalToPay)
total.innerHTML += `${totalToPay}`
    return totalToPay
}
}
}


getTicket()();
//console.log(getTicket());


function ShowSelected() {
/* Para obtener el valor */
let cod = document.getElementById("students").value;
//alert(cod);
 alert(cod)

 if (cod === 01) {
    totalToPay = (200 * 80 / 100) * quantity
    console.log('Total to pay: ', totalToPay)
    total.innerHTML += `${totalToPay}`
    return totalToPay
} else if (cod === 02) {
    totalToPay = (200 * 50 / 100)  * quantity
    console.log('Total to pay: ', totalToPay)
    total.innerHTML += `${totalToPay}`
    return totalToPay
} else {
    totalToPay = (200 * 15 / 100)  * quantity
    console.log('Total to pay: ', totalToPay)
total.innerHTML += `${totalToPay}`
    return totalToPay
}

/* Para obtener el texto */
let combo = document.getElementById("students");
let selected = combo.options[combo.selectedIndex].text;
alert(selected)
}
ShowSelected();

const getValueInput = () =>{
    let inputValue1 = document.querySelector("#quantity").value; 
    let inputValue2 = document.querySelector("#students").value; 
    
    document.querySelector("#valueInput").innerHTML += `First input value: ${inputValue1} Second Input Value: ${inputValue2}`; 
  }

/*
Puedes usar un input type=text y con una expresión regular eliminar los caracteres no deseados, en tu caso solo quieres números positivos, por lo tanto la expresión regular sería: /\D|\-/g
*/
/*
el('quantity').addEventListener('input',function() {
    var val = this.value;
    this.value = val.replace(/\D|\-/,'');
  });

function el(el) {
    return document.getElementById(el);
  }
  */

  //function dimePropiedades(){ 
  //}