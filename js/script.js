
var allproducts = document.querySelectorAll(".cards .card-items")
var div = document.querySelector("#content")
var btn = document.querySelector("#btn")
var totalprice =0;

allproducts.forEach(function(item) {
    item.onclick=function(){
        div.innerHTML += item.textContent +" "
        totalprice +=  +(item.getAttribute("price"))

        if(div.innerHTML != "") {
            btn.style.display = "block";
            btn.style.width = "300px";
            btn.style.height = "50px";
        }
    } 

})

btn.onclick= function (){
    console.log(totalprice)
}
