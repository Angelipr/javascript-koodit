const nimi = prompt("What is your name: ")
console.log(nimi)

//otetaan randomilla numero. MUISTA AINA Math.
const num = Math.floor(Math.random()*4)+1


//säilyttää tulosta I guess
let house;

//katotaan mihin henkilö kuuluu
if (num===1){
  console.log("Gryffindor");}
  else if (num===2){
    house= "Slytherin"
}
  else if (num===3){
    house="Hufflepuff"
}
  else {
    house="Ravenclaw"
  }

//kerrotaan mihin taloon hän kuuluu
document.querySelector("#luokka").innerHTML = `${nimi}, you are in ${house}!`;


