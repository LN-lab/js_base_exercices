/**
 * Définissez une variable `resultat` qui va concaténer les chaînes de caractères (string)
 * "tutu" et "tata"
 OK*/

let resultat = "tutu" + "tata";

// Ne changez pas cette partie du code !!
test("Capitalisty", () => {
	expect(resultat).toEqual("tututata");
});
