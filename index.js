function star(event) {
    var img = event.target; 
    if (img.src == "https://img.icons8.com/?size=256w&id=104&format=png") {
        img.src = "https://img.icons8.com/?size=256w&id=qdQpy48X3Rjv&format=png";
    } else{
        img.src == "https://img.icons8.com/?size=256w&id=104&format=png"
    }
}
let cartTotal = 0; 
function cart(event) {
    alert("ADDED SUCESSFULLY !!")
    let button = event.target; 
    let priceElement = button.previousElementSibling; 
    let price = parseFloat(priceElement.textContent.replace('$', '')); 
    cartTotal += price; 
    document.getElementById("cart-total").textContent = cartTotal.toFixed(2); }
 