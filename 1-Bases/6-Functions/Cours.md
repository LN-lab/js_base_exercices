# Les fonctions

On attaque ici le nerf de la guerre, tout ce qui fait l'intérêt de la programmation.
Une fonction a pour but d'utiliser tous les concepts vue précédement afin de concevoir un algorithme.
L'idée est de pouvoir réutiliser cet algorithme pour ne pas avoir à le recopier une fois qu'il est validé.

Une fonction est composée de 2 partie, la signature et le corps.
```
function somme(a, b) // Ceci est la signature
{
    return a + b // Ceci est le corps, il est contenu entre les {}
}
```
Le mot clé `function` précise que nous allons créer une fonction, suivi du nom que l'on va lui donner.
Ensuite viennent les parenthèses qui permettent de définir des paramètres utilisable dans le corps de la fonction. Ces paramètres sont des variables dont la valeur sera connu au moment de l'appel (ou exécution) de la fonction.
```
somme(1,2) //On appelle ou exécute la fonction `somme` avec `a` qui aura pour valeur 1 et `b` pour valeur 2
```

Le mot clé supplémentaire vue ici est `return` il permet, de donner au code qui a appelé la fonction, un résultat.
```
const resultat = somme(1,2)
... // ici la suite du programme pourra utiliser `resultat` via d'autres instructions
```

# Les fonctions annonymes
Il y a 2 manières d'écrire une foncion, avec un nom ou anonyme. Une fonction anonyme n'a pas pour but d'être réutilisée ailleurs mais est nécessaire car elle est demandée comme paramètre d'une autre fonction.
```
document.getElementById('toto').addEventListener((e) => {
  ...
})
```
Le bloc `(e) => {...}` est une fonction anonyme, elle a un paramètre `e` et un corps entre {} comme pour la fonction nommé

# Le mix des 2
On peut donner un nom à une fonction anonyme comme suit
```
const somme = (a, b) => {
    return a + b
}
```
Ceci est équivalent à la function `somme` définie au dessus. Pourquoi écrire d'une manière ou l'autre ?

Aucune raison particulière mais il faut savoir que les 2 manières existent pour pouvoir lire le code Javascript.