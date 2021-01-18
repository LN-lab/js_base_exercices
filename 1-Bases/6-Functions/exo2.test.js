/**
 * Créer une fonction sommeDesEntiers qui prend 2 paramètres et qui va retourner
 * la somme des nombres entier (reprendre la boucle for de la partie 5)
 * Le premier paramètre représente la valeur de départ de l'entier
 * Le second paramètre représente la valeur finale de l'entier (à laquelle on arrête de faire une somme).
 *OK*/

function sommeDesEntiers(x, y) {
	let resultat = 0;
	for (let i = x; i <= y; i++) {
		resultat = resultat + i;
	}
	return resultat;
}

// Ne changez pas cette partie du code !!
test("Function sommeDesEntiers", () => {
	expect(sommeDesEntiers(1, 3)).toEqual(1 + 2 + 3);
	expect(sommeDesEntiers(3, 8)).toEqual(3 + 4 + 5 + 6 + 7 + 8);
});
