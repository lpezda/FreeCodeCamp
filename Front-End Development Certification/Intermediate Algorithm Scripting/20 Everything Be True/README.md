# FreeCodeCamp
## Everything Be True  

[https://www.freecodecamp.com/challenges/everything-be-true](https://www.freecodecamp.com/challenges/everything-be-true)

Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

Remember, you can access object properties through either dot notation or [] notation.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

### Results:
1. `truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex”)` should return true.
2. `truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex”)` should return false.
3. `truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age”)` should return false.
4. `truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat”)` should return false
5. `truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat”)` should return true
6. `truthCheck([{"single": "yes"}], "single") should return true
7. `truthCheck([{"single": ""}, {"single": "double"}], "single”)` should return false
8. `truthCheck([{"single": "double"}, {"single": undefined}], "single”)` should return false
9. `truthCheck([{"single": "double"}, {"single": NaN}], "single”)` should return false