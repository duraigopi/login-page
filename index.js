var names=document.getElementById("username");
var password=document.getElementById("pass");
const checkdetails=(e)=>{
    event.preventDefault();
    if(names.value.length===0)
    {
        alert("Please Enter Your Name");

    }
    else if(password.value.length==0){
        alert("Please Enter Password")
    }
    else if(password.value.length<=4 || password.value.length>8){
        alert("Password Must be 4-8 Characters");
    }
    else{
        alert("Login Successfull")
    } 
}