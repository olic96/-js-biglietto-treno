// chiedo quanti km il passegero vuole percorrere
const howManyKm = Number(prompt("Quanti km vuoi percorrere?"));
// chiedo l'età del passeggero
const howOldAreYou = Number(prompt("Quanti anni hai?"));


// calcolo il prezzo del biglietto al km per 0.21 euro
const prize4km = howManyKm * 0.21;
console.log(prize4km)
// calcolo il prezzo per i minorenni
const discount4Teens = 0.2;
// calcolo il prezzo per gli over 65
const discount4Elders = 0.4;

// SE il passeggero ha meno di 18 anni avrà il 20% di sconto ALTRIMENTI pagherà il prezzo intero
// SE il passeggero ha più di 65 anni avrà uno sconto del 40% ALTRIMENTI pagherà il prezzo intero
let discountTicket = prize4km;
if (howOldAreYou < 18) {
    discountTicket = discountTicket * discount4Teens;
    console.log(discountTicket)
} else if (howOldAreYou => 65) {
    discountTicket = discountTicket * discount4Elders;
    console.log(discountTicket)
}

// calcolo il prezzo al km per 0.21 euro espresso in numeri decimali
discountTicket = discountTicket.toFixed(2);

// messaggio 
document.getElementById("messaggio").innerHTML = `Il costo del tuo biglietto è:`;
// costo
document.getElementById("costo").innerHTML = `${discountTicket} $`


   
   