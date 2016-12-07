# FreeCodeCamp
## Steamroller   

[https://www.freecodecamp.com/challenges/steamroller](https://www.freecodecamp.com/challenges/steamroller)

Flatten a nested array. You must account for varying levels of nesting.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

* Array.isArray()

### Results:
1. `steamrollArray([[["a"]], [[„b”]]])` should return `[„a”, „b”]`.
2. `steamrollArray([1, [2], [3, [[4]]]])` should return `[1, 2, 3, 4]`.
3. `steamrollArray([1, [], [3, [[4]]]])` should return `[1, 3, 4]`.
4. `steamrollArray([1, {}, [3, [[4]]]])` should return `[1, {}, 3, 4]`.