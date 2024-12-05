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
    name: "js",
    age: 27
}

2 ways to use this object

1 dot-notation  => person.name
2 box-notation  => person['name']




Operators:

1 Arithmetic
+
-
*
/
%
**

a++ post increment
++a pre increment
a-- post decrement
--a pre decrement

a = 5
console(a++) 5
++a = 6




2 Assignment
X = X+1  X+=1
X = X-1 X-=1
X = X/1 X/=1

3 Comparion

< 
>
>=
<=
==   -> Loose Equality
!=
===     -> Strict Equality

Ternary Operators

condition ? "true" : "false"





4 Bitwise
5 Logical

and

condition1 && condition2 && condition3
t               t               t           = t
t               f               t           = f
f               f                  false    = false
or
condition1 || condition2 || condition3
t               t               t           = t
t               f               t           =  t
f               f                  false    = false
Not

true = false
false = true


falsey => Undefined, false, null, 0, " ", NaN
tuthy => Anything that is not falsey

(5 || undefine || 4)


BITWISE Operators

1. Bitwise AND
2. Bitwise or


AND
a   b   o/p
1   0   0
0   1   0
0   0   0
1   1   1


2 =  0010
5 =  0101
     0000

a   b   o/p
1   0   1
0   1   1
0   0   0
1   1   1

     0111


Control Statement

1. If-else-If
let age = 20
if(age<18){
     console.log("You are a Kid")
}elseif(age>18 && age < 50){
    console.log("You are a Adult")
}else{
     console.log("You are old")
}


Switch

Switch (conition){
     case 1:
     break
     case 2
     break
}

Loops in js => Loops are use to exicute a pice of Code again and again

for Loops

for(let i = 0; i <= n; i++){
     console.log(i)
}

infiite loop => A loop never end



while loop

let i = 0
while(condition){

i++
}


do while loop


do{

}while(condition)

Q. print all even Number from 1 to 100

Q.  Ce user to keep Guessing the game number until the user enter Correct Value?reate a game where you Start with random Number. Ask th

STRINGS IS A SEQUENCE OF CARACTER



let str = "Hello";
let str2 = 'Hello';


Temlpate litrels
let str4 = `Hello`


1. toUpperCase()
2. toLowerCase()
length()
3. trim()
3. slice()
4. concate()
5 replaceAll()\


hello
l,m replace-> hemlo, replacAll -> hemmo

Prompt the user to enter there full name. Generate a username for them based on the input. Start username with @, followed by ther fullname and end with the fullname length. 
Note: Ther should be no whiteSpace in between your full name

ex: AkashPaul
=: @AkashPaul9;

q. for a give array with marks of students ->[85,84,95,90,50]
Find the average marks of the class


Q. for a given array with price of 5 items ->[250,645,300,900,50]
All items have an offer of 10% OFF on them. Change the array to store final price after applying offers

Methods in Arrays

1 Push()
2. Pop()
3. toString()
4. concate()
5. slice()
6 splice() => splice(startIndex, delCount, newEl)

Create an array -> "microsoft", Uber, Google, IBM , Netflix
a. Remove the last item from array
b. remove google and IBM and add Bloomberg
c. Add Amazon at end.



Functions in JS

1. Function Defination                  Function Call

function functionName(){                functionName()
     ...// Perform some task
}



Q. Create a function using "function" keywrd that takes a string as an arguments and return the number of vowels in the string


For Each Loops

arr.forEach(callBack Function)


callBack Function : it is a function to execute for each element in the array


arr.forEach(()=>{
     ../ Your callBack task
})

Q. for a given array of a number print sq of each value using forEach loop


Q given a marks of a students. Filter out of marks of stuent that scored 90+,

q Take a number n as input from the user. Create an array of number from 1 to n.
use the reduce method to calculate sum ofall number in the array.
use the reduce method to calculate product of all number in the array.