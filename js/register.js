let user=document.querySelector("#user");
let email=document.querySelector("#email");
let password=document.querySelector("#password");
let submit=document.querySelector("#submit")

submit.onclick=function(event){
    event.preventDefault();

    let u=user.value.trim().toLowerCase();
    let em=email.value.trim().toLowerCase();
    let pas=password.value.trim();

    if(u!=="" && em!==""&& pas!==""){
  localStorage.setItem("user",u) 
  localStorage.setItem("email",em) 
  localStorage.setItem("password",pas) 

  setTimeout(() => {
    window.location="login.html"
  }, 1500);
    }else{
        alert("Please fill in all the fields")
    }
}
