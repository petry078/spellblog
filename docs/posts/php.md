---
title: PHP
date: "2024-02-26"
sidebar: auto
tags:
  - PHP
---

# PHP

{introduction}

PHP demands the `<?php` to initialize the file and `;` in the end of the command (line).

```php
<?php

echo "Hello, world!";
```

## Variables

It is not necessary to declare the data type.

```php
$variableName = <data>;
$name = "Guilherme";
$age = 666;

//print variable:
echo $age;
```

## Operators

### Arithmetic operators

| Operator   | Description                    |
|------------|--------------------------------|
| `+`        | Addition.                      |
| `-`        | Subtraction.                   |
| `*`        | Multiplication.                |
| `/`        | Division.                      |
| `%`        | Modulus (Remainder).           |
| `**`       | Exponentiation (PHP 5.6+).     |

### Assignment operators

| Operator   | Description                                |
|------------|--------------------------------------------|
| `=`        | Assignment.                                |
| `+=`       | Addition assignment.                       |
| `-=`       | Subtraction assignment.                    |
| `*=`       | Multiplication assignment.                 |
| `/=`       | Division assignment.                       |
| `%=`       | Modulus assignment.                        |
| `.=`       | Concatenation assignment (for strings).    |
| `**=`      | Exponentiation assignment (PHP 7.6+).      |

### Comparision operators

| Operator   | Description                        |
|------------|------------------------------------|
| `==`       | Equal to.                          |
| `===`      | Identical to.                      |
| `!=`       | Not equal to.                      |
| `!==`      | Not identical to.                  |
| `>`        | Greater than.                      |
| `<`        | Less than.                         |
| `>=`       | Greater than or equal to.          |
| `<=`       | Less than or equal to.             |
| `<=>`      | Spaceship (Combined comparison).   |
| `??`       | Null coalescing operator (PHP 7+). |

### Logical operators

| Operator      | Description    |
|---------------|----------------|
| `&&` or `and` | Logical AND.   |
| `||` or `or`  | Logical OR.    |
| `!` or `not`  | Logical NOT.   |
| `xor`         | Logical XOR.   |

> The `xor` operator return `true` if at least one operand is true.

### Bitwise operators

| Operator   | Description    |
|------------|----------------|
| `&`        | Bitwise AND.   |
| `\|`       | Bitwise OR.    |
| `^`        | Bitwise XOR.   |
| `~`        | Bitwise NOT.   |
| `<<`       | Left shift.    |
| `>>`       | Right shift.   |

### Increment/Decrement operators

| Operator   | Description    |
|------------|----------------|
| `++`       | Increment.     |
| `--`       | Decrement.     |

### String operator

| Operator   | Description                                        |
|------------|----------------------------------------------------|
| `.=`       | Concatenation assignment (for strings).            |

### Array operators

| Operator   | Description                          |
|------------|--------------------------------------|
| `+`        | Union.                               |
| `==`       | Equality.                            |
| `===`      | Identity.                            |
| `!=`       | Inequality.                          |
| `!==`      | Non-identity.                        |

### Type operator

| Operator     | Description                    |
|--------------|--------------------------------|
| `instanceof` | Type of (Type Operator).       |

