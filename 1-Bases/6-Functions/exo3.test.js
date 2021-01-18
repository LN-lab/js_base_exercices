/**
 * Recréer la fonction multiplication en utilisant la syntaxe d'une fonction anonyme
 * mais en lui donnant un nom
 OK*/

const multiplication = (x, y) => {
	return x * y;
};

// Ne changez pas cette partie du code !!
test("Function multiplication anonyme", () => {
	expect(multiplication(1, 2)).toEqual(2);
});
