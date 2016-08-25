# FreeCodeCamp
## Seek and Destroy

[https://www.freecodecamp.com/challenges/seek-and-destroy](https://www.freecodecamp.com/challenges/seek-and-destroy)

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

* Arguments object
* Array.prototype.filter()

### Results:
1. `destroyer([1, 2, 3, 1, 2, 3], 2, 3)` should return [1, 1].
2. `destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)` should return [1, 5, 1].
3. `destroyer([3, 5, 1, 2, 2], 2, 3, 5)` should return [1].
4. `destroyer([2, 3, 2, 3], 2, 3)` should return [].
5. `destroyer(["tree", "hamburger", 53], "tree", 53)` should return [„hamburger”].
