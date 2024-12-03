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




Loops

for Loops

for(initilizion ; condition ; Updation){
    work to perform
}


while Loops

initilizion
while(condition){
    do some work

    updation
}

do while Loops

initilization;
do{
    do some work


    updation
}while(condition)

for of Loops

for(val of string)

for in Loops

for( let key in obj)



Print all Even number from 0 to 100?

if(CONDITION){
    this will work
}else{
    this will work
}




Create a Game where You Start with A random number. Ask the user to keep guessing the game Number untill they entered the Correct .


give the number

ASK FROM THE user

CHECK GIVEN NUM == ASK NUM

ASK AGAIN


PRINT 




String in JS

Create string

templatre Litrels

Q. Prompt the user to enter there full name. Generate a Username for them based on the input. Start userName with @, followed by there full name and ending with the fullname length? 


Q. for a give array with marks of students ->[85,84,95,90,50]
Find the average marks of the class

Q. for a given array with price of 5 items ->[250,645,300,900,50]
All items have an offer of 10% OFF on them. Change the array to store final price after applying offers


methods in Arrays
l. push()
2. pop()
3. toString
4. slice()
5 splice() => [1,2,3,4,5] => splice(startInd, delCount,newEle)




Functions in Js

1. Function Defination              Function Call

function functionName(){                functionName()
    // perform task
}



Q. Create a function using the "function" keyword that takes a string as an argument and return the number of vowels in the string




Q We are given array of marks of students. Filter out of marks of students that scored 90+,

Q Take a number n as input prompt. create an array of number from 1 to n, use the reduce Method to calculate sum of all number in tha array.
use the reduce methods to calculate product of all number in the array