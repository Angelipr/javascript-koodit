const num1 = prompt("Anna ensimmäinen numero: ")
const num2 = prompt("Anna toinen numero: ")
const num3 = prompt("Anna kolmas numero: ")
const num4 = prompt("Anna neljäs numero: ")
const num5 = prompt("Anna viides numero: ")

const numbers=[]

numbers[4] = num1;
numbers[3] = num2;
numbers[2] = num3;
numbers[1] = num4;
numbers[0] = num5;


for(let num of numbers){
  console.log(`${numbers}`)
}


