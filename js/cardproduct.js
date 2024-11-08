let productlocal=JSON.parse(localStorage.getItem("products"))||[];
let products=document.querySelector(".products")
let showprice=document.querySelector("#showprice");
let favoritte=document.querySelector(".favoritte")
if(productlocal){
    drowitems()
}

function drowitems(){
    let y=productlocal.map((item)=>{
        return`
        <div class="col-lg-3 col-md-4 col-sm-2 mt-3 d-flex" id="parent-${item.id}">
        <div class="card p-3 shadow-sm " >
            <img class="card-img-top h-100" src=${item.img} alt="Card image" style="height: 250px;object-fit: cover;">
            <div class="card-body">
              <h5 class="card-title text-muted"> product : ${item.title}</h5>
              <p class="card-text fs-5 text-muted">price : <span class="fw-bold" id="span-${item.id}">$${item.price}</span></p>
              <div class="d-flex justify-content-between  align-items-center ">
        <ul class="list-unstyled d-flex"> 
            <li id="quantity-${item.id}" >${item.quantity}</li>
            <li class="mx-1" onclick=add(${item.id})><i class="fas fa-plus"></i></li>
            <li onclick=remove(${item.id})><i class="fas fa-minus"></i></li>
        </ul>
        <ul class="list-unstyled">
             <li class="btn-danger btn" onclick=deletee(${item.id}) id="deleate-${item.id}">delete</li>
             </ul>
              </div>
              
            </div><!-- card body -->
          </div><!-- card -->
    </div><!-- col-3 -->
       
        `
    })
    products.innerHTML=y;
    }
    drowitems();

    function deletee(id){
        let nn=productlocal.find((item)=>{
           return item.id===id;
        })
        if(nn){
             productlocal=productlocal.filter((f)=> f.id!==id)
            localStorage.setItem("products",JSON.stringify(productlocal));
            let par=document.querySelector(`#parent-${nn.id}`)
            par.remove();
        }
    }
function add(id){
let ite=productlocal.find((item)=>item.id===id);
ite.quantity+=1;
let quantit=document.querySelector(`#quantity-${id}`);
quantit.innerHTML=ite.quantity
}
function remove(id){
    let ite=productlocal.find((item)=>item.id===id);
    if(ite.quantity>0){
ite.quantity-=1;
let quantit=document.querySelector(`#quantity-${id}`);
quantit.innerHTML=ite.quantity}
else{
    let par=document.querySelector(`#parent-${ite.id}`)
            par.remove();
         productlocal=productlocal.filter((item)=>item.id!==id);
         localStorage.setItem("products",JSON.stringify(productlocal))
}
}

window.onload=function(){
  
  let price=productlocal.reduce((acc,curr)=>{
    return curr.price +acc;
  },0)
  showprice.innerHTML=`${price} $`;
}

let fav= JSON.parse(localStorage.getItem("favourite"));
if(fav){
    drowfav();
}
function drowfav(){
    let tt=fav.map((item)=>{
        return`
        <div class="col-lg-3 col-md-4 col-sm-6 mt-3 d-flex" id="parent-${item.id}">
        <div class="card p-3 shadow-sm " >
            <img class="card-img-top h-100" src=${item.img} alt="Card image" style="height: 150px;object-fit: cover;">
            <div class="card-body">
              <h5 class="card-title text-muted"> product : ${item.title}</h5>
              <div class="d-flex justify-content-between  align-items-center mt-2">
                 <p class="card-text fs-5 text-muted d-block">${item.catigory}</p>
             <li class="btn-danger btn d-block" onclick=deletee(${item.id}) id="deleate-${item.id}">delete</li>
        
              </div>
              
            </div><!-- card body -->
          </div><!-- card -->
    </div><!-- col-3 -->
       
        `
    })
    favoritte.innerHTML=tt;
    }
    drowfav();

