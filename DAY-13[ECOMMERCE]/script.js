function addToCart(name, price, image){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({
        name:name,
        price:price,
        image:image
    });
    localStorage.setItem("cart",JSON.stringify(cart));
    alert(name + " added to cart");
}
function displayCart(){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItems = document.getElementById("cartItems");
    let total = 0;
    cartItems.innerHTML = "";
    if(cart.length==0){
        cartItems.innerHTML="<h2>Your Cart is Empty</h2>";
        document.getElementById("total").innerHTML="";
        return;
    }

    cart.forEach(function(item,index){

        total += item.price;

        cartItems.innerHTML +=

        `<div class="card">

            <img src="${item.image}">

            <h2>${item.name}</h2>

            <p class="price">₹${item.price}</p>

            <button onclick="removeItem(${index})">

            Remove

            </button>

        </div>`;

    });

    document.getElementById("total").innerHTML="Total Amount : ₹"+total;

}

function removeItem(index){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(cart));
    displayCart();

}

function clearCart(){
    localStorage.removeItem("cart");
    displayCart();

}
