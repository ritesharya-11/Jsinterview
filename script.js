 // Function in javascript
 // Q1- What is function declaration

 function square(num){
    return num*num;
    
 }
// what is function expression- store inside the function variable called functin expression

const square = function(num){
    return num*num;
}
// what is anonymous function- no function name

// Q3 - What are the First class Function
     // function are treated like  values .
     // you can store them, pass them return them
   
     function square(num){
        return num *num;
     }

     function displaySquare(fn){
        console.log("Square is" +fn(4));
        
     }

     displaySquare(square)


 

