let num1 = prompt("Anna numero: ")
let num2 = prompt("Anna toinen numero: ")
let num3 = prompt("Anna kolmas numero: ")

//muutetaan ensimmäiseksi merkkijonot kokonaisluvuiksi (ps. muista ei num1.parseInt())
const num1Int = parseInt(num1);
const num2Int = parseInt(num2);
const num3Int = parseInt(num3);

const sum =num1Int+num2Int+num3Int;
const product =num1Int*num2Int*num3Int;
const average =(num1Int*num2Int*num3Int)/3;

//lasketaan nyt vaihdetut kokonaisluvut yhteen
document.querySelector("#sum").innerHTML = `Sum: ${sum}`;
//lasketaan lukujen tulo
document.querySelector("#product").innerHTML = `Product: ${product}`;
//ja lukujen keskiarvo
document.querySelector("#average").innerHTML = `Average: ${average}`;