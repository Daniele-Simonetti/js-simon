// Descrizione:
// Visualizzare in pagina 5 numeri casuali poi fateli sparire.
//  Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// INSERISCO LA FUNZIONE DI MATHRANDOM
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// FUNZIONE PER CREARE I CONTAINER
function createDiv(content) {
  // seleziono il mio container per creargli all'interno i miei div
  document.getElementById('container');
  // per ogni numero nel mio array creo un div nel mio html che lo contenga
  const numContainer = document.createElement('div');
  // all'interno del mio div inserisco uno dei miei random num
  numContainer.innerHTML = content;
  // appendo i miei div al container precedentemente selezionato
  main_container.append(numContainer);
  
  // console.log(numContainer);
  return numContainer;
}
// /FUNZIONE PER CREARE I CONTAINER


// 1. creo un array in cui pushare 5 numeri random
const arrayNumber = [];
console.log('array vuoto', arrayNumber);

// genero 5 numeri random unici
while (arrayNumber.length < 5) {
  let randomNum = getRndInteger(1, 5); 
  if (arrayNumber.includes(randomNum)) {
    
  } else { //se non è presente nell'array
    arrayNumber.push(randomNum)
    let element = createDiv(randomNum);
  }
}
console.log('array con numeri random', arrayNumber);    
// // creo una costante che mi dia i secondi
// const seconds = parseInt(5);
// // creo un time out dopo il quale i div scompaiono
// const timer = setInterval(() => { //function arrow anonime
//   createDiv(element).classList.add('hide');
// }, seconds * 1000);