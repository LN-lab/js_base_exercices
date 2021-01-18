/**
 * Sans modifier l'expression ligne 6 ou 7, ajouter un try...catch qui va s'assure que la variable nombre
 * a pour valeur 2 en cas d'erreur
 OK*/
let nombre = 0;
try {
	nombre = 77 + autreVariable;
} catch (e) {
	nombre = 2;
}
// Ne changez pas cette partie du code !!
test("Try...catch", () => {
	expect(nombre).toBe(2);
});
