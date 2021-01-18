/**
 * Créer une variable tableau avec pour valeurs : 1,2,3 et 4
 * Utiliser une boucle For pour ajouter 3 à tous les chiffres du tableau
 OK*/

let tableau = [1, 2, 3, 4];
for (i = 0; i < tableau.length; i++) {
	tableau[i] = tableau[i] + 3;
}

// Ne changez pas cette partie du code !!
test("Transformation", () => {
	expect(tableau).toEqual([4, 5, 6, 7]);
});
