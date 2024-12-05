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


// a= 5
// b = '5'
// console.log(a===b)

// console.log((5<4) ? "Sovit": "Akash")

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


// for(let val of str){
//     console.log(val)
    
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
// Name.trim()
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

// let name = prompt("Give me your full name");

// let newName = "@" + name + name.length;
// console.log(newName)


// Arrays

// let name = {
//     std : 98,
//     std2:95,
//     std3:90,
//     std4:98
// }

// let marks = [98,96,92,98,99]
// // marks[0]
// // marks[1]
// // marks[2]

// for(let i=0;i<marks.length;i++){
//     console.log(marks[i]);
// }


// let heros = ["ironMan", "Batman", "Hulk", "Spiderman", "ShaktiMan"]
// for(let hero of heros){
//     console.log(hero.toUpperCase())
// }


// let marks = [85,84,95,90,50]
// let sum = 0
// for(let val of marks){
//     sum = sum + val
// }

// let avg = sum /marks.length;
// console.log(`Avg marks of the class is ${avg}`)

// for a given array with price of 5 items ->[250,645,300,900,50]
// // All items have an offer of 10% OFF on them. Change the array to store final price after applying offers
// let items = [250,645,300,900,50]
// let i = 0;

// for(let val of items){
//     let offer = val / 10;
//     items[i] -= offer 
//     console.log(items[i])
//     i++
// }



// for(let i =0; i<items.length; i++){
//     let offer = items[i]/10;
//     items[i] -= offer
// }
// console.log(items)

// let arr = [23,76,88,34,66]
// let arr2


// console.log(arr.toString())
// arr.push(70)
// console.log(arr)
// let del = arr.pop()
// // console.log(del)

// let marvel = ["thor", "ironman", "captain America"]
// let dc = ["Superman", "AquaMan"]

// let heros = marvel.concat(dc.concat(num))
// console.log(heros)

let num = [23,33,44,55,66,7,88,99]

// num.splice(2,3,4,5,6)
// num.splice(2,3)
// num.splice(2,0,50)


// console.log(num.slice(2,6))

// create a array to store items -> "Uber", "Google", "Netflix", "L&T", "Microsoft", "IBM"

// Remove the last item from array
// remove netflix & L&T and add "Bloomberg"
// Add Amazon at the end

// let com = ["Uber", "Google", "Netflix", "L&T", "Microsoft", "IBM"]
// com.pop()
// console.log("Remove last",com)
// com.splice(2,2,"Bloomberg")
// com.push("Amz")

// console.log(com);


// Function

// function myFunction(msg){
//     console.log(msg)
    
// }
// myFunction(232)

// myFunction()
// myFunction()
// myFunction()

// function myAddition(x , y){  // parameters
//    return x+y // arguments
// }

// let mul = myAddition(2,5)

// Create a function using the "function" keyword that takes a string as an argument and return the number of vowels in the string

// function vowels(str){

//     let count = 0
//     for(let char of str){
//         if(
//             char ==="a" || char === "e" || char === "i" || char ==="o" || char === "u"
//         ){
//             count++
//         }
//     }
//     console.log(count)
// }


// vowels("aabecid")


// Map Filter Reduce



//  Map => map creates a new array with the result of some operation.



// let newArr = arr.map((val)=>{
    // return val*val
    // })
    // console.log(arr)
    // console.log(newArr)
    
    
    // Filter
    // it also create a new array of element that give  true or condition
    
    
    // let newArr = arr.filter((val)=>{
        //     return val%2 == 0
        // })
        // console.log(arr)
        // console.log(newArr)
        
// reduce=> perform some operation & reduce the arr to a single value


        // let arr = [1,2,302,4,5,6,7,8,9,10]

        let addition = arr.reduce((prev,curr)=>{
            return prev > curr? prev:curr
        })
        console.log(addition)