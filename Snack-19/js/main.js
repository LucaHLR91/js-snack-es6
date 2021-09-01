// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

// SCRIVO LA FUNZIONE
let numbers = [85, 104, 41, 33, 76, 58, 88, 95];
let numberA = 3; // RAPPRESENTANO LA POSIZIONE NELL'ARRAY
let numberB = 5; // RAPPRESENTANO LA POSIZIONE NELL'ARRAY

const myFunction = (array, numA, numB) => {
    let newNumbers =[];
    array.forEach((element, index) => {
        if (index >= numA && index <= numB) {
            newNumbers.push(element);
        } 
    });
    return newNumbers;
};

console.log(myFunction(numbers, numberA, numberB));

// SCRIVO LA FUNZIONA CON IL FILTER

const miaFunzione = (array, numA, numB) => {
    let nuoviNumeri = [];
    let numero = array.filter((numero, index) => {
        if (index >= numA && index <= numB) {
            nuoviNumeri.push(numero);
        }
    });
    return nuoviNumeri;
};

console.log(miaFunzione(numbers, numberA, numberB));