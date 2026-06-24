 // Function in javascript
 // Q1- What is function declaration

const { useCallback } = require("react")

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

// let email = document.querySelector("#email");
// let password = document.querySelector("#password")
// let form =  document.querySelector("form")

// form.addEventListener("submit", function(dets){
//    dets.preventDefault();
//    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//    const passwordRegex =
// /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// let emailans = emailRegex.test(email.value);
// let passwordand = passwordRegex.test(password.value);

// if(!emailans){
//    document.querySelector("#emailError").textContent = "Eimail is incorrect";
//    document.querySelector("#emailError").computedStyleMap.display = "intial";
// }

// if(!password){
//    document.querySelector("#passwordError").textContent = "password is incorrect";
//    document.querySelector("#password").computedStyleMap.display = "intial";
// }

// })


//  let count =  20;

// let intver =   setInterval(function(){
//   if(count>=1){ 
//    count--;
//    console.log(count);
//   }
//   else
//    clearInterval(intver);
//  },1000)
 

// let count =  0;

// let progress  = document.querySelector("#progressBar");

// setInterval(function(){
//    if(count<99){
//       count++;
//       progress.computedStyleMap.width = `${count}%`;
//    }
// }, 30);/

// localStorage.setItem("name", "rites");

// const users = [
//   {
//     name: "Chhoti Gupta",
//     pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
//     bio: "Main character energy"
//   },
//   {
//     name: "Vicky Sharma",
//     pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
//     bio: "Coffee, code, repeat."
//   },
//   {
//     name: "Priya Singh",
//     pic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500",
//     bio: "Living life one adventure at a time."
//   },
//   {
//     name: "Rahul Verma",
//     pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
//     bio: "Dream big, work hard."
//   },
//   {
//     name: "Anjali Patel",
//     pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500",
//     bio: "Creating my own sunshine."
//   },
//   {
//     name: "Aman Yadav",
//     pic: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=500",
//     bio: "Focused on growth and goals."
//   },
//   {
//     name: "Neha Kapoor",
//     pic: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500",
//     bio: "Smile more, worry less."
//   },
//   {
//     name: "Rohan Mishra",
//     pic: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=500",
//     bio: "Building cool things on the internet."
//   },
//   {
//     name: "Simran Kaur",
//     pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500",
//     bio: "Fashion, travel, and good vibes."
//   },
//   {
//     name: "Arjun Mehta",
//     pic: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=500",
//     bio: "Always learning something new."
//   }

// ];
// function showUswer(arr){
//    const container = document.querySelector(".flex.gap-10");

// users.forEach(user => {
//     const card = document.createElement("div");
//     card.classList.add("card");

//     const img = document.createElement("img");
//     img.src = user.pic;
//     img.alt = user.name;
//     img.classList.add("bh-img");

//     const blur = document.createElement("div");
//     blur.classList.add("blurred");

//     const content = document.createElement("div");
//     content.classList.add("content");

//     const h3 = document.createElement("h3");
//     h3.textContent = user.name;

//     const p = document.createElement("p");
//     p.textContent = user.bio;

//     content.appendChild(h3);
//     content.appendChild(p);

//     card.appendChild(img);
//     card.appendChild(blur);
//     card.appendChild(content);

//     container.appendChild(card);
// });
// }

// method ke andar
// let obj = {
//      name: "ritesh",
//      age: "67",

//      sayName: function (){
//       console.log(this.age);
      
//      }

// }
// obj.sayName ();

// // event handler
// document.querySelector("h1").addEventListener("click",
//   function () {
//     console.log((this.style.color = "red"));
    
//   });
// global- window
// function - window,
// method with es5 fnc - object
// method with es6 arrow fnc - window
// arrow function inside es5 method - window

// call applly bind
// functin ko call krte waqk app set kr skte hai
 //ho ki uski this ki value hya hogi

//  let obj  = {
//   name: "hdfwnv",
//   age: "f45"
//  };

//  function abcd(){
//   console.log(this.age);
  
//  }
//  abcd.call(obj);

// class CreatePencil {
//    constructor(name, company, price, color){
//       this.name = name;
//       this.company = company;
//       this.price = price;
//       this.color = color;
//    }
//    write(text){
//       let h1 = document.createElement("h1");
//       h1.textContent = text;
//       h1.style.color = this.color;
//       document.body.appendChild(h1);
//    }
// }

// let p1 = new CreatePencil("nataraj", "natraj", 10, "black");
// let p2 = new CreatePencil("apsra", "apsra",15,"blue");


// class Admin extend User{
//    constructor(name, PaymentAddress, username, email, role){
//       this.name = neme;
//       this.address = address;
//       this.username = username;
//       this.email = email;
//       this.role = role;
//    }
//    write(text){
//       let h1 = document.createElement("h1");
//       h1.textContent = `${this.name} : ${text}`;
//       document.body.appendChild(h1);
//    }

// }
// class Admin extend User{
//    constructor(name, address, username, email, role){
//       super(name, address, username, email, role);
//    }
// }
// let u1 = new User("ritesh", "bhiopal", "asyc123", "user");
// let u2 = new User(
//     "harshita",
//     "delhi",
//     "bdsfkjnkbajs",

// );
 

// koi bhi code js mein line by. line chalega aur ye natural pattern bhi hota hai ki code line by line 
// chale , but kabhi kababar aise cases aate hai lofe  mein jagha par aapka code 
// wait krta hai and utni der mein agla code jaata hai


// function kuchDerBaadChalega(val){
//    setTimeout(() =>{
//       console.log(val);
      
//    }, Math.floor(Math.random()*10));

// }
// kuchDerBaadChalega(12);


// ek function ko agar app ek functin bhej de rahe hai ho parameter mein, to parameter walaa fnc kehlataa
 //hai useCallback

//  function profilelekar(usernsme, cb){
//    setTimeout(()=>{
//       console.log(`profile fetch of user ${usernsme}`);
      
//    },2000)
//  }
//  profilelekar("harsh", function() {})

// function profilelekar(username, cb){
//    setTimeout(() => {
//       console.log(`profile fetch of user ${username}`);
//       cb();
//    }, 2000);
// }

// profilelekar("harsh", function() {
//    console.log("Callback executed");
// });

let pr = new Promise(function (res, rej) {
   setTimeout(() => {
      let rn = Math.floor(Math.random() * 10);

      if (rn > 5) {
         res(`resolved with ${rn}`);
      } else {
         rej(`rejected with ${rn}`);
      }
   }, 3000);
});

pr.then((val) => {
   console.log(val);
}).catch((val) => {
   console.log(val);
});