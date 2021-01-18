/**
 * Définissez une variable pour chaque type primitif (utilisez les mêmes noms que ci dessous):
 * - `booleen` dont la valeur doit être un type boolean
 * - `nombre` dont la valeur doit être un type number
 * - `chaineDeCaractere` dont la valeur doit être un type string
 * - `nonDefini` dont la valeur doit être un type undefined
 * - `invalide` dont la valeur doit être un type null
 OK*/

let booleen = true;
let nombre = 1;
let chaineDeCaractere = "texte";
let nonDefini = undefined;
let invalide = null;

// Ne changez pas cette partie du code !!
test("Les types sont bons", () => {
	expect(typeof booleen).toEqual("boolean");
	expect(typeof nombre).toEqual("number");
	expect(typeof chaineDeCaractere).toEqual("string");
	expect(typeof nonDefini).toEqual("undefined");
	expect(invalide === null).toEqual(true);
});
