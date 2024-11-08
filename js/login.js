let email=document.querySelector("#email");
let password=document.querySelector("#password");
let submit=document.querySelector("#submit");

submit.onclick=function(event){
    event.preventDefault();

    let em=email.value.trim().toLowerCase();
    let pas=password.value.trim();
if(em!==""&&pas!==""){
if(localStorage.getItem("email")===em && localStorage.getItem("password")===pas){
setTimeout(() => {
    window.location="index.html"
},1500);
}else{
alert("please enter correct data")
}
}else{
    alert("Please fill in all the fields")
}


}