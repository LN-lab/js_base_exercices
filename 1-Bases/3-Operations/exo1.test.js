/**
 * Définissez une variable `resultat` qui doit contenir le calcul du problème suivant :
 * J'ai 5 euros, on m'en donne 3 autres, mais mes parents me prenne la moitié
 * de mes gains de la journée car se sont des capitalistes acharnés.
 * Combien me reste-t-il d'argent après cette ponction ?
 OK*/

let resultat = (5 + 3) / 2;

// Ne changez pas cette partie du code !!
test("Capitalisty", () => {
	expect(resultat).toBe(4);
});
