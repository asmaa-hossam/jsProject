let userinfo=document.querySelector(".user-info")
let login=document.querySelector("#login")
let register=document.querySelector("#register")
let products =document.querySelector(".products")

if(localStorage.getItem("user")){
login.remove();
register.remove()
 userinfo.innerHTML=`Hello  ${localStorage.getItem("user")}`
}

// -------------------------------------------------------------

let allproducts=[
{
    id:1,
    title:"glasses",
    price:80,
    catigory:"men accesories",
    img:"images/glasses.webp",
    quantity:1,
},
{
    id:2,
    title:"T_shirt",
    price:30,
    catigory:"fashion",
    img:"images/tshirt.png",
    quantity:1,

},
{
    id:3,
    title:"suit",
    price:40,
    catigory:"fashion",
    img:"images/suit.jpg",
    quantity:1,

},
{
    id:4,
    title:"sport bottle",
    price:100,
    catigory:"sports",
    img:"images/water_bottle_square.jpg",
    quantity:1,

},
{
    id:5,
    title:"airbods",
    price:60,
    catigory:"mobile accesories",
    img:"images/airbods.jpg",
    quantity:1,

},
{
    id:6,
    title:"hat",
    price:30,
    catigory:"men accesories",
    img:"images/hat.jfif",
    quantity:1,

    },
    {
        id:7,
        title:"sport shoses",
        price:50,
        catigory:"sports",
        img:"images/shoes.jpg",
        quantity:1,

    },
    {
        id:8,
        title:"women dress",
        price:120,
        catigory:"fashion",
        img:"images/dress.jpeg",
        quantity:1,

    },
    {
        id:9,
        title:"watsh",
        price:60,
        catigory:"men accesories",
        img:"images/watch-8.jpg",
        quantity:1,

    
},
]
function drowitems(allproducts){
let y=allproducts.map((item)=>{
    return`
    <div class="col-lg-3 col-md-2 col-xs-6 mt-3 d-flex">
    <div class="card p-3 shadow-sm " >
        <img class="card-img-top h-100" src=${item.img} alt="Card image" style="height: 250px;object-fit: cover;">
        <div class="card-body">
          <h5 class="card-title text-muted"> product : ${item.title}</h5>
          <p class="card-text fs-5 text-muted">price : <span class="fw-bold">$${item.price}</span></p>
          <p class="card-text fs-5 text-muted">catigory : ${item.catigory}</p>
          <div class="d-flex justify-content-between  align-items-center ">
          <a href="#" class="btn btn-primary"onclick="addCardes(${item.id})" id="btn-${item.id}">Add to cart</a>
          <i class="far fa-heart " onclick=addfavourite(${item.id}) id="fav-${item.id}"></i>
           </div>
        </div><!-- card body -->
      </div><!-- card -->
</div><!-- col-3 -->
   
    `
})
products.innerHTML=y
}
drowitems(allproducts);
//--------------------------------------------
let carts_item_parent=document.querySelector(".carts_item-parent");
let togg=document.querySelector("#togg")

togg.onclick=function(){
    carts_item_parent.classList.toggle("show");

}
//-------------------------------------------------------------------

let counter=0;
let productarr=JSON.parse(localStorage.getItem("products"))||[];
let cardSpan=document.querySelector("#cardSpan")



function addCardes(id){
    if(localStorage.getItem("user")){
   let x=  allproducts.find((item)=>item.id===id);
   if(x){
    let excistind=productarr.some((item)=>item.id===id)
    if(!excistind){
        counter++;
        cardSpan.innerHTML=counter;
       carts_item_parent.innerHTML+= `<div class="row justify-content-between mb-1 bg-white text-center" style="width:100%;height: 30px;" id="parent-${x.id}" >
            <div class="col ">
            <p>${x.title}</p>
            </div>
            <div class="col ">
        <ul class="list-unstyled d-flex justify-content-end ">
            <li class="text-decoration-none d-block" id="count-${x.id}">1</li>
            <li class="text-decoration-none d-block mx-3" onclick=add(${x.id})><a><i class="fas fa-plus"></a></i></li>
            <li class="text-decoration-none d-block" onclick=remove(${x.id}) ><i class="fas fa-minus"></i></li>
        </ul>
            </div>
        </div> 
    `

productarr=[...productarr,x];
localStorage.setItem("products",JSON.stringify(productarr))
let btn=document.querySelector(`#btn-${x.id}`);
btn.innerHTML="remove from card"
btn.style.backgroundColor = "red";}

else{

productarr=productarr.filter((item)=> item.id !== id)
localStorage.setItem("products",JSON.stringify(productarr))
counter--;
cardSpan.innerHTML=counter;

let par=document.querySelector(`#parent-${x.id}`)
   par.remove();

let btn=document.querySelector(`#btn-${x.id}`);
btn.innerHTML="Add to card"
btn.style.backgroundColor = "blue";

}

}
    }else{
        setTimeout(() => {
            window.location="register.html"
        }, 1500);
    }
}
// -----------------------------------------------------
function add(id){
let product=allproducts.find((item)=>{
return item.id===id;
})
if(product){
   let count=document.querySelector(`#count-${product.id}`) ;
   product.quantity=(product.quantity||1)+1;
   count.innerHTML=product.quantity
}else{
    alert("product not find")
}
}
// ----------------------------------------------------------
function remove(id){
let product=allproducts.find((item)=>item.id===id);
if(product){
   if(product.quantity<=0){
   let par=document.querySelector(`#parent-${product.id}`)
   par.remove();
   }
   else{
   product.quantity= product.quantity-1
   let count=document.querySelector(`#count-${product.id}`) ;
   count.innerHTML=product.quantity;
   }
}}
//-----------------------------------------------------------
let select=document.querySelector("#select");
let search=document.querySelector("#search")



search.onkeyup=function(){
    if(select.value==="select_by_name"){
    let se=search.value.trim();
    let filteritem=allproducts.filter((item)=>{
        return item.title.includes(se)
    })
    drowitems(filteritem)}
    else{
        let se=search.value.trim();
        let filteritem=allproducts.filter((item)=>{
            return item.catigory.includes(se)
        })
        drowitems(filteritem)} 
    }
    let favouritearr=JSON.parse(localStorage.getItem("favourite"))||[];
    function addfavourite(id){
let it=allproducts.find((item)=>item.id===id);
let fav=document.querySelector(`#fav-${it.id}`);
if(it){
    let exist=favouritearr.some((item)=>item.id===id);
    if(!exist){
favouritearr=[...favouritearr,it]
localStorage.setItem("favourite",JSON.stringify(favouritearr));
fav.style.color="red";
    }else{
        favouritearr=favouritearr.filter((item)=>item.id!==id);
        localStorage.setItem("favourite",JSON.stringify(favouritearr))
        fav.style.color="black"
    }
}
}
