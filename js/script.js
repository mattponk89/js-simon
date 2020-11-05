$(document).ready(function () {

  var numCpu = []
  var numUser = []
  var numResult = []
  var NUM_MAX = 10
  var NUM_MIN = 1
  var cont = 0

  boxEl = $('.box')



  while(numCpu.length < 5){
    numGenerated = numRandom(NUM_MIN, NUM_MAX)
    if (!numCpu.includes(numGenerated)){
      numCpu.push(numGenerated)
      alert('Questo è il numero da ricordare: ' + numGenerated)
    }
  }
  boxEl.append('<h1>Ricordati i 5 numeri con la giusta successione. Sei pronto? Attendi e rispondi tra poco..</h1>')


  setTimeout(function(){
    boxEl.html('')
    do{
      promptUser = parseInt(prompt('Inserisci il primo numero:'))
      numUser.push(promptUser)
    } while(numUser.length < numCpu.length)
    for(var i = 0; i < numCpu.length; i++){
      if(numUser[i] == numCpu[i]){
        cont += 1
        boxEl.append('<h2>Hai indovinato il numero: ' + numUser[i] + '</h2>')
      } else {
        boxEl.append('<h2>Hai sbagliato, il numero da ricordare era: '+ numCpu[i] + ' ma tu hai detto: ' + numUser[i] + '</h2>')
      }
    }
    boxEl.append('<h1>Hai indovinato: '+ cont + ' numeri!</h1>')
  }, 10000)
})
