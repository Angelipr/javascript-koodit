const answer = confirm("Should I calculate the sqr?")
if (answer === true){
  let number = Number(prompt("Give a number: "))
  if (number >= 0) {
        sqr1 = Math.sqrt(number)
    document.querySelector('#lasku').innerHTML = `The result is: ${sqr1}`
  }
  else{
    document.querySelector('#lasku').innerHTML = `The square root is not calculated`
  }
}
else{
  document.querySelector('#lasku').innerHTML = `The square root is not calculated`
}

