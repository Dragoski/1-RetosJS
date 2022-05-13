let cdaddia = prompt("indique la cantidad de dias a contar: ");

var hr = (parseFloat(cdaddia)*24);
var min = (parseFloat(cdaddia)*1440);
var sg = (parseFloat(cdaddia)*86400);


alert(`hay:
${hr}horas en ${cdaddia} dias
${min}minutos en ${cdaddia} dias
${sg}segundos en ${cdaddia} dias`)