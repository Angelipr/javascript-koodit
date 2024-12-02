const maara = Number(prompt("How many times: "))

if (maara > 0) {
  let sum = 0
  let jaljella = maara

  while (jaljella > 0) {
    const heita = Math.floor(Math.random() * 6) + 1
    sum += heita
    jaljella--
  }
  console.log(`You rolled the dice ${maara} times. Your dices sum is ${sum}`)
}

