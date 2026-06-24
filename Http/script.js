fetch("https://randomuser.me/api")
.then((rawdata) =>{
   return rawdata.json();
    
})

.then((data) =>{
    console.log(data);
    

})
 .catch((err)=>{
    console.log(err);
    
 })