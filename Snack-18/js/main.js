// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// CREO UN ARRAY DI SQUADRE

let team = [
    {name: 'Roma', points: 0, foulSuffered: 0,},
    {name: 'Lazio', points: 0, foulSuffered: 0,},
    {name: 'Inter', points: 0, foulSuffered: 0,},
    {name: 'Milan', points: 0, foulSuffered: 0,},
    {name: 'Juve', points: 0, foulSuffered: 0,},
];

// GENERO NUMERI RANDOM PER PUNTI E FALLI SUBITI
for (let i = 0; i < team.length; i++) {
    let randomPoints = Math.floor(Math.random() * 100 + 1);
    let randomFouls = Math.floor(Math.random() * 100 + 1);
    team[i].points = randomPoints;
    team[i].foulSuffered = randomFouls;
}

console.log(team);

// CREAO ARRAY COMPOSTO DA NOMI E FALLI SUBITI DELLE SQUADRE
