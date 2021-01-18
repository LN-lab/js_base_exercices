/**
 * Utilisez la boucle `for` pour faire la somme des chiffres de 1 à 9 dans la variable résultat.
 * La valeur initiale de la variable est : 0
 /OK*/

let resultat = 0;
for (let i = 0; i <= 9; i++) {
	resultat = resultat + i;
}

// Ne changez pas cette partie du code !!
test("For", () => {
	expect(resultat).toEqual(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9);
});
