/**
 * Définissez 2 variables, une variable nommé `variable1` de valeur `22`
 * et une constante `constante1` de valeur 'bonjour`
 OK*/

let variable1 = 22;
const constante1 = "bonjour";

// Ne changez pas cette partie du code !!
test("Les valeurs sont bonnes", () => {
	expect(variable1).toEqual(22);
	expect(constante1).toEqual("bonjour");
});
