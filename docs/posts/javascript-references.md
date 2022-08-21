---
title: JavaScript references
date: "2022-08-20"
sidebar: auto
tags:
  - javascript
  - reference
  - guide
---

# JavaScript reference

## Primitive Data Types

* number;
	* infinity;
	* NaN;
* string;
* boolean;
* null;
* undefined;
* object;
	* array;
* function.

Use `typeof varName` to reveal data type of element.

### Number verification

`console.log(Number.isInteger(12))` will check if number it is floating-point number.

### String to number

* `Number(varName)` coverts to number; 

or (old way):

* `Number.parseInt(varName)` coverts to whole number; 
* `Number.parseFloat(varName)` converts to floating-point number.

### Number to string

* `String(varName)`.

### Template strings

```javascript
console.log(`Name: ${name};`)
console.logNum(`Surname: ${surname}.`)
```

### String formatting

```javascript
var jsString = "JavaScript";
console.log(jsString.toUpperCase());
console.log(jsString.toLowerCase());

var jsStringLenght = jsString.length
console.log(jsStringLenght)
```
## Operators

* Arithmetic (Aritiméticos);
* Assignment (Atribuição);
* Comparison (Relacionais);
* Logical (Lógicos);
* Conditional or Ternary (Condicional ou Ternário).

Precedence order:
1. Arithmetic;
2. Comparison;
3. Logical.

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

| Operator  | Function       | Example                            |
|-----------|----------------|------------------------------------| 
|     !     | Not (negação)  | `(x < 10 && y > 1)` // true  	  |
|    &&     | And (conjunção)| `(x == 5 || y == 5)` // false      |
|    ||     | Or  (disjunção)| `!(x == y)` // true	          |

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
