/*Write a program that asks the user for numbers until he gives zero.
The given numbers are printed in the console from the largest to the smallest.
 */

const numbers = [];

do {
  const num = Number(prompt('Anna numero: '));
  if (num !== 0) {
    numbers.push(num);
  } else {
    break;
  }
} while (true);
//sorttaa suurimmasta pienimpään
numbers.sort((a, b) => b - a);

document.querySelector('#numbers').innerHTML = numbers.join(', ');


