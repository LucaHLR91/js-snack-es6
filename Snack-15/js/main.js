// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

// CREO ARRAY DI OGGETTI

let bici = [
    {
        nome: 'atala',
        peso: 10
    },

    {
        nome: 'vicini',
        peso: 12
    },

    {
        nome: 'falcon',
        peso: 25
    }
];

console.log(bici);

// STAMPO LA BICI CHE PESA DI MENO
let biciLeggera = bici[0];
for (let i = 0; i < bici.length; i++) {
    console.log(bici[i]);
    
    if (bici[i].peso < biciLeggera.peso) {
        biciLeggera = bici[i];
    }
};

console.log(biciLeggera);

