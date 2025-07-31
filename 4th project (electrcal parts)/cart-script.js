// DOM elements
const cartItems = document.getElementById('cartItems');
const emptyCart = document.getElementById('emptyCart');
const subtotalAmount = document.getElementById('subtotalAmount');
const taxAmount = document.getElementById('taxAmount');
const totalAmount = document.getElementById('totalAmount');
const clearCartBtn = document.getElementById('clearCartBtn');
const checkoutBtn = document.getElementById('checkoutBtn');
const cartCount = document.getElementById('cartCount');

// Cart state
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderCart();
    updateOrderSummary();
    updateCartCount();
    
    // Event listeners
    clearCartBtn.addEventListener('click', clearCart);
    checkoutBtn.addEventListener('click', proceedToCheckout);
});

// Render cart items
function renderCart() {
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        emptyCart.style.display = 'block';
        return;
    }
    
    emptyCart.style.display = 'none';
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.dataset.id = item.id;
        cartItem.innerHTML = `
            <div class="item-image">
                <img src="${item.image}" alt="${item.name}" class="product-img">
            </div>
            <div class="item-details">
                <h3 class="item-name">${item.name}</h3>
                <p class="item-category">${formatCategory(item.category)}</p>
            </div>
            <div class="item-price">
                <span class="current-price">₹${item.price.toFixed(2)}</span>
            </div>
            <div class="item-quantity">
                <button class="qty-btn qty-decrease">
                    <i class="fas fa-minus"></i>
                </button>
                <input type="number" class="qty-input" min="1" value="${item.quantity}">
                <button class="qty-btn qty-increase">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
            <div class="item-total">
                <span class="total-price">₹${(item.price * item.quantity).toFixed(2)}</span>
            </div>
            <div class="item-actions">
                <button class="remove-item-btn">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        // Quantity buttons
        cartItem.querySelector('.qty-decrease').addEventListener('click', () => {
            const input = cartItem.querySelector('.qty-input');
            if (input.value > 1) {
                input.value--;
                updateItemTotal(cartItem);
            }
        });
        
        cartItem.querySelector('.qty-increase').addEventListener('click', () => {
            const input = cartItem.querySelector('.qty-input');
            input.value++;
            updateItemTotal(cartItem);
        });
        
        // Input change
        cartItem.querySelector('.qty-input').addEventListener('change', () => {
            updateItemTotal(cartItem);
        });
        
        // Remove item
        cartItem.querySelector('.remove-item-btn').addEventListener('click', () => {
            removeItem(item.id);
        });
        
        cartItems.appendChild(cartItem);
    });
}

// Update item total price and cart data
function updateItemTotal(itemElement) {
    const itemId = parseInt(itemElement.dataset.id);
    const price = parseFloat(itemElement.querySelector('.current-price').textContent.replace('₹', ''));
    const quantity = parseInt(itemElement.querySelector('.qty-input').value);
    const totalPrice = (price * quantity).toFixed(2);
    
    // Update display
    itemElement.querySelector('.total-price').textContent = `₹${totalPrice}`;
    
    // Update cart data
    const itemIndex = cart.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
        cart[itemIndex].quantity = quantity;
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    
    // Update summary
    updateOrderSummary();
    updateCartCount();
}

// Update order summary
function updateOrderSummary() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const tax = subtotal * 0.05; // 5% tax
    
    subtotalAmount.textContent = `₹${subtotal.toFixed(2)}`;
    taxAmount.textContent = `₹${tax.toFixed(2)}`;
    
    const total = subtotal + tax;
    totalAmount.textContent = `₹${total.toFixed(2)}`;
}

// Update cart count
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = count;
}

// Clear cart
function clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
        updateOrderSummary();
        updateCartCount();
        showNotification('Cart cleared');
    }
}

// Remove item from cart
function removeItem(itemId) {
    if (confirm('Are you sure you want to remove this item from your cart?')) {
        cart = cart.filter(item => item.id !== itemId);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
        updateOrderSummary();
        updateCartCount();
        showNotification('Item removed from cart');
    }
}

// Proceed to checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty');
        return;
    }
    
    // Clear cart after successful purchase
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    updateOrderSummary();
    updateCartCount();
    
    showNotification('Purchase successful! Thank you for your order.');
    
    // Redirect to home after 2 seconds
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
}

// Format category name for display
function formatCategory(category) {
    return category.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <p>${message}</p>
    `;
    document.body.appendChild(notification);

    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    // Auto-remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}