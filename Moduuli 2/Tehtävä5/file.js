numbers = [];

while (true) {
  const num = Number(prompt('Anna numero: '));
  if (numbers.includes(num) === true) {
    console.log('This number is already in the list');
    break;
  }
  numbers.push(num);
}

numbers.sort((a, b) => a - b);
console.log(numbers);
