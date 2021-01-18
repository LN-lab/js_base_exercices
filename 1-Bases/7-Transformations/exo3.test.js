/**
 * Même exercice que le 2 mais en utilisant la fonction `map` d'un tableau
OK */
let tableau = [1, 2, 3, 4];
tableau = tableau.map((item) => item + 3);

// Ne changez pas cette partie du code !!
test("Transformation", () => {
	expect(tableau).toEqual([4, 5, 6, 7]);
});
