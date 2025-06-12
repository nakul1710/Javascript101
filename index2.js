//console.log("Hello World!")
// This  is single line comment


/*this code print 
hello world in our consolewindow.*/

//operators

//Artimetic operation

// let a = 4;
// let b = 3;

// console.log("a + b =",a+b);
// console.log("b - a =",b-a)
// console.log("a % b=",a%b);


//Unary operator

// console.log("a = ",a,"&b = ",b);
// console.log("++a =", ++a);
// console.log("a++ =",a++);
// console.log("a = ",a);
// console.log("--a =",--a);
// console.log("a-- =",a--);


//Assisnment opeator

// a += 4;
// console.log("a =",a);
// a -= 4;
// console.log("a =",a);
// a *= 4;
// console.log("a =",a);
// a /= 4;
// console.log("a =",a);
// a **= 4 // exponential of a^4
// console.log("a =",a);


//compaision operators

//console.log("a == b",a==b); // true
//console.log("a != b",a!=b); // false
//if a is a string = "3" then a = b
//console.log("a === b", a===b); // false so compare datatypes
//console.log("a !== b", a!==b); //true 
//console.log("4 >= 3",a > b);


//Logical operators : and, or & not

//let cond1 = a > b; // true
//let cond2 = b > a; // false

//console.log("cond1 && cond2", cond1 && cond2);
//console.log("cond1 || cond2", cond1 || cond2);
//console.log("cond1 || cond2", !(cond1 || cond2));


// conditional statements


//if-statements
// let mode = "dark";
// let color;

// if(mode = "dark"){
//     color = "white";
// }

// if(mode = "white"){
//     color = "white";
// }

// console.log(color);

//if-else statements

// let mode = "light";
// let color;

// if(mode = "dark"){
//     color = "white"
// }
// else{
//     color: "dark"
// }

// console.log(color);

//even-odd statements

// let num = 10;

// if(num%2 === 0){
//     console.log("num",num ,"is even");
// }else{
//     console.log("num",num, "is odd");
// }


//else-if statements

// let mode = "green";
// let color;

// if(mode === "dark"){
//     color = "black";
// } else if(mode === "blue"){
//     color = "yellow";
// }else if(mode === "yellow"){
//     color = "blue";
// }else{
//     color = "white";
// }
// console.log(color);



//Ternary operator:

//condition ? true output : false output

//let age = 22;
// let result =  age > 18 ? "adult" : "not adult";

// console.log(result);

//age >=18 ? console.log("adult"): console.log("not adult");




//practice questions

// let num = prompt("Enter a number:");

// if(num%5 === 0){
//     console.log("num",num,"is a multiple of 5");
// }else {
//     console.log("num",num,"not a multiple of 5");
// }


let score = prompt("Enter number between 0 - 100:");
let grade;

if(score>= 80 && score<=100){
    grade = "A";
}else if(score >=70 && score<=79){
    grade = "B";
}else if(score>=60 && score<=69){
    grade = "C";
}else if(score>50 && score<=59){
    grade = "D";
}else{
    grade = "F";
}

console.log("your grade is",grade);



















