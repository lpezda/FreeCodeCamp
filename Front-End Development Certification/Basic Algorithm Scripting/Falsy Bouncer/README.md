# FreeCodeCamp
## Falsy Bouncer

[https://www.freecodecamp.com/challenges/falsy-bouncer](https://www.freecodecamp.com/challenges/falsy-bouncer)

Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

* Boolean Objects
* Array.prototype.filter()

### Results:
1. `bouncer([7, "ate", "", false, 9])` should return `[7, "ate", 9]`.
2. `bouncer(["a", "b", „c”])` should return `[„a”, "b", „c”]`.
3. `bouncer([false, null, 0, NaN, undefined, „”])` should return `[]`.
4. `bouncer([1, null, NaN, 2, undefined])` should return `[1, 2]`.
