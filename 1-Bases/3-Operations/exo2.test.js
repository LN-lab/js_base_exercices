/**
 * Définissez 2 variables :
 * - `uneVariable` de valeur 22
 * - `uneAutreVariable` de valeur '22'
 *
 * Puis 2 autres variables :
 * - `resultat1` qui va contenir le résultat de la comparaison basique entre vos 2 précédentes variables
 * - `resultat2` qui va contenir le résultat de la comparaison, incluant la vérification de type, entre vos 2 précédentes variables
 OK*/

let uneVariable = 22;
let uneAutreVariable = "22";

let resultat1 = uneVariable == uneAutreVariable;
let resultat2 = uneVariable === uneAutreVariable;

// Ne changez pas cette partie du code !!
test("Capitalisty", () => {
	expect(uneVariable).toEqual(22);
	expect(uneAutreVariable).toEqual("22");
	expect(resultat1).toEqual(true);
	expect(resultat2).toEqual(false);
});
