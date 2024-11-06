const vuosi = prompt('Anna vuosi: ');
console.log(vuosi);

const vuosiFloat = parseFloat(vuosi);

let kv;

if (vuosiFloat % 4 === 0 && vuosi % 100 !== 0 || vuosi % 400 === 0) {
  kv = 'on karkausvuosi';
} else {
  kv = 'ei karkausvuosi';
}

document.querySelector('#vuosi').innerHTML = `Antamasi vuosi ${kv}`;
