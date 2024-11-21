// firstName -> camel casing


// {
//     const a = 3
// }
// console.log(a)

// console.log("JS is working")

// a = 5
// console.log(++a)

// a = 5
// b = 10

// let ans1 = (++a) * (--b) //6*9 =54
// let ans2 = (a++) * (--b) //6*8 = 48                         7
// let ans3 = (a++) * (b--) //7*8 =56                                 8  7
// let ans4 = (++a) * (b--) //9*7= 63                                      6

// console.log(ans1)
// console.log(ans2)
// console.log(ans3)
// console.log(ans4)

// a = 5
// b = '5'
// console.log(a===b)

// let age = 15
// let status = (age > 18) ? "vote" : "Cannot vote"

// console.log(status)

// (Undefine || false || " " || 2 || NaN || 0)
// false || false || false || true || false || false


// 2
// let a = '1'
// let b = 1



// (5 || 2 || 0 || " " || "STRING" || undefined ||  0)


// (undefined || NaN || "String" || " ")

// (false || 0 || 2 || 5 || 10 || NaN)




// console.log("Alliance")
// console.log("Alliance")
// console.log("Alliance")
// console.log("Alliance")
// console.log("Alliance")\


// for(let i = 0; i<=5 ; i++){
//     console.log(i)
// }



// let i = 0;
// while(i<=5){
//     console.log(i)
//     i++
// }


// print even number 0 100


// for(let i = 0; i<=100; i++){
//     // 2.4.6.8.10
//     if(i%2 !== 0){
//         console.log("odd num = ",i)
//     }
// }


// let str = "Strings"

// let size = 0
// for(let val of str){
//     console.log(val)
//     size++
// }

// console.log("The length of string is ", size)


// let Student = {
//     name : "Rahul",
//     age: 20,
//     cgpa : 7.5,
//     isPass : true,
// }

// for(let key in Student){
//     console.log("key is = ",key, "Value = ", Student[key])
// }



// let gameNumber = 25;
// let guess = prompt("Guess the game Number")

// while(gameNumber != guess){
//     guess = prompt("Guess Again")
// }
// console.log("Congratulation u guess correct")



// let str = "MyString"

// let value = str.length


// let str1 = 'String'

// let Name ="     Rahul Kumar         Sharma      "
// let age = 20;
// console.log(Name)

// let status = "hello my name is " + Name + " and my age is "+ age;
// let Newstatus = `hello my name is ${Name}  and my age is  ${2+5+10}`
// Newstatus.toUpperCase()
// console.log(Newstatus)
// console.log(Upper)




//  toUpperCase()





// let randomNum = 44;

// let guessNum = prompt("Guess the number")
// while(guessNum != randomNum){
//     guessNum = prompt("wrong guess try again")
// }
// console.log("Your guess is correct")
// let a = "rahul"
// let str = `hello how are u all ${a} ${2*3*4*5}`
//  slice

// let str = "JavaScript"
// // console.log(str.slice(2,6))

// let str2 = "HTML"
// let str3 = "css"

// let newStr = str.concat(str2)
// console.log(newStr)
// console.log(str+str2+str3)


// let str = "Hellololololo"

// let newStr = str.replaceAll("lo", "mo")
// console.log(newStr)

let name = prompt("Give me your full name");

let newName = "@" + name + name.length;
console.log(newName)