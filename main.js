var weight = prompt("Inserta tu peso en kilogramos.");
var height = prompt("Inserta tu altura en metros.");
var imc = weight / (height * height);

console.log("IMC = " + imc);

if (imc < 19) console.log("Estás por debajo de tu peso ideal");
else if (imc < 24.5) console.log("Estás en tu peso ideal");
else if (imc < 29.9) console.log("Estás por encima de tu peso ideal");
else console.log("Obesidad");