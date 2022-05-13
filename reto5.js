var n1 = prompt("1er numero a sumar: ");
var n2 = prompt("2do numero a sumar: ");
var n3 = prompt("3er numero que pasara a multiplicar la suma de los anteriores 2: ");

var resultado = ((parseFloat(n1) + parseFloat(n2)) * n3);

if (resultado % 1 === 0) {
  alert(resultado.toFixed());
} else {
  alert(resultado.toFixed(2));
}
