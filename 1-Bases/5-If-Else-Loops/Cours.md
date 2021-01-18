# Les conditions (if, else)

Afin de faire des programmes un peu plus intelligent que des comparaisons, Javascript permet de faire des conditions. Une condition va évaluer une expression et déterminer si elle est vrai ou non. En fonction elle exécutera le code du bloc qui suit.
```
const a = 1;
if (a === 2) {
    console.log('yiiihaaaa')
}
```
Ici le code dans le bloc qui suit le `if` ne sera PAS exécuté car `a` n'est pas égal à `2`;
Si l'on remplace `2` par `1`, ce sera le cas.

Afin de traiter le cas contraire à un `if`, le mot clé `else` a été créé. Il permet donc de gérer le cas ou la condition n'est pas vérifier.

```
const a = 1;
if (a === 2) {
    console.log('yiiihaaaa')
} else {
    console.log('youhou')
}
```
Ce code qui va donc écrire `youhou` dans le terminal;

# Les boucles (loop, while, for)

Les boucles ont pour but d'exécuter un même code de multiples fois.
Ce sera toujours une condition, comme pour le `if-else` qui va déterminer si la boucle doit continuer ou non.
```
let calcul = 0;
let condition = false;
while (condition) {
    if (calcul > 10) {
        condition = true;
    }
    calcul = calcul + 3;
}
```
Le corps de la boucle entre {} va être exécuté 4 fois.

Afin de gérer un cas très répandu de boucle avec un code qui aura besoin d'une variable qui augmente de 1 en 1, il existe le `for`
```
for(let index=0; index < 10; index++) {
    ...
}
```
Cette boucle va exécuter le code dans son coprs 10 fois, et le code dans ce corps pourra utiliser la valeur de `index` qui passera de 0 à 1, 2, 3...