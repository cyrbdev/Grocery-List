let groceries = []; 

let input = document.getElementById("listInput")
let button = document.getElementById("addButton")
let productList= document.getElementById("stillList")

function addProduct (){
    let name = input.value;

    let products = {
    name: name,
    purchased: false 
    };

    if(name.trim === ""){
        alert(`You have to type something`)
        return;
    }

    groceries.push(products)
    input.value = ""
    displayProducts()
    console.log(groceries)

    
}
button.addEventListener("click", addProduct)

function displayProducts(){
    productList.innerText = ""
    
    for (let i = 0; i < groceries.length; i++) {
        let item = document.createElement("li")
        
        item.innerHTML = groceries[i].name;
        item.addEventListener("click", function(){
        console.log("You clicked a product!")
        })

        productList.appendChild(item);
    }
}

function crossItems(){
    
}