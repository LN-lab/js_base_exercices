/**
 * Créer une variable tableau avec pour valeurs : 1,2,3 et 4
 * Créer une variable tableauInverse qui doit contenir les valeurs de tableau mais dans l'ordre inverse
 OK*/
let tableau = [1, 2, 3, 4];
let tableauInverse = tableau.reverse();
// Ne changez pas cette partie du code !!
test("Transformation", () => {
	expect(tableauInverse).toEqual([4, 3, 2, 1]);
});
