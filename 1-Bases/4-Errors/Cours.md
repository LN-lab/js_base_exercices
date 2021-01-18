# Les erreurs

Quoi ? Votre code a des erreurs! Mais comment est-ce possible ?
Bien entendu, vous ferez, et nous ferez, des erreurs dans tous les morceaux de code que nous pourrons écrire, car nous ne sommes pas des ordinateurs au départ et les fois ou un code sera bon du premier coup seront assez rare, malgré le temps et la maîtrise.
Car il y 2 types d'erreurs :
- Celle qui fait que votre code ne fonctionne pas : celle-ci est en général assez simple à trouver car lors de l'exécution de votre code, le terminal vient vous hurler des tonnes d'informations pour vous dire que cela ne fonctionne pas comme cela est prévu.
- Celle qui, dans un cas d'utilisation non standard, fait que votre code ne fonctionne pas : celle la est moins visible de primer abord. En effet, elle ne se produit que dans des situations précises, auxquelles vous ne pouvez pas toujours penser.

Le premier cas d'erreur devrait être assez simple à voir car vous allez tester votre nouveau code, et cela ne va pas faire ce que vous attendez. Le second cas étant plus difficile à imaginer, une instruction est mise à votre disposition `try...catch`. Qui va s'écrire comme suit.
```
try {
  ...votre code qui fera une erreur 
} catch (e) {
  ... votre code qui va faire le nécessaire pour comprendre, ou au moins alerter sur la raison de l'erreur `e`
}
```
Vous pourrez faire le test, mais si votre programme a une erreur qui se produit en dehors de ce `try...catch` il va s'arrêter brusquement. La où avec le `try...catch` vous avez la possibilité de gérer correctement le cas d'erreur de vous demander, quoi faire ?
Peut être que la décision sera d'arrêter votre programme brusquement, mais c'est vous qui décidez, pas une erreur que vous subissez.