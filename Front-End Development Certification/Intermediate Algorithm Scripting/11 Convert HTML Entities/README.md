# FreeCodeCamp
## Convert HTML Entities

[https://www.freecodecamp.com/challenges/convert-html-entities](https://www.freecodecamp.com/challenges/convert-html-entities)

Convert the characters `&, <, >, „` (double quote), and `’` (apostrophe), in a string to their corresponding HTML entities.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

* RegExp
* HTML Entities
* String.prototype.replace()

### Results:
1. `convertHTML("Dolce & Gabbana”)` should return `Dolce &​amp; Gabbana`.
2. `convertHTML("Hamburgers < Pizza < Tacos”)` should return `Hamburgers &​lt; Pizza &​lt; Tacos`.
3. `convertHTML("Sixty > twelve”)` should return `Sixty &​gt; twelve`.
4. `convertHTML('Stuff in "quotation marks”’)` should return `Stuff in &​quot;quotation marks&​quot;`.
5. `convertHTML("Shindler's List”)` should return `Shindler&​apos;s List`.
6. `convertHTML("<>”)` should return `&​lt;&​gt;`.
7. `convertHTML("abc”)` should return `abc`.