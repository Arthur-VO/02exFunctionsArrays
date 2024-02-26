// 1. Welke waarden krijgen de variabelen?
const [a, b] = [1, 2];
// Antwoord: A = 1 ; B = 2

// 2. Welke waarden krijgen de variabelen?
const [c, , d] = [1, 2, 3];
// Antwoord: c = 1 ; d = 3

// 3. Welke waarden krijgen de variabelen?
let e = 1;
let f = 2;
[f, e] = [e, f];
// Antwoord: e = 2 ; f = 1

// 4. Welke waarden krijgen de variabelen?
const [i, [j, [k, l]]] = [1, [2, [[[3, 4], 5], 6]]];
console.log(i, j, k, l);
// Antwoord: i = 1 ; j = 2 ; k = [[3, 4], 5] ; l = 6

// 5. Plaats hieronder de twee console.log()-statements uit commentaar
// en maak gebruik van destructuring om de variabelen de correcte waarde toe te kennen.
const ninjaTurtles = ['Leonardo', 'Raphael', 'Donatello', 'Michelangelo'];
const [leo,raph] = ninjaTurtles;

console.log(leo); // Leonardo
console.log(raph); // Raphael

// 6. Plaats hieronder de drie console.log()-statements uit commentaar
// en maak gebruik van destructuring om de variabelen de correcte waarde toe te kennen.

const introduction = ['Hello', 'I', 'am', 'Sarah'];

const [greeting, pronoun, , name] = introduction;

console.log(greeting); // Hello
console.log(pronoun); // I
console.log(name); // Sarah

// 7. Plaats hieronder de vijf console.log()-statements uit commentaar
// en maak gebruik van destructuring om de variabelen de correcte waarde toe te kennen.
const avengers2 = [
  'Natasha Romanoff',
  ['Tony Stark', 'James Rhodes'],
  ['Steve Rogers', 'Sam Wilson'],
];

// const [blackWidow, ironManwarMachine, capfalcon] = avengers2;
// const [ironMan, warMachine] = ironManwarMachine;
// const [cap, falcon] = capfalcon;

const [blackWidow, [ironMan, warMachine], [cap, falcon]] = avengers2;

console.log(blackWidow); // Natasha Romanoff
console.log(ironMan); // Tony Stark
console.log(warMachine); // James Rhodes
console.log(cap); // Steve Rogers
console.log(falcon); // Sam Wilson
