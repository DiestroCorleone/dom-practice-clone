const students = document.querySelector("#students");
const total = document.querySelector("#total");
let quantity;

// Iniciamos el precio total en $0
let discount = 0;
total.innerHTML = discount;

// Separamos el cálculo de precio en su función aparte.
const calculatePrice = () => {
  if (students.value && quantity) {
    // Se ejecuta solo si tenemos cantidad y categoría.
    switch (students.value) {
      case "00":
        discount = 0;
        total.innerHTML = `${discount}`;
        break;
      case "01":
        discount = parseInt(quantity) * 200 * 0.2; // 40
        total.innerHTML = `${discount}`;
        break;
      case "02":
        discount = parseInt(quantity) * 200 * 0.5; // 100
        total.innerHTML = `${discount}`;
        break;
      case "03":
        discount = parseInt(quantity) * 200 * 0.85; // 170
        total.innerHTML = `${discount}`;
        break;
      default:
        "Please Select Something";
    }
    return discount;
  }
};

// Esta es la función onchange del input de cantidad, para que te lo actualice dinámicamente.
const setQuantity = () => {
  quantity = document.querySelector("#quantity").value;
  calculatePrice(); // Y ante cada cambio, calcula el precio si se cumple la condición previamente mencionada.
};

// Función onchange del Select, idem código anterior.
const showSelected = () => {
  calculatePrice();
};
