// Descrizione:
// Visualizzare in pagina 5 numeri casuali poi fateli sparire.
//  Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// 1. creo un array in cui pushare 5 numeri random
const arrayNumber = [];
console.log('array vuoto', arrayNumber);

// seleziono il mio container per creargli all'interno i miei div
document.getElementById('container');
// genero 5 numeri random unici
while (arrayNumber.length < 5) {
  let randomNum = Math.floor(Math.random() * 10) + 1;
  if (arrayNumber.includes(randomNum)) {
    
  } else {
    arrayNumber.push(randomNum)
    // per ogni numero nel mio array creo un div nel mio htmlche lo contenga
    const numContainer = document.createElement('div');
    // all'interno del mio div inserisco uno dei miei random num
    numContainer.innerHTML = randomNum;
    console.log(numContainer);
    // appendo i miei div al container precedentemente selezionato
    main_container.append(numContainer);
  }
}
console.log('array con numeri random', arrayNumber);


// // creo nell'html un ul per contenere i miei li
// // seleziono la mia ul
// const list = document.querySelector('.list-box');

// // creo tanti li nel mio html quanti sono i numeri randomici
// for (let i = 0; i < arrayNumber.length; i++) {
//   let list_item = document.createElement('li');
//   // console.log(list_item);
//   // appendo gli li alla mia ul
//   list.appendChild(list_item);
//   // inserisco nei miei li i numeri all'interno del mio array
//   list_item.innerHTML = arrayNumber;
// }
// console.log(list);
