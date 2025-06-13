//loops: piece of code executed again & again

// for(let i=1; i <= 5; i++){
// console.log("Apna College");
// }

// console.log("Loop has ended")


//calculate 1 to 5

// let sum = 0;
// for(let i=1; i<=5; i++){
//     sum = sum + i;
// }
// console.log("sum = ",sum);


//loops in js
//infinite loops

// for(i=1; i>=0; i++ ){
//    console.log("Hello Javascript");
// }


// let sum = 0;
// let n = 10;
// for(i=1; i<=n; i++){
//     sum = sum + i;
// }
// console.log("sum =",sum);



//while loops

// let i = 0;
// while(i<=5){
//   console.log("i =",i);
//   i++;
// }


// do-while loop

// let i = 1;
// do{
//    console.log("i =",i);
//    i++;
// }while( i<= 5);

//for-of loop
// let str = "London";
// let size = 0;
// for (let i of str){
//     console.log(i);
//     size++;
// }

// console.log("String size = ",size);

//for in loop

// let student = {
//     name : "Nakul Yadav",
//     age: 20,
//     cgpa: 8.2,
//     isPass: true
// };

// for(let key in student){
//     console.log("key =",key,"value =",student[key]);
// }


//practice questions

//q1)print all even numbers from 0-100

// for (let num = 0; num<=100; num++){
//     if(num%2 == 0){
//         console.log("Num = ",num);
//     }
// }


//q2)

// let gameNum = 25;
// let userNum = prompt("Enter the game Number: ");

// while(userNum !== gameNum){
//     console.log("you entered wrong game number");
// }
// console.log("Congratulations , you entered right number");



//strings: sequence of chracters  used to represent text.

// let str = "ApnaCollege";
// let str2 = "college";

// console.log((str+str2).length);
// console.log(str[4]);


//template literals : way to embedded expressions by back tick.

// let specialString = `This is template string`;
// console.log(typeof specialString);



// let obj = {
//     item : 'pen',
//     price: '100',
// }

// console.log("The cost of",obj.item,"is",obj.price);
// console.log(`The cost of ${obj.item} is ${obj.price} rupees`);


console.log("Nakul\nYadav"); //next line
console.log("Nakul\tYadav"); //tab space

let str = "nakul\nyadav";
let str2 = "nakul\tyadav";

console.log(str.length);
console.log(str2.length);















