# Les transformations

On a pu voir les primitives et les opérations qui permettent de les additionner, soustraire, concaténer.
Afin de manipuler les structures plus complexes que sont les objets et les tableaux, il existe des méthodes et des propriétés qui sont mises à notre disposition.
- Tableau : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array
- Object : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object
La documentation de mozilla à ce sujet est très bonne, il n'y pas d'intérêt de vous détailler les méthodes une à une ici.
Nous allons en voir 3 `length`, `push` et `filter` ainsi que la manière d'accéder à une valeur de tableau ou d'objet.

```
const tableau = ['a', 'b', 'c'];
console.log(tableau[0]);
```
Ce code va afficher la lettre `a` car la syntaxe tableau[...] permet d'accéder à la valeur du tableau qui se trouve à la position ..., dans notre cas 0 donc le premier élément.

```
const utilisateur = {
    prenom: 'John',
    nom: 'Doe'
}
console.log(utilisateur.prenom);
```
Ce code va afficher `John` car la syntaxe utilisateur.uneProprieteDeLObjet permet d'accéder à la valeur de la clé uneProprieteDeLObjet, dans notre cas `prenom`.


const tableau = ['a', 'b', 'c'];
console.log(tableau.length);
```
Ce code va afficher la taille de notre tableau dans le terminal, soit `3`.

```
const tableau = [1,2,3];
tableau.push(12);
console.log(tableau);
```
Ce code va afficher un tableau contenant 1,2,3 et 12 car le nombre 12 a été ajouté au tableau via la méthode `push`.

```
const tableau = ["Max","Mouloud","Edmond"];
const tableauDesNomsQuiCommencentParM = tableau.filter((prenom) => {
    return prenom.startsWith('M');
})
console.log(tableauDesNomsQuiCommencentParM);
```
Ce code va afficher un tableau contenant le prénom Max et Mouloud.