/* Write a program that asks for the names of six dogs.
The program prints dog names to unordered list <ul> in reverse alphabetical order. */

const koirat = [];

const koira1 = prompt('Anna koiralle nimi: ');
const koira2 = prompt('Anna koiralle nimi: ');
const koira3 = prompt('Anna koiralle nimi: ');
const koira4 = prompt('Anna koiralle nimi: ');
const koira5 = prompt('Anna koiralle nimi: ');
const koira6 = prompt('Anna koiralle nimi: ');

koirat.push(koira1, koira2, koira3, koira4, koira5, koira6);

function koiratToUl(koirat) {
  let list = '<ul>';
  for (let i = 0; i < koirat.length; i++) {
    list += `<li>${koirat[i]}</li>`;
  }
  list += '</ul>';
  return list;
}

koiratToUl(koirat);

document.querySelector('#koirat').innerHTML = koiratToUl(koirat);
