# Neocoretex coding style

This document is the prefered standards for contributing to neocoretex.
Each PR should adhere to the standards listed here.

## Chapter 1 : Indentation

Unlike other languages `node js` is 2 spaces for indentation and the
same should be used throughout except for codes that are generated
using any other code generators. Remember 2 spaces doesnot mean setting
width of tab to 2 characters. In case of vim the following should explain

```
set tabstop=2
set softtabstop=2
set expandtab
```

For people using other editors add the same for your environment here.

## Chapter 2 : Whitespace

Under no circumstances should there be any trailing whitespace at the end
of any line.

## Chapter 3 : 80 Character rule

Just like unix standards the max length of a line is 80 characters to keep
code clean.

## Chapter 4 : Semicolons

Although javascript has no compultion on the use of semicolons but the same
should always be used at the end of lines.

## Chapter 5 : Single quotes

Unless writing json the right way for declaring is by using single quotes.

`Right way`

```
var foo = 'bar';
```

`Wrong way`

```
var foo = "bar";
```

## Chapter 6 : Braces

Opening braces always start on end of codition and not on next line with the
sole exception for functions.

## Chapter 7 : CamelCase

camelCase should be used for naming all functions and variables and should be
explanatory on the defination for the same. The sole exception of this rule
is temporary variables, that are private and not exposed in the global scope.

Constants are also an exception of this rule and should be completely in 
UPPERCASE.

## Chapter 8 : Equality operator

Always use triple equality operator `===` for comparision.

## Chapter 9 : Small functions

A `function` should never under any condition exceed 15 lines of code.

## Chapter 10 : Function return

Under no condition should a function have multiple returns. there should only
be one return at the end to avoid all confusion.

## Chapter 11 : Method chain

Method chain should be indented and always start from next line after object
declaration and not the same.

`Right way`

```
User
  .findOne()
  .prettyPrint();
```

`Wrong way`

```
User.findOne()
  .prettyPrint();
```

### Remarks

Although this document is not complete, it should be used as a base standard for
contributing. In case of a condition not listed here feel free to add a Pull
Request for the same.
