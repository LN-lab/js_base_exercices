/**
 * Tester les différentes opérations avec les types primitifs (et non primitifs) du chapitre précédent.
 * Afin de vous faire une idée de ce qu'accepte, gère ou foire complètement, Javascript.
 * Cet exercice est à tester via la commande `node 1-Bases/3-Operations/exo4.js`
 */
let booleen = true;
let nombre = 3;
let chaineDeCaractere = "texte";
let nonDefini = undefined;
let invalide = null;

let boAndNb = booleen + nombre;
console.log("boolean and Number : " + boAndNb);

let boAndStr = booleen + chaineDeCaractere;
console.log(boAndStr);

let boAndUndefined = booleen + undefined;
console.log("boolean and undefind : " + boAndUndefined);

let boAndNull = booleen + invalide;
console.log("boolean and null : " + boAndNull);

let nbAndStr = nombre + chaineDeCaractere;
console.log("number and string : " + nbAndStr);

let nbAndUndefined = nombre + nonDefini;
console.log("number and undefined : " + nbAndUndefined);

let nbAndtNull = nombre + invalide;
console.log("number and null : " + nbAndNull);

let strAndUndefined = chaineDeCaractere + nonDefini;
console.log("string and undefined : " + strAndUndefined);

let strAndNull = chaineDeCaractere + invalide;
console.log("string and null : " + strAndNull);

let undefinedMultNull = nonDefini + invalide;
console.log("undefined and null : " + undefinedMultNull);
