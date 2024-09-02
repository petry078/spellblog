---
title: JavaScript cast specification
date: "2022-08-20"
sidebar: auto
tags:
  - javascript
  - ecmascript
  - reference
---

# JavaScript cast specification

> Content in progress.

## 1. Objects

*"ECMAScript is an object-oriented programming language for performing computations and manipulating computational objects within a host environment... In ECMAScript, an object is a collection of zero or more properties... Properties are containers that hold other objects, primitive values, or functions"*

*"...An object is a member of the built-in type Object; and a function is a callable object. A function that is associated with an object via a property is called a method."*

> The [ECMAScript 262 ® 2024 Language Specification](https://tc39.es/ecma262/)

In JavaScript we write objects. Objects have **properties**, that can be: 

* Nothing;
* Other **Objects**;
* **Primitive Values**;
* **Functions**.

> Everything that is not a primitive value, is an object.

There are several built-in objects in JavaScript:

* `Object`;
* `Function`; 
* `Boolean`;
* `Symbol`; 
* Various `Error`
* `Math`;
* `Number`;
* `Date`; 
* `String`; 
* `RegExp`;
* `Array`;
* Nine different kinds of `Typed Arrays`; 
* `Map`;
* `Set`;
* `JSON`; 
* `ArrayBuffer`;
* `SharedArrayBuffer`;
* `DataView`;
* `Promise`;
* `Proxy`;
* `Reflect`.

Objects can have methods, wich are functions that will use the object properties data. 

*"When a function is called as a method of an object, the object is passed to the function as its **this** value."*

### Primitive Values

* Undefined;
* Null; 
* Boolean;
* Number; 
* BigInt; 
* String;
* Symbol.

Use `typeof varName` to reveal data type of element at runtime.

### Functions

A function is a callable object, with a set of commands that will be runned when the function is called. Example `function()`. 

Functions can return something and have scope `{}` defined.

Functions can be called as methods, that will run with the object properties data. Example: `object.functionAsMethod()` just like `console.log()`.

As like an object it is, functions can have properties and methods.

```js
function(paramenters){
 commands
}
```

#### Arrow functions

Alternative function syntax for using it as variables, or parameters. Arrow functions dosent have its own `this` and can't be used as constructor function.

```js
let arrowFunction = (paramenters) => {
    commands
}
```

## 2. Strings and Numbers

* `Number(varName)` coverts to number; 
* `String(varName)` converts to string;
* `Number.parseInt(varName)` coverts to whole number;
* `Number.parseFloat(varName)` converts to floating-point number.
* `console.log(Number.isInteger(12))` will check if number is floating-point.

```js
let fu = "bar" //string
let fuu = 123 //number
```

### Template strings

```javascript
console.log(`Name: ${name};`)
console.log(`Surname: ${surname}.`)
```

### String formatting

```javascript
var jsString = "JavaScript";
console.log(jsString.toUpperCase());
console.log(jsString.toLowerCase());

var jsStringLenght = jsString.length
console.log(jsStringLenght)
```
## 3. Operators

* Arithmetic (Aritiméticos);
* Assignment (Atribuição);
* Comparison (Relacionais);
* Logical (Lógicos);
* Conditional or Ternary (Condicional ou Ternário).

Precedence order:
1. Arithmetic;
2. Comparison;
3. Logical;
4. Ternary.

### Arithmetic operators

| Operator | Function                                |
|----------|-----------------------------------------| 
|     +    | Addition                                |  
|     -    | Subtraction                             |
|     *    | Multiplication                          |   
|     /    | Division                                |
|     %    | Remainder (resto de uma divisão inteira)|
|    **    | Power (Ex: 5² = `[5 ** 2]`)             | 

#### Arithmetic operators precedence order

1. `()` first priority
2. `**`
3. `*`, `/`, `%`
4. `+`, `-` last priority

### Assignment operators

| Operator  | Function                                |
|-----------|-----------------------------------------| 
|     =     | Assignment (recebe)                     |
| // Auto-assignment                                  |
|    +=     | Addition (a += 5; // a = a + 5)         |
|    -=     | Subtraction (a -= 2; // a = a - 2)      |   
|    *=     | Multiplication (a *= 3; // a = a * 3)   |
|    /=     | Division (a /= 2; // a = a / 2)         |
|    %=     | Remainder (a %= 2; // a = a % 2)        |
|   **=     | Exponentiation (a **= 2; // a = a**2)   | 

#### Increment (++) and decrement (--)

* `x++` x = x + 1
* `x--` x = x - 1

> Pre-increment `++x`

> Pre-decrement `--x`

### Comparison operators

It returns `true` or `false`, comparing only the value.

| Operator  | Function                                     |
|-----------|----------------------------------------------| 
|     >     | Greater than (maior que)                     |
|     <     | Less than (menor que)                        |
|     >=    | Greater than or equal to (maior que ou igual)|           
|     <=    | Less than or equal to (menor que ou igual)   |
|     ==    | Equal to (same value)                        |
|     !=    | Not equal to                                 |

#### Strict operators (igualdade e desigualdede)

Compares value and type.

| Operator  | Function                                     |
|-----------|----------------------------------------------| 
|    ===    | Strict equal to (igual restrito)             |
|    !==    | Strict not equal to (desigual restrito)      |
 
Examples:

```javascript
5 > 2  //true
7 < 4  //false
8 >= 8 //true
9 <= 7 //false
5 == 5 //true
4 != 4 //false

// strict equal operator
2 === 2 // true
2 === '2' // false

// strict not equal operator
2 !== '2' // true
2 !== 2 // false
```  

### Logical operators

```
| Operator  | Function       | Example                            |
|-----------|----------------|------------------------------------|
|     !     | Not (negação)  | `(x < 10 && y > 1)` // true  	  |
|    &&     | And (conjunção)| `(x == 5 || y == 5)` // false      |
|    ||     | Or  (disjunção)| ```!(x == y)``` // true            |
```

Unary operator `!` (not) only deals with one operating, turning 0 in 1 and 1 in 0. True to false, false to true.

Binary operators `&&` and `||` deals with two operating and returns true or false after analysis. If you ask for a book heavy and `&&` black, it must return true only if the book is heavy and black, but the or `||` operator will return true if at least one is true.

```javascript
//Inverts the result
!true //false
!false //true

//Both need to be `true` to return `true`.
true && true //true
true && false //false
false && false //false
false && true //false

//Only one need to be `true` to return `true`
true || true //true
true || false //true
false || false //false
false || true //true
```

### Conditional or Ternary operators

It begins with a logic test, if it returns true, it will run the code on the first `true` slot, and if it returns false, runs the second `false` slot. 

Syntax:

`x && b ? true : false`

Examples:

```javascript
// 1.
let media = 5.5
let mediaCalculada = media > 6 ? "Aprovado(true)" : "Reprovado(false)"

console.log(mediaCalculada) // Reprovado(false)

// 2.
var x = 8
var res = x % 2 == 0 ? 5 : 9 // 5 (true)

//3. 
var age = 18
var r = age >= 18 ? "Adult" : "Child" // Adult (true)
```

## 4. Document Object Model (DOM)

The DOM tree:

```
window.location
      .history
      .document.<call to HTML tag (selector)>    	
```

### Selectors

#### getElementsBy...

* `getElementById` Select HTML tag by its ID.
* `getElementsByTagName()` Select HTML tags.
* `getElementsByName()` Select HTML tag by its name.
* `getElementsByClassName()` Select HTML tags by its class name.

Usage:

```html
<p id = "IdOfP">Old string</p>
<script>
window.document.getElementById("IdOfP").innerText = "New string"
</script>
``` 

#### Query selectors

Modern aproach of selectors.

* `querySelector()` Select the first HTML Tag
* `querySelectorAll()` Creates a list of all elements. Not sure how it works.

> `querySelector()` can be used to select HTML tag + ID/Class (`#` for ID or `.` for class)

Usage:

```html
<p>String 1<p>
<p id = "IdOfP">String 2</p>
<p class = "ClassOfP">String 3</p> 
<script>
window.document.querySelector("p").innerText = "Select by HTML tag name"
window.document.querySelector("#IdOfP").innerText = "Select by ID"
window.document.querySelector(".ClassOfP").innerText = "Select by Class name"    
</script>
``` 

### innerText and innerHTML

* `innerText` Write plain text on top of selected element;
* `innerHTML` Write HTML on top of selected element;

```html
<h1></h1>
<p></p>
<script>
document.querySelector("h1").innerText="Inset only raw text";
document.querySelector("p").innerHTML="Insert text with <strong>HTML Tags</strong>"
</script>
```

> Avoid using `innerHTML`, that can represent a risk of Cross-Site Scripting (XSS).

### DOM Events

It works alongside with functions(). Events are called with reserved words, inside the `.html` file, like `onkeydown="functionName()"` or in the `.js` file with Event Listeners, like:

```html
<button id="myBtn">Try it</button>

<p id="textField"></p>

<script>
document.getElementById("myBtn").addEventListener("click", printDate);

function printDate() {
  document.getElementById("textField").innerHTML = Date();
}
</script>
```

This can also be done with Arrow Functions:

```javascript
document.getElementById("myBtn").addEventListener("click", (printDate) => {
    document.getElementById("textField").innerHTML = Date();
})
```

Mouse events example:

```html
<body>
    <main>
    </main>

    <script>
        let main = document.querySelector("main")
        //Events
        main.addEventListener("mouseenter", mouseenterFunction)
        main.addEventListener("mouseout", mouseoutFunction)
        main.addEventListener("click", clickFunction)

        function mouseenterFunction() {
            main.innerText = "mouseenter event"
            main.style.background = "red"
        }
        
        function mouseoutFunction() {
            main.innerText = "mouseout event"
            main.style.background = "yellow"
        }
        
        function clickFunction() {
            main.innerText = "click event"
            main.style.background = "purple"
        }
    </script>

    <style>
        main {
            width: 150px;
            height: 150px;
            background-color: green;
        }
    </style>
</body>
```
`Hello ${name}` example:

> This example needs refinement.

```html
<body>
    <form>
        <label for="inName">Name:</label>
        <input type="text" name="" id="inName">
        <input type="submit" value="print">
    </form>

    <h1></h1>

<script>
    let name = document.querySelector("form").inName.value
    document.querySelector("form").addEventListener("submit", (printName) => {
        document.querySelector("h1").innerText = `Hello, ${name}`
        printName.preventDefault()
    })
</script>
</body>
```
> For complete events list, see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Events).

## 5. Math functions

In addition to the Arithmetic operators, math can be done with the `Math.` functions.

### Rounding numbers

* `Math.round(num)` return the closest number. Example `Math.round(4.4)` = `4` and `Math.round(4.5)` = `5`;
* `Math.ceil(num)` round to bigger number. Example: `Math.ceil(4.2)` = `5`;
* `Math.floor(num)` round to lower number. Example: `Math.floor(4.2)` = `4`;

### Generating random numbers

`Math.random()` will return a random number between 0 and 1.

### Examples

```javascript
console.log(Math.round(8.4)) //8
console.log(Math.round(8.5)) //9

console.log(Math.ceil(4.2)) //5
console.log(Math.floor(4.9)) //4

console.log(Math.random()) //0.7099176926811621
```

## 6. Conditionals

Programs read data (input), process it, and return something. With **conditionals** you can have limitations to work with.

The syntax in JavaScript, and most languages, are `if...else`, ` switch...case` and with `ternary operators`.

The condition (parameters) must be written with [comparison operators](#comparison-operators). Each comparison will return `true` or `false`.

There are situations in which your program must analyze more than one condition. In that case, use [logical operators](#logical-operators) inside the parameter/condition slot. Example: `condition == true && condition == true` or `condition == true || condition != true`.

### if...else

The `if...else` conditions can be written in three different structures:

* Simple `if (condition == true){run}`;
* Composed `if (condition == true){run}... else{run}`;
* Multiple `if (condition == true){run}... else if{run}...else{run}`.

> Multiple conditions can have as many `else if` as necessary.

```javascript
let n1 = prompt("N1: ")
let n2 = prompt("N2: ")
let n3 = prompt("N3: ")
let n4 = prompt("N4: ")

let average = (n1 + n2 + n3 + n4) / 4

if (average >= 6){
    console.log("Approved!")
} else if (average == 5) {
    console.log("Need recovery")
} else {
    console.log("Disapproved")
}
```
### switch...case

Just another structure to make conditionals. Usable when you have a lot of options based on values of a variable, or when you need to return a different case for every value possible of a variable.

Basic example:

```javascript
let neighborhood = prompt("neighborhood: ")
let fee

switch (neighborhood) {
    case "center":
        fee = 5
    break

    case "fragata":
    case "caranda": 
        fee = 7 //Both (fragada and caranda) will return 7
    break

    case "elysee":
        fee = 10
    break

    default:
        fee = 8
}

console.log(fee)
```

### Ternary conditions

Simplified way to write contitionals. 

See [Conditional or Ternary operators" at Chapter 2](https://madpress.art/spellblog/posts/javascript-references.html#conditional-or-ternary-operators).

## 7. Repetitions (Loops)

Repetitions, or Loops, (`Laços de Repetição`, in Portuguese) allows you to run one or more commands in a program or function as many times you need.

Loops need *braking points* and can be used with Conditional (if...else/switch... case/break/continue).

### for

The `for` syntax is composed by 3 instructions `for (initialValue; conditional; incremental/decremental){command}`: 

```javascript
for (let i = 1; i <= 10; i = i + 1){command}
        ||          ||        ||
	\/          \/        \/
{INITIAL VALUE}{CONDITIONAL}{INCREMENTAL}

//This means that `i` starts as 1 and, and will run until it grows to 10, since each commands run, it grows by {INCREMENTAL/DECREMENTAL}, in that case 1.
```
> Incremental short: `i++`

The last instruction can also be decremental: `i = 1 -1` or `i--`

Example:

```javascript
let numbers = 0
for (let i = 1; i <=4; i++){
    numbers++
    console.log(numbers)
} //It will print numbers from 1 to 4.
```

Multiplication table example:

```javascript
let x = prompt("Number: ")

for (let i = 1;  i <=10; i++){
    let y = x * i
    console.log(x + " * " + i + " = " + y)
}
```

> [Run Multiplication Table on Replit](https://replit.com/@GuilhermePetry/multiplication-table)

#### Adding Conditional to for loops

```javascript
for (let i = 1; i <1= 10; i++){
	//command1
	//command2
	//command3
	if (i % 2 == 0){
		//command4
	}
}
``` 

### while

It tests the conditional before, to see if it will run the commands or not.

Examples:

```javascript
while (condition){
	command
} //While this condition is true, run {command}
```
```javascript
let x = prompt("Number: ")
while (x > 0) {
    console.log("Oi")
}
```

### do... while

It executes the command at least once, even if the condition is not true.

Examples:

```javascript
do {
	command
} while (condition);
```

```javascript
let x = 0;

do {
    x++;
    console.log(x)
} while (x < 10)
```

### break and continue

The `break` and `continue` are two commands that can be used inside JavaScript loops.

* `break`: jumps out of a loop.
* `continue`: jumps in the beginning of the loop.

```javascript
while (condition1) {
    commands
    if (condition2) {
        continue //It will test the condition and make the program continue in case of true.
    }
    commands
    if (condition3) {
        break //It breaks the loop, making the program ignore everything left inside the loop. If there is commands after the break, they will not be executed.
    }
    commands
}
commands
```

Example:

```javascript
do {
    const num = Number(prompt("Number: "))
    if (num == 0 || isNaN(num)){
        break
    } else {
        continue
    }
} while (true)
```

### Counters and accumulators

Counters and accumulators are ways to track how many times a particular action or event has occurred. They are commonly used inside loops to count the number of iterations (iteration is a lap made by the program inside a loop or code block).

However, counters and accumulators are commonly used inside loops, they can also be used outside of loops, to count occurrences of an event or action that occurs multiple times in the program.

In JavaScript, counters and accumulators need to be initiated, usually receiving the value of 0. Since they are used to count cycles, you need to know how many cycles (iterations) it has done already, that is why to start a counter with 0.

**Counters** represent `a variable = a variable + 1 (the count factor)`, **accumulators** represent `a variable = a variable + another variable`, and they can be written with the `+=` operator.

Counter example:

```javascript
let result = 0 //variable initiation
result = result + 1 //traditional way
result += 1 //with the += operator
``` 
Accumulator example:

```javascript
let result = 0 //variable initiation
result = result + price //traditional way
result += price //with the += operator
```

Loop with counter example:

```javascript
let counter = 0
for (let i = 0; i < 10; i++) {
  counter += 1
  console.log(counter)
}
```
## 8. Arrays

Different from variables, that hold only one data entry, arrays can hold many values. Its values can be the same as from the objects, *all the JavaScript things*.

> Arrays can be declared with `const` even when your values may be changed. What `const` can't handle being essentially reassigned.

```javascript
const arr = ["string1", "string2", 12] //Normal array of strings and number
const newArray = new Array("string1", "string2", 12) //Used as constructor.
```

Array values are counted starting from 0 (zero) and the values are selected with its index number. Example:

```javascript
const arr = ["string1", "string2", 12, 15, "string3"]

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])

//Value rewrite:
arr[0] = "NewValue"
```

### Array methods

* `arr.push()` adds one, or more, elements to the end of the array and returns the new array lenght.

```javascript
const arr = ["string1", "string2", 12, 15, "string3"]
arr.push("one or", "more", "elements")
```

* `arr.pop()` removes the last element of the array.

```javascript
const arr = ["string1", "string2", 12, 15, "pop this one"]
arr.pop()
```

* `arr.shift()` removes the first element of the array.

```javascript
const arr = ["shift this one", "string2", 12, 15, "pop this one"]
arr.shift()
```

* `arr.unshift()` adds one, or more, elements to the beginning of the array and returns the new array lenght.

```javascript
const arr = ["string1", "string2", 12, 15, "string3"]
arr.unshift("zero", "unshift", "test")
```

* `arr.splice()` used to remove and replace elements.

```javascript
const arr = ["string0", "string1", 2, 3, "remove 4", "remove 5"]
arr.splice(4, 2) //Start position, number of elements to delete


const arr = ["string0", "string1", 2, 3, "number this 4", "number this 5"]
arr.splice(4, 2, "quatro", "cinco") //Start position, number os elements to replace, replace value, replace value.
```

* `arr.slice()` select elements of an array in a new array.

```javascript
const arr = ["string0", "string1", 2, 3, "quatro", "cinco", 6, 7, 8, 9, 10]
arr.slice() //Copy the array
arr.slice(2, 6) // Select elements from index 2 to 6
```

* `arr.map()` expects a function as its argument. This function is then called for each element in the array.

```javascript
const arr = [0, 1, 2, 3, 4, 5]
const mappedArr = arr.map(plus)

function plus(value, index, arr) {return value + 1}
console.log(mappedArr)
```

* `arr.forEach()` used for repetition loops. Run commands in each element of the array and saves results in the same array.

```javascript
const arr = [0, 1, 2, 3, 4, 5]
arr.forEach(plusFunction)

function plusFunction(item, index, array) {
    console.log(item + 1);
}

//with arrow function
arr.forEach(item => {console.log(item + 1);})
```

#### Locating content inside a array

The methods `indexOf()`, `lastIndexOf()`, and `includes()` are used to locate content inside arrays.

```javascript
const arr = [0, 1, 2, 3, 4, 5]
arr.indexOf(3) // Returns the index of the first occurrence of 3
arr.lastIndexOf(3) // Returns the index of the last occurrence of 3
arr.includes(3) // Returns true if the array contains 3
```

### Array properties

* `arr.length` returns the number of elements.
* `arr.constructor` returns the constructor function that created it.
* `arr.prototype` don't really know, some cursed stuff.

## Node.js

JavaScript runs on browsers, as client side code. With Node.js you can run it as a server. 

> [Node.js](https://nodejs.org/).

### prompt-sync

[prompt-sync](https://github.com/heapwolf/prompt-sync) enables you to use `prompt` on the terminal.

> It requires Node.js.

Run `npm install prompt-sync`. This will install `node_modules` and `package.json`.

On your JavaScript file:

```javascript
const prompt = require("prompt-sync")();
let promptData = prompt("Data: ")
```
On the terminal, open the folder where your JavaScript file is and run:

`node <fileName>.js`

> [prompt-sync-template](https://github.com/petry078/prompt-sync-template)

<div class="wisdom">
<img class="wisdony" src="https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg" alt="">
</div>

<style>
  .wisdom {
    display: flex;
    justify-content: center;
  }

  .wisdony {
  height: 120px;
  }
</style>
