let logou=document.querySelector("#logout")

if(logou){
logou.onclick=function(){
    localStorage.clear();
    setTimeout(() => {
       window.location="login.html" 
    },1000);
}}

