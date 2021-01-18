/**
 * Utilisez la boucle while pour multiplier la variable `resultat` par 2, 5 fois.
 * La valeur initiale de la variable est : 1
 /OK*/

let resultat = 1;
let i = 0;
while (i < 5) {
	i++;
	resultat = resultat * 2;
}

// Ne changez pas cette partie du code !!
test("While", () => {
	expect(resultat).toEqual(2 * 2 * 2 * 2 * 2);
});
