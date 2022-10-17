const total = document.querySelector('#total');

function ShowSelected() {
  /* To get the  value */
  let code = document.getElementById("students").value;
  console.log(code); //01-02-03

  /* To get the text */
  let texted = document.getElementById("students");
  let selected = texted.options[texted.selectedIndex].text;
  console.log(selected); // Estudiante-Trainee-Junior
}
ShowSelected();


/*
function getValueInput() { //
    let inputValue = document.getElementById("quantity").value; 
    total.innerHTML += ` ${inputValue}`
}
getValueInput()
*/


const getValueInput = () =>{
    let inputValue = document.getElementById("quantity").value; 
    total.innerHTML += ` ${inputValue}` 
  }

  getValueInput() 

function getTickets() {
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
