var variableinexistente = String;
variableinexistente = null;
console.log(variableinexistente);
var nombres = ["a", "b", "c", "d", "e"]
let alumnobuscado = "d"
for (let i = 0; i < nombres.length; i++) {
  if (nombres[i] === alumnobuscado) {
    console.log(i + 1);
    console.log("aqui esta", nombres[i], "y su posicion es", i + 1);
  }
}
// imprimir todos los nombres de los alumnos 
for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}
alert("Hello")