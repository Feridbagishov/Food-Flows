function decreaseQuantity(item) {
    var quantityInput = document.getElementById("quantity-" + item);
    var currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
    }
}

function increaseQuantity(item) {
    var quantityInput = document.getElementById("quantity-" + item);
    var currentQuantity = parseInt(quantityInput.value);
    quantityInput.value = currentQuantity + 1;
}

function addToCart(item) {
    var button = document.getElementById("cartButton-" + item);
    button.innerHTML = "Sepete Eklendi";
    button.disabled = true;
    button.style.backgroundColor = '#6c757d'; 
    button.style.cursor = 'not-allowed'; 
}
