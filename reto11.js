let may1k = prompt("Indique un numero mayor a 1000:");
let men100 = prompt("Indique un numero menor a 100:");

if ((parseFloat(may1k)>=1000) && (parseFloat(men100)<=100))
{
    var cab = (parseFloat(may1k) / parseFloat(men100));
    alert(`${men100} entra ${cab} veces en ${may1k}`);
} else alert(`Introduzca los valores correctamente`);


