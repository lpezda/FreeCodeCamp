# FreeCodeCamp
## Confirm the Ending 

[https://www.freecodecamp.com/challenges/confirm-the-ending](https://www.freecodecamp.com/challenges/confirm-the-ending)

Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:
* String.prototype.substr()
* String.prototype.substring()

### Results:
1. `confirmEnding("Bastian", „n”)` should return true.
2. `confirmEnding("Connor", „n”)` should return false.
3. `confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification”)` should return false.
4. `confirmEnding("He has to give me a new name", "name”)` should return true.
5. `confirmEnding("Open sesame", "same”)` should return true.
6. `confirmEnding("Open sesame", "pen”)` should return false.
7. `confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain”)` should return false.
8. Do not use the built-in method `.endsWith()` to solve the challenge.