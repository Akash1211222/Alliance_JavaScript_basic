// let a = 5;
// let b = 10;
// console.log(a+b);


// let var const

// very imp or fav que for interviewer
// difference between let var const?


// let

// let a = 5
// let a = 10
// let b = "Akash"
// b = 20
// let c = 1.5
// c = false
// let d = true
// d = "JAVA"

// var a = 5
// var a = 10
// var b = "Akash"
// b = 20
// var c = 1.5
// var d = true
// d = "Akash"


// const a = 5
// a = 10
// const b = "Akash"
// const c = 1.5
// const d = true

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)


// {
//     const a = 10
// }
// console.log(a)

// let z
// console.log(z);


// let a = null
// let b = 0;


// let car = {
//     name : "bmw",
//     wheels: 4,
//     color: "red",
//     model: 2008,
// }


// let a = 5 // 6
// let b = 10  // 9 8
// let ans1 = (++a) * (--b) //54
// let ans2 = (a++) * (--b) // 48            a = 7 b = 8
// let ans3 = (a++) * (b--) // 7*8                  a =8 b = 7
// let ans4 = (++a) * (b--) //9* 7             b   8

// console.log(ans1)
// console.log(ans2)
// console.log(ans3)
// console.log(ans4)



// a = 5
// b = '5'
// console.log(a===b)  loose equality  & strict equality

// let age = 15
// let status = (age >= 18) ? "I can Vote" : "I cannot vote"

// console.log(status)





// let a = "1"
// let b = 1;

// (a==b)?"print num" : "dont print"


// console.log("Alliance University")
// console.log("Alliance University")

// let n = 50
// for(let i = 0; i <= n; i++){
//      console.log(i)
// }
// console.log("the value of i = ",i)


// for(let i=1; i>=0; i++){
//     console.log(i)
// }


// let i = 1;
// while(i<=10){
//     console.log("Akash");
//     i++;
// }



// for(let i =1; i<=100; i++){
//     if(i%2 == 0){
//         console.log(i)
//     }
// }


// let gameNumber = 25

// let guessNumber = prompt("guess the number");
// // console.log(guessNumber)

// while(gameNumber != guessNumber){
//     guessNumber = prompt("You entered wrong number");

// }
// console.log("Congratultion")


// let str = "Hello"

// console.log(str[0])
// console.log(str[1])
// console.log(str[2])
// console.log(str[3])
// console.log(str[4])

// let marvel = "thor"
// let marvel2 = "Ironman"
// let marvel3 = "Spiderman"
// let ans = marvel.replace('h','p')
// console.log(ans)
// console.log(marvel)



// console.log(marvel+marvel2+marvel3)
// console.log(marvel.concat(marvel2.concat(marvel3)))

// console.log(name.slice(1,7))
// let age = "27"
// let para = "Hello my name is "+ name + " and my age is "+ age +" .";

// let para2 = `Hello my name is  ${name}  and my age is  ${age} and my  calculation is ${3*4+66*8}`
// console.log(para)
// console.log(para2)


// let name  = prompt("Full Name");
// let len = name.length;

// let para = "@" + name +len
// console.log(para)



// Arrays

// Collection of items


// let marks ={
//     std1 : 98,
//     std2 : 95,
//     std3 : 90,
//     std4 : 88
// }

// let markss = [98,95,90,88]
// markss[0]
// markss[1]
// markss[2]

// for(let i = 0;i<markss.length;i++){
//     console.log(markss[i])
// }

// let heroes = ["ironman", "Captain America", "Spiderman", "Thor", "ShaktiMan"]

// for(hero of heroes){
//     console.log(hero.toUpperCase())
// }


// let marks  = [85,84,95,90,50]

// let sum = 0

// for(let val of marks){
//     sum = sum + val
//      0 = 0 + 85
//      85 = 85 +84
// }
// console.log(sum)

// let avg = sum / marks.length

// console.log(avg)

// for a given array with price of 5 items ->[250,645,300,900,50]
// All items have an offer of 10% OFF on them. Change the array to store final price after applying offers

// let items = [250,645,300,900,50]
// let i = 0;
// for(let val of items){
//     let offer = val / 10
//     items[i] -= offer
//     console.log(items[i])
//     i++
// }




// // console.log(items)
// for(let i=0; i<items.length; i++){
//     let offer = items[i]/10
//     items[i] -= offer
// }
// console.log(items)

// let items = [250,645,300,900,50]
// items.push(10)
// let del = items.pop()
// let str = items.toString()

// let marvel = ["Spiderman", "IronMan", "Thor"]
// marvel.splice(0,0,"chota")

// let dc = ["Batman", "Aquaman"]
// let num = [1,2,3,4,5,6,7,8]
// num.splice(3,4,44,55,66,77)



// let newNum = num.slice(3,7)

// let hero = marvel.concat(dc.concat(num))
// console.log(hero)


// Create an array -> "microsoft", Uber, Google, IBM , Netflix
// a. Remove the last item from array
// b. remove google and IBM and add Bloomberg
// c. Add Amazon at end.
// let array1=["microsoft","uber","google","IBM","netflix"]
// array1.pop()
// console.log(array1)
// array1.push("amazon")
// console.log(array1)

// let brand=["microsoft","uber","google","IBM","netflix"]
// brand.pop()
// console.log(brand)
// brand.splice(2,2,"skullcandy")
// console.log(brand)
// brand.push("amazon")
// console.log(brand)




// function printHello(msg){ // parametrs
//     console.log(msg)
//     console.log(msg)
//     console.log(msg)
//     console.log(msg)
//     console.log(msg)
// }

// printHello(25) // arguments
// printHello("Hello devloper")



// const arrow = ()=>{
//     return 2 * 5
// }

// arrow = 6


// let myAdd = add("Hello",25)
// console.log(myAdd)


// Q. Create a function using "function" keywrd that takes a string as an arguments and return the number of vowels in the string

//  const newValue = (str)=>{
//     let count = 0
//     for(let char of str){
//        if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
//         count++
//        }
//     }
//     return count
// }

// console.log(newValue("hello EveryOne"))                                                   

// function double(a){
//     a*2
// }

// let arr = [1,2,3,4,5]
// arr.forEach( (val)=>{
//     console.log(val)
// })



// function abc(){
//     console.log("Hello")
// }


// function myFunc(abc){
//     return abc
// }

// let arr = ["pune", "mumbai", "delhi"]

// arr.forEach((val,idx,arr)=>{
//     console.log(val.toUpperCase(),idx,arr)
// })

// const arr=[2,5,9,13,11]
// arr.forEach((ele)=>{
//      console.log(ele**2)

// })

// Map Filter Reduce

// Map=> it is similar to forEach the only difference is it create a new array with the resultof some operation


// let arr1= [2,3,4,5]


// let newarr = arr1.map((val)=>{
//     return val *2
// })
// console.log(newarr)


// Filter

//  this will also create a new array of elements that give true for a condition

// let arr = [1,2,3,4,5,6,7,8,9,10]

// let newArr = arr.filter((val)=>{
//     return val %2 ===0
// })
// console.log(newArr)

// reduce

// Perform some operation and reduce the array to a single value

// let arr = [1,2,3,4,5]
// let newArr = arr.reduce((prev, curr)=>{
//     return prev + curr
// })

// console.log(newArr)

// . for a given array of a number print sq of each value using forEach loop


// Q given a marks of a students. Filter out of marks of stuent that scored 90+,
// let marks = [88,90,94,95,67,78];
// let FilteredMarks = marks.filter((val)=>{
//     return val>90;
// });
// console.log(FilteredMarks);



// q Take a number n as input from the user. Create an array of number from 1 to n.
// use the reduce method to calculate sum ofall number in the array.
// use the reduce method to calculate product of all number in the array.

// let n = parseInt(prompt())
// let arr = []
// for(let i =1;i<n+1;i++){
//     arr.push(i)
// }

// let sumOfArr = arr.reduce((prev,curr) => prev += curr )
// let mulOfArr = arr.reduce((prev,curr) => prev *= curr )

// console.log(arr,sumOfArr,mulOfArr)
