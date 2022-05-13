let totpa = prompt("total a pagar: ");
let pdiv = prompt("Personas a dividir la cuenta: ");
let prop = prompt("Porcentaje de propina a pagar: ");
let impu = prompt("Porcentaje de impuestos: ");

let total = (parseFloat(totpa)+(parseFloat(totpa)*(parseFloat(prop)/100))+(parseFloat(totpa)*(parseFloat(impu)/100)))
let caper = (parseFloat(total)/parseFloat(pdiv))

alert(`El total a pagar mas impuestos es ${total.toFixed(2)} y lo que debe pagar cada persona es ${caper.toFixed(2)}`)
