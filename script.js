 // Function in javascript
 // Q1- What is function declaration

//  function square(num){
//     return num*num;
    
//  }
// what is function expression- store inside the function variable called functin expression

// const square = function(num){
//     return num*num;
// }
// what is anonymous function- no function name

// Q3 - What are the First class Function
     // function are treated like  values .
     // you can store them, pass them return them
   
// ar x  = 21;

// var fun = function (){
//    console.log(x);
//    var x = 20;
   
// }; 

// fun();   //   function square(num){
   //      return num *num;
   //   }

   //   function displaySquare(fn){
   //      console.log("Square is" +fn(4));
        
   //   }
//   for (var i= 0; i < 5; i++){
//    setTimeout(function(){
//       console.log(i);
      
//    }, i*1000);
//   }


//  hoisting function

//---- Params vs Argument

// function multiply(num1, num2){ // params
   
//    console.log(num1*num2);
   
// }

// var arr = [5,7]

// multiply(...arr);


//----callback function

function greet(name, callback){
   console.log("hello" + name);
   callback();
   
}
function sayBye(){
   console.log("goodb");
}
greet("ritesh","kfjkg")

 

