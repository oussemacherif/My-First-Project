  function createProduct(name,brand,model,price,category,quantity,description){
    return{
            name:name,
            brand:brand,
            model:model,
            price:price,
            category:category,
            quantity:quantity,
            description:description,
            }
}

function MakeProducts(){
    var obj={}
    obj.list=[]
    obj.list1=[]
    obj.listSearch=[]
    obj.add=function(name,brand,model,price,category,quantity,description){
        var pro=createProduct(name,brand,model,price,category,quantity,description)
        obj.list.push(pro)
        obj.list1.push(pro)
    }
    obj.removeAll=function(){
        obj.list=[]
        
    }
    obj.searchByName=function(name){
        obj.listSearch=filter(obj.list,function(e){
            return e.name===name
        })
    }
    obj.sortByPrice=function(){
        obj.list.sort(function(a,b){
            return a.price-b.price
        })
        }
    obj.sortByQuantity=function(){
        obj.list.sort(function(a,b){
            return a.quantity-b.quantity
        })
        }
    
    return obj
}

var na=document.getElementById("name")
var br=document.getElementById("brand")
var mo=document.getElementById("model")
var pr=document.getElementById("price")
var cat=document.getElementById("category")
var qua=document.getElementById("quantity")
var des=document.getElementById("description")
var prod=MakeProducts()

$("#bt1").on("click",function(){
    prod.add(na.value,br.value,mo.value,pr.value,cat.value,qua.value,des.value)
    clearInputs()
    display()
 
})

function clearInputs(){
    na.value=""
    br.value=""
    mo.value=""
    pr.value=""
    cat.value=""
    qua.value=""
    des.value=""
} 

function display(){
       $(".listOfProduct").append(`<tr>
        <td>${prod.list[prod.list.length-1].name}</td>
        <td>${prod.list[prod.list.length-1].brand}</td>
        <td>${prod.list[prod.list.length-1].model}</td>
        <td>${prod.list[prod.list.length-1].price}</td>
        <td>${prod.list[prod.list.length-1].category}</td>
        <td>${prod.list[prod.list.length-1].quantity}</td>
        <td>${prod.list[prod.list.length-1].description}</td>
        </tr>`)
    }

$("#bt2").on("click",function(){
    prod.removeAll()
    $(".listOfProduct").empty()
})
$("#bt3").on("click",function(){
    $(".listOfProduct").empty()
    prod.sortByPrice()
    for (var i=0;i<prod.list.length;i++){
        $(".listOfProduct").append(`<tr>
        <td>${prod.list[i].name}</td>
        <td>${prod.list[i].brand}</td>
        <td>${prod.list[i].model}</td>
        <td>${prod.list[i].price}</td>
        <td>${prod.list[i].category}</td>
        <td>${prod.list[i].quantity}</td>
        <td>${prod.list[i].description}</td>
        </tr>`)
    }
})
$("#bt4").on("click",function(){
    $(".listOfProduct").empty()
    prod.sortByQuantity()
    for (var i=0;i<prod.list.length;i++){
        $(".listOfProduct").append(`<tr>
        <td>${prod.list[i].name}</td>
        <td>${prod.list[i].brand}</td>
        <td>${prod.list[i].model}</td>
        <td>${prod.list[i].price}</td>
        <td>${prod.list[i].category}</td>
        <td>${prod.list[i].quantity}</td>
        <td>${prod.list[i].description}</td>
        </tr>`)
    }
})
var sear=document.getElementById("search")
$("#bt5").on("click",function(){
    $(".listOfProduct").empty()
    prod.searchByName(sear.value)
    for (var i=0;i<prod.listSearch.length;i++){
        $(".listOfProduct").append(`<tr>
        <td>${prod.listSearch[i].name}</td>
        <td>${prod.listSearch[i].brand}</td>
        <td>${prod.listSearch[i].model}</td>
        <td>${prod.listSearch[i].price}</td>
        <td>${prod.listSearch[i].category}</td>
        <td>${prod.listSearch[i].quantity}</td>
        <td>${prod.listSearch[i].description}</td>
        </tr>`)
    }
})
$("#bt6").on("click",function(){
    $(".listOfProduct").empty()
    prod.list=prod.list1
    for (var i=0;i<prod.list.length;i++){
        $(".listOfProduct").append(`<tr>
        <td>${prod.list[i].name}</td>
        <td>${prod.list[i].brand}</td>
        <td>${prod.list[i].model}</td>
        <td>${prod.list[i].price}</td>
        <td>${prod.list[i].category}</td>
        <td>${prod.list[i].quantity}</td>
        <td>${prod.list[i].description}</td>
        </tr>`)
    }
})

function clearInputs(){
    na.value=""
    br.value=""
    mo.value=""
    pr.value=""
    cat.value=""
    qua.value=""
    des.value=""
}
function display(){
       $(".listOfProduct").append(`<tr>
        <td>${prod.list[prod.list.length-1].name}</td>
        <td>${prod.list[prod.list.length-1].brand}</td>
        <td>${prod.list[prod.list.length-1].model}</td>
        <td>${prod.list[prod.list.length-1].price}</td>
        <td>${prod.list[prod.list.length-1].category}</td>
        <td>${prod.list[prod.list.length-1].quantity}</td>
        <td>${prod.list[prod.list.length-1].description}</td>
        </tr>`)
    }

function each(coll, f) {
    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
            f(coll[i], i);
        }
    }
    else {
        for (var key in coll) {
            f(coll[key], key);
        }
    }
}
       
function filter(array, predicate) {
    var acc = [];
    each(array, function(element, i) {
        if (predicate(element, i)) {
            acc.push(element);
        }
    });
    return acc;
}
    
       
