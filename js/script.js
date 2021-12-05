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
  let mainBox = document.querySelector(".mainContainer");
  // per ogni numero nel mio array creo un div nel mio html che lo contenga
  const numContainer = document.createElement('div');
  // aggiungo una classe per riuscire a recuperarli dopo
  numContainer.classList.add('showed');
  // all'interno del mio div inserisco uno dei miei random num
  numContainer.innerHTML = content;
  // appendo i miei div al container precedentemente selezionato
  mainBox.append(numContainer);
  
  // console.log(numContainer);
  return numContainer;
}
// /FUNZIONE PER CREARE un CONTAINER


// 1. creo un array in cui pushare 5 numeri random
const arrayNumber = [];
// creo un array in cui pushare i numeri inseriti dall'utente
const arrayUser = [];
// se i numeri dei due array corrispondo li pusho qua
const numEqual = [];


// genero 5 numeri random unici
while (arrayNumber.length < 5) {
  let randomNum = getRndInteger(1, 100); 
  if (arrayNumber.includes(randomNum)) {
    
  } else { //se non è presente nell'array
    arrayNumber.push(randomNum);
    // inserisco i numeri pushati nell'array dentro dei div
    let element = createDiv(randomNum);
  }
}
console.log('array con numeri random', arrayNumber);  


// 2. creo due costanti: una per i secondi del primo intervallo di tempo, e una per il timer 
const lowSeconds = parseInt(5);
let highSeconds = parseInt(30);

// creo un time out dopo il quale il main container si nasconde e poi parte un timer di 30 secondi
let firstTimer = setTimeout(function hide() {
  let hideBox = document.querySelector(".mainContainer");
  hideBox.classList.add('hide');

  // creo un intervallo di tempo che vada all'indietro
  let secondTimer = setInterval(function countDown(){
    if (highSeconds > 0) {
      // console.log('secondi timer', highSeconds);
      highSeconds -= 1;
    } else { //* finito il timer di 30s chiedo all'utente di inserire i numeri che ha visto a schermo
      for (let n = 0; n < arrayNumber.length; n++) {
        let userNum = parseInt(prompt('Inserisci uno dei numeri visti a schermo'));
        arrayUser.push(userNum);
        if (arrayNumber.includes(userNum)) { //* se il numero inserito dall'utente è incluso nell'array con i numeri random allora lo pusho
          numEqual.push(userNum);
        } else {
          // console.log('pessimo');
        }
      }
      // console.log('array con numeri utente', arrayUser);
      // console.log('numeri uguali', numEqual);

      // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
      if (numEqual.length == arrayNumber.length) {
        console.log('hai indovinato questi numeri: ', numEqual.length,  numEqual.toString());
      } else if (numEqual.length !== arrayNumber.length) {
        console.log('hai indovinato questi numeri: ', numEqual.length,  numEqual.toString());
      }
      clearInterval(secondTimer);
    }
  }, 1000);
}, lowSeconds * 1000);

