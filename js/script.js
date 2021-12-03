// Descrizione:
// Visualizzare in pagina 5 numeri casuali poi fateli sparire.
//  Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// INSERISCO LA FUNZIONE DI MATHRANDOM
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// FUNZIONE PER CREARE un CONTAINER
function createDiv(content) {
  // seleziono il mio container per creargli all'interno i miei div
  document.getElementById('main_container');
  // per ogni numero nel mio array creo un div nel mio html che lo contenga
  const numContainer = document.createElement('div');
  // aggiungo una classe per riuscire a recuperarli dopo
  numContainer.classList.add('showed');
  // all'interno del mio div inserisco uno dei miei random num
  numContainer.innerHTML = content;
  // appendo i miei div al container precedentemente selezionato
  main_container.append(numContainer);
  
  // console.log(numContainer);
  return numContainer;
}
// /FUNZIONE PER CREARE un CONTAINER


// 1. creo un array in cui pushare 5 numeri random
const arrayNumber = [];
console.log('array vuoto', arrayNumber);

// genero 5 numeri random unici
while (arrayNumber.length < 5) {
  let randomNum = getRndInteger(1, 5); 
  if (arrayNumber.includes(randomNum)) {
    
  } else { //se non è presente nell'array
    arrayNumber.push(randomNum);
    // inserisco i numeri pushati nell'array dentro dei div
    let element = createDiv(randomNum);
  }
}
console.log('array con numeri random', arrayNumber);  


// 2. creo una costante che mi dia i secondi
const lowSeconds = parseInt(5);
// creo un time out dopo il quale il main container si nasconde
let firstTimer = setTimeout(function hide() {
  document.getElementById('main_container');
  main_container.classList.add('hide');
}, lowSeconds * 1000);
console.log(lowSeconds);

  
// 3. faccio partire un countdown di 30 secondi
let highSeconds = parseInt(30);

// creo un intervallo di tempo che vada all'indietro
let secondTimer = setInterval(function countDown(){
  if (highSeconds > 0) {
    console.log('secondi timer', highSeconds);
    highSeconds -= 1;
  } else {
    console.log('Buon Anno!!!');
    clearInterval(secondTimer);
  }
}, 10000 );
// console.log(highSeconds);