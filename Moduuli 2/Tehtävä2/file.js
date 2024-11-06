const osallistujat = Number(prompt("Anna määrä: "))

const names = []

function askNames(osallistujat){
  for (let i = 0; i < osallistujat; i++) { //näin koska numeroita on mukana
    const name = prompt("Anna nimi: ")
    names.push(name);
  }
}

//kutsutaan funktiota
askNames(osallistujat)

document.querySelector('#nimet').innerHTML =  names.join(", ")