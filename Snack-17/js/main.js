// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
// BONUS: inserire una arrow function che preso in input l'array di bici ritorni l'oggetto con bici più leggera

// CREO ARRAY DI OGGETTI
let bici = [
    {nome: 'atala', peso: 17},

    {nome: 'vicini', peso: 12},

    {nome: 'falcon', peso: 25},
];

// STAMPO LA BICI CON IL PESO MINORE
let lightWeightBike = null;

for (let i = 0; i < bici.length; i++) {
    let {nome: bikeName, peso: bikeWeight} = bici[i];
    if (lightWeightBike == null || lightWeightBike.peso > bikeWeight) {
        lightWeightBike = bici[i];
    }
};

let {nome, peso} = lightWeightBike;

console.log (`La bici più leggera è la ${nome} e pesa ${peso}`);
