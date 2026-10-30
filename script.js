let groceries = []; 
let currentFilter = "all";
let input = document.getElementById("listInput")
let button = document.getElementById("addButton")
let productList= document.getElementById("stillList")
let productPurchased = document.getElementById(`purchasedList`)
let showALL = document.getElementById(`showAll`)
let showPending = document.getElementById(`pending`)
let showChased = document.getElementById(`purchased`)
let menuButton = document.getElementById(`menuBtn`)
let menuList = document.getElementById(`menuList`)

function addProduct (){
    let name = input.value;
    let products = {
    name: name,
    purchased: false 
    };

    if(name.trim() === ""){
        alert(`You have to type something`)
        return;
    }
    groceries.push(products)
    input.value = ""
    displayProducts()
    console.log(groceries)
}

button.addEventListener("click", addProduct)
menuButton.addEventListener("click", function(){
    menuList.hidden = !menuList.hidden
})
showALL.addEventListener("click", function() {
    currentFilter = "all";
    displayProducts();
});

showPending.addEventListener("click", function() {
    currentFilter = "pending";
    displayProducts();
});

showChased.addEventListener("click", function() {
    currentFilter = "purchased";
    displayProducts();
});


function displayProducts(){
    productList.innerText = ""
    productPurchased.innerText = ""
    for (let i = 0; i < groceries.length; i++) {
        let item = document.createElement("li")
        item.style.cursor = "pointer"
        item.innerHTML = groceries[i].name;
        item.addEventListener("click", function(){
            crossItems(i, item);
        });

        if (currentFilter === "pending" && groceries[i].purchased === true) {
            continue;
        }
        if (currentFilter === "purchased" && groceries[i].purchased === false) {
            continue;
        }

        if (groceries[i].purchased === true) {
            productPurchased.appendChild(item);
            item.style.textDecoration = "line-through" 
        }
        else {
            productList.appendChild(item);
            item.style.textDecoration = "none"
        }
    }
}


function crossItems(i,item){
    if(groceries[i].purchased === false){
        groceries[i].purchased = true
        item.style.textDecoration = "line-through" 
        productPurchased.appendChild(item);
        console.log("Moving a Purchased")
    }
    else {
        groceries[i].purchased = false
        item.style.textDecoration = "none"
        productList.appendChild(item);
    }
    displayProducts();
}