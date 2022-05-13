var n1 = prompt("1er numero a sumar: ");
var n2 = prompt("2do numero a sumar: ");

var resultado = (parseFloat(n1) + parseFloat(n2));

if (resultado % 1 === 0) {
  alert(resultado);
} else {
  alert(resultado.toFixed(2));
}
