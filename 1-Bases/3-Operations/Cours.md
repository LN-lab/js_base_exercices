# Les opérations

Toutes les opérations numériques existent en JS, soit : +, -, *, / et %.

```
const resultat = 1 / 2;
```

Un cas particulier est fait pour le `+` si les variables ou valeurs de l'expression sont des chaines de caractère (string) et non des nombres. Cela donnera :
```
const concatenation = 'bonjour' + 'ca va?' // concatenation contenant donc 'bonjourca va?' par la suite
```
Cette opération n'est plus appelé addition mais `concaténation`.

## Comparaisons
Les comparaisons (qui sont une sous partie des opérations) vont permettre de vérifier des égalités et leur résultat sera donc interprété comme un booléen par Javascript. On utilise un double égale pour cela `==` pour la comparaison basique
```
22 == 23
```
Attention car ce double égal ne vérifie __PAS__ le type, on aura donc
```
22 == '22'
```
Qui sera `true` a cause de la `coercision`. Ce principe est en théorie la pour vous aider, Javascript va essayer de comparer 2 valeurs (ou 2 variables), en les convertissant dans le même type.
Afin d'éviter toute erreur de ce genre, il faut toujours faire une comparaison avec un triple égal `===`.
```
22 === '22'
```
Cette fois ci, l'opération nous donnera un `false`.
La différence entre ces 2 types de comparaison, et l'importance d'utiliser la seconde, n'est pas forcément claire avec des valeurs comme ci dessus. Mais elle devient bien plus limpide si on utilise des variables ou des paramètres dont on ne connait pas la valeur.