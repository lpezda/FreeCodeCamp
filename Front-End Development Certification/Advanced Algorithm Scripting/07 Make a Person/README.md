# FreeCodeCamp
## Make a Person    

[https://www.freecodecamp.com/challenges/make-a-person](https://www.freecodecamp.com/challenges/make-a-person)

Fill in the object constructor with the following methods below:

`getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)`

Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

* Closures
* Details of the Object Model

### Results:
1. `Object.keys(bob).length` should return 6.
1. `bob instanceof Person` should return true.
1. `bob.firstName` should return undefined.
1. `bob.lastName` should return undefined.
1. `bob.getFirstName()` should return "Bob".
1. `bob.getLastName()` should return "Ross".
1. `bob.getFullName()` should return "Bob Ross".
1. `bob.getFullName()` should return "Haskell Ross" after `bob.setFirstName("Haskell”)`.
1. `bob.getFullName()` should return "Haskell Curry" after `bob.setLastName("Curry”)`.
1. `bob.getFullName()` should return "Haskell Curry" after `bob.setFullName("Haskell Curry”)`.
1. `bob.getFirstName()` should return "Haskell" after `bob.setFullName("Haskell Curry”)`.
1. `bob.getLastName()` should return "Curry" after `bob.setFullName("Haskell Curry”)`.