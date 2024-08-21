/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
//function addTwoNumbers(a, b) {
   // code block

   //return a + b
//}

//let sum = addTwoNumbers(5,5)
//console.log(sum)

// Arrow Function With Parameters
//const addTwoNumbers = (a, b) => {
    // code block
 
    //return a + b
// /}
 
 //let sum = addTwoNumbers(7,5)
 //console.log(sum)

// Single Line Arrow Function With Parameters

//const addTwoNumbers = (a,b) => a + b;
//let sum = addTwoNumbers(6,5)
//console.log(sum)

// Implicit Returns

//const saySomthing = message => console.log(message)
//saySomthing("Hello!!");

const sayHello =  () => console.log("Hello")
sayHello();

// Returning Multiple Lines

const returnMultipleLines = () => (

   `<p>
        Hello
    </p>`
)
console.log(returnMultipleLines());
