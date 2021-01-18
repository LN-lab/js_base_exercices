/**
 * Créer une variable `tableau` avec 2 éléments.
 * Y ajouter un élément.
 * Ecrire dans le terminal, via console.log, la taille de ce tableau
 OK*/

let tableau = [1, 2];
tableau.push(3);
console.log(tableau.length);

// Ne changez pas cette partie du code !!
test("Transformation", () => {
	expect(tableau.length).toEqual(3);
});
