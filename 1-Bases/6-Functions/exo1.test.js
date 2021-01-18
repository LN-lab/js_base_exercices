/**
 * Créer une fonction nommé `multiplication` qui a 2 paramètres
 * qui va retourner le résultat de leur multiplication
 OK*/

function multiplication(x, y) {
	return x * y;
}

// Ne changez pas cette partie du code !!
test("Function multiplication", () => {
	expect(multiplication(1, 2)).toEqual(2);
	expect(multiplication(2, 2)).toEqual(4);
	expect(multiplication(6, 0.5)).toEqual(3);
});
