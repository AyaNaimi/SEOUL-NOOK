let cart = JSON.parse(localStorage.getItem('cart')) || [];
let total = JSON.parse(localStorage.getItem('total')) || 0;

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';  // Clear existing content
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - ${item.price} DH`;
        cartItems.appendChild(li);
    });
    document.getElementById('totalAmount').textContent = total;
}

document.addEventListener('DOMContentLoaded', () => {
    updateCart();
    
    const buttons = document.querySelectorAll('.add-to-cart');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.getAttribute('data-product');
            const price = parseFloat(button.getAttribute('data-price'));
            
            cart.push({ product, price });
            total += price;
            
            localStorage.setItem('cart', JSON.stringify(cart));
            localStorage.setItem('total', JSON.stringify(total));
            
            updateCart();
        });
    });
});
