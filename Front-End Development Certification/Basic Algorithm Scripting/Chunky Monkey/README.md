# FreeCodeCamp
## Chunky Monkey

[https://www.freecodecamp.com/challenges/truncate-a-string](https://www.freecodecamp.com/challenges/truncate-a-string)

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

* Array.prototype.push()
* Array.prototype.slice()

### Results:
1. `chunkArrayInGroups(["a", "b", "c", "d"], 2)` should return [["a", "b"], ["c", "d"]].
2. `chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)` should return [[0, 1, 2], [3, 4, 5]].
3. `chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)` should return [[0, 1], [2, 3], [4, 5]].
4. `chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)` should return [[0, 1, 2, 3], [4, 5]].
5. `chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)` should return [[0, 1, 2], [3, 4, 5], [6]].
6. `chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)` should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
7. `chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)` should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].