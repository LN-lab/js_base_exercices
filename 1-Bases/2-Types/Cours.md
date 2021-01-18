# Les types

Un langage défini des types primitifs (aussi appelé structure de données) qui lui permettent de comprendre le code et ses variables. Javascript n'en compte que peu et il n'est pas nécessaire de nommer le type quand on les déclare en variable (au contraire d'un langage fortement typé) :
- Boolean (Booléen) : true ou false
- Null : null
- Undefined : undefined
- Number (Nombre) : 1,2,3...
- Chaîne de caractères (String) : "tutu", `bonjour`...
- Symbole (Trop rarement utilisé pour être évoqué dans ce cours)

Les 2 types suivants ne sont PAS primitifs mais valent d'être nommé
- Array (Tableau) : [], [1,2,3]... Le plus souvent utilisé pour rassembler une liste d'éléments.
- Object (Objet) : {}, {propriete1: valeur1}... Le plus souvent utiliés pour structurer une information plus complexe qu'un type primitif (les informations d'un utilisateur par exemple)

Ils peuvent se contenir l'un l'autre, un tableau peut contenir des types primitifs ou des objects ou d'autres tableaux. Un objet contient toujours des propriétés : se sont des chaines de caractères (qu'on écrit avant les ":") dont la valeur peut être un type primitif, un tableau ou un autre objet...

```
const a = 1; // ceci est une variable `a` de type `Number`
```

__Astuce__ : Pour connaitre le type d'une variable, on peut utiliser le mot clé `typeof` comme ceci :
```
const a = 1;
console.log(typeof a);
```