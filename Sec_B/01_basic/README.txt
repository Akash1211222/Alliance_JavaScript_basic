what we can do with JS?
=> web-page, mobile App, game Devlopment etc.

Q2. Do we ned Compiler to execute the JS?
=>NO, we ned js Engine to run the js.

sublimetext




Variable

var = we can reassine as well as we can redeclare. and it is a global scope
let = we can reassine but we cannot redeclare. and it is a block scope or functional scope
const = we cannot reassign and redeclare, this is a block scope

var a = 20
var a = 30

let a = 20
a = 30

const a = 20


Variables rules
1. it cannot be name as any keywords
2. variables should containt some meaning
3. we cannot use white spaces => let firtNameIs = 

let a = 20, b = 30
let a = 20
let b = 30


PRIMITIVE TYPES:

1 String  let a = "Strings";
2 Number  let b = 67
3 Boolean   let c = true/false
4 Undefined  let z,
5 null



JS is Dynamic Typing

let a = 20
a = "Akash"



REFerence TYPES

1 object   
2 Arrays   let arr =[23,"string", true, 1.23]
arr[0]= 23
arr[4]=787
3 Functions


let person = {
    name: "js"
    age: 27
}

2 ways to use this object

1 dot-notation  => person.name
2 box-notation  => person['name']



Operators:

1. Arithmatic : +,- *, / % **
2. Assignment

x = x+1   x+=1
x = x-1     x-=1

3. Comparison
<,
>,==, !==, ===
4. Bitwise
6. Logical




pre increment
post increment
per decrement
post decrement

a = 5
(a--)

Assignment

x += 2
x -= 3
x/= 2

Comparison

<
>
>=
<=
===  -> strict equality
==  -> loose equality
!==


Ternary Operators

condition ? (True) : (false);



Logical Operators

1. AND  &

    con1 && con2 && con3
    t       t       T   =t
    t       F       T   =F
    F       F       F   = F

    0  1 0
    1  0 0
    1   1 1
    0   0 0

2. OR  ||

        con1 || con2 || CON3  =  
        T       F          T  =t
        F       T           F  = T
        F       F           T  = T
        T       T           T   T


        0   1   1
        1   0   1
        0   0   0
        1   1   1



3. NOT  !
TRUE = FALSE




Falsey  aND TRUTHY


Falsey -> undefine , null , 0 , false , ' ' , NaN

Truthy -> anything that is not falsey.

