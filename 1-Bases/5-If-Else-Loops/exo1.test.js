/**
 * Définissez une variable `condition1` de valeur `true` et une autre `condition2` de valuer `false`.
 * Définissez une variable `resultat1` de valeur `0` et une autre de `resultat2` de valeur `0`;
 * Créer 2 expression if et else, une utilisant la `condition1` l'autre utilisant la `condition2`.
 * Ecrire le code pour que `resultat1` change pour la valeur 1 et `resultat2` change pour la valeur 2
 * en mettant ce changement au bon endroit du bloc if-else
 OK*/

let condition1 = true;
let condition2 = false;
let resultat1 = 0;
let resultat2 = 0;

if (condition1) {
	resultat1 = 1;
	resultat2 = 2;
} else {
	condition2;
}

// Ne changez pas cette partie du code !!
test("If-else", () => {
	expect(condition1).toEqual(true);
	expect(condition2).toEqual(false);
	expect(resultat1).toEqual(1);
	expect(resultat2).toEqual(2);
});
