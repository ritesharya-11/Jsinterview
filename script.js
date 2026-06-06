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

// function greet(name, callback){
//    console.log("hello" + name);
//    callback();
   
// }
// function sayBye(){
//    console.log("goodb");
// }
// greet("ritesh","kfjkg")
// let h1 =  document.createElement("1")
// console.log(h1);

// let p = document.querySelector("p")

// p.addEventListener("dblclick",function(){
//    p.style.color= "pink"
// })/


// let inp = document.querySelector("input");

// inp.addEventListener("input", function(dets){
//    if(dets.data !== null){
//       console.log(dets.data);
      
//    }
// })

//change event tab chalta hai jab apka input select ya text area me change hojaye

// let sel = document.querySelector("select");
//    let device = document.querySelector("#device");

// sel.addEventListener("select" ,function(dets){
//    device.textContent= $`{dets.target.value} Device Selected`;
   

// })
// let nm  = document.querySelector("#name");
// let form = document.querySelector("form");


// form.addEventListener("summit", function (dets){
//    dets.preventDefault();

//    if(nm.value.lenght <= 2){
//       document.querySelector("#hide").style.display = "initial";

//    }
// });

let email = document.querySelector("#email");
let password = document.querySelector("#password")
let form =  document.querySelector("form")

form.addEventListener("submit", function(dets){
   dets.preventDefault();
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   const passwordRegex =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

let emailans = emailRegex.test(email.value);
let passwordand = passwordRegex.test(password.value);

if(!emailans){
   document.querySelector("#emailError").textContent = "Eimail is incorrect";
   document.querySelector("#emailError").computedStyleMap.display = "intial";
}

if(!password){
   document.querySelector("#passwordError").textContent = "password is incorrect";
   document.querySelector("#password").computedStyleMap.display = "intial";
}

})


 

