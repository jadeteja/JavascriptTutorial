// primitive (call by value) Call by Value passes a copy of the variable . Call by Reference passes the variable itself 
// 7 types: String, Number, Boolean, null (null means empty), undefined, Symbol (used to make a value unique), BigInt
// Reference (Non primitive)


//JavaScript is a dynamic language, not static. This means that variables in JavaScript can store different types of values during runtime, and developers don't need to explicitly declare a variable's data type.

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
const id = Symbol('123');
const anotherId = Symbol('123');

const bigNumber = 23432255643n;

console.log(id === anotherId)

//Reference datatypes are: Array, Objects, Functions

const arr = ["Jade","Teja","Hello"]
let myObj = {
    name: "Teja",
    age: 20
}
const myFunction = function (){
    console.log("Hello");    // In javascript functions are stored inside the variables
}

console.log(typeof(anotherId));
