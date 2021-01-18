/**
 * Définissez une variable de type tableau qui soit vide et une variable de type objet qui soit vide :
 * - `tableauVide`
 * - `objetVide`
 *
 * Puis une variable de type tableau contenant 2 éléments
 * et une variable de type object contenant 2 propiétés nommés `prop1` et `prop2` :
 * - `tableauTaille2`
 * - `objectAvec2Props`
 */

let tableauVide = [];
let objetVide = {};

let tableauTaille2 = [1, 2];
let objectAvec2Props = {
	prop1: "Bob",
	prop2: 20,
};

// Ne changez pas cette partie du code !!
test(`Les tableaux et objets c'est mon dada`, () => {
	// Les vides
	expect(Array.isArray(tableauVide)).toEqual(true);
	expect(tableauVide.length).toEqual(0);
	expect(typeof objetVide).toEqual("object");
	expect(Object.keys(objetVide).length).toEqual(0);

	// Les pleins
	expect(Array.isArray(tableauTaille2)).toEqual(true);
	expect(tableauTaille2.length).toEqual(2);
	expect(typeof objectAvec2Props).toEqual("object");
	expect(Object.keys(objectAvec2Props).length).toEqual(2);
	expect(objectAvec2Props.prop1).toBeDefined();
	expect(objectAvec2Props.prop2).toBeDefined();
});
