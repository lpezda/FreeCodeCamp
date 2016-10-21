# FreeCodeCamp
## Diff Two Arrays 

[https://www.freecodecamp.com/challenges/diff-two-arrays](https://www.freecodecamp.com/challenges/diff-two-arrays)

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

* Comparison Operators
* Array.prototype.slice()
* Array.prototype.filter()
* Array.prototype.indexOf()
* Array.prototype.concat()

### Results:
1. `diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])` should return an array.
2. `[„diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub”], [„diorite", "andesite", "grass", "dirt", "dead shrub”]` should return `[„pink wool”]`.
3. `[„andesite", "grass", "dirt", "pink wool", "dead shrub"], [„diorite", "andesite", "grass", "dirt", "dead shrub”]` should return `[„diorite", "pink wool”]`.
4. `[„andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub”]` should return `[]`.
5. `[1, 2, 3, 5], [1, 2, 3, 4, 5]` should return `[4]`.
6. `[1, "calf", 3, "piglet"], [1, "calf", 3, 4]` should return `[„piglet", 4]`.
7. `[], ["snuffleupagus", "cookie monster", "elmo”]` should return `[„snuffleupagus", "cookie monster", "elmo”]`.
8. `[1, "calf", 3, "piglet"], [7, "filly”]` should return `[1, "calf", 3, "piglet", 7, "filly”]`.