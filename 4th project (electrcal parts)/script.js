// Sample product data
const products = [
    {
        id: 1,
        name: "Digital Multimeter",
        category: "testing",
        price: 2499,
        oldPrice: 2999,
        rating: 4.5,
        ratingCount: 128,
        image: "https://m.media-amazon.com/images/I/61lJ3GxuVVL._SL1500_.jpg",
        specs: ["Auto-ranging", "True RMS", "1000V CAT III"],
        badge: "Bestseller"
    },
    {
        id: 2,
        name: "Wire Stripper",
        category: "hand-tools",
        price: 599,
        oldPrice: 799,
        rating: 4.2,
        ratingCount: 86,
        image: "https://m.media-amazon.com/images/I/61QYjG5h5+L._SL1500_.jpg",
        specs: ["Self-adjusting", "10-24 AWG", "Ergonomic grip"]
    },
    {
        id: 3,
        name: "Cordless Drill",
        category: "power-tools",
        price: 4599,
        oldPrice: 5999,
        rating: 4.8,
        ratingCount: 215,
        image: "https://m.media-amazon.com/images/I/61QYjG5h5+L._SL1500_.jpg",
        specs: ["20V Lithium-ion", "2-speed", "1/2\" chuck"],
        badge: "New"
    },
    {
        id: 4,
        name: "5-Pin Plug",
        category: "plugs",
        price: 299,
        oldPrice: 399,
        rating: 4.0,
        ratingCount: 42,
        image: "https://m.media-amazon.com/images/I/61QYjG5h5+L._SL1500_.jpg",
        specs: ["16A", "250V", "IP44 rated"]
    },
    {
        id: 5,
        name: "Safety Gloves",
        category: "safety",
        price: 499,
        oldPrice: 699,
        rating: 4.3,
        ratingCount: 73,
        image: "https://m.media-amazon.com/images/I/61QYjG5h5+L._SL1500_.jpg",
        specs: ["Class 00", "Rubber insulated", "Size L"]
    }
];

// DOM elements
const productsGrid = document.getElementById('productsGrid');
const categoryFilter = document.getElementById('categoryFilter');
const sortFilter = document.getElementById('sortFilter');
const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');
const cartCount = document.getElementById('cartCount');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileSearchToggle = document.getElementById('mobileSearchToggle');
const navContainer = document.querySelector('.nav-container');
const searchContainer = document.querySelector('.search-container');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

// Cart state
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    updateCartCount();

    // Event listeners
    categoryFilter.addEventListener('change', filterProducts);
    sortFilter.addEventListener('change', filterProducts);
    priceRange.addEventListener('input', updatePriceRange);
    priceRange.addEventListener('change', filterProducts);
    searchBtn.addEventListener('click', searchProducts);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchProducts();
    });

    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navContainer.classList.toggle('active');
        const icon = mobileMenuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Mobile search toggle
    mobileSearchToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        searchContainer.classList.toggle('active');
        const icon = mobileSearchToggle.querySelector('i');
        icon.classList.toggle('fa-search');
        icon.classList.toggle('fa-times');
    });

    // Mobile dropdown functionality
    const categoryLinks = document.querySelectorAll('.has-dropdown > .nav-link');
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdown = link.nextElementSibling;
                dropdown.classList.toggle('active');
                
                // Close other dropdowns
                document.querySelectorAll('.dropdown').forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        otherDropdown.classList.remove('active');
                    }
                });
            }
        });
    });

    // Close menus when clicking outside
    document.addEventListener('click', (e) => {
        // Close mobile menu
        if (!navContainer.contains(e.target) && e.target !== mobileMenuToggle) {
            navContainer.classList.remove('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }

        // Close search
        if (!searchContainer.contains(e.target) && e.target !== mobileSearchToggle) {
            searchContainer.classList.remove('active');
            const icon = mobileSearchToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-search');
        }

        // Close dropdowns on mobile
        if (window.innerWidth <= 768) {
            const dropdowns = document.querySelectorAll('.dropdown');
            dropdowns.forEach(dropdown => {
                if (!dropdown.contains(e.target) && 
                    !dropdown.previousElementSibling.contains(e.target)) {
                    dropdown.classList.remove('active');
                }
            });
        }
    });
});

// Render products to the grid
function renderProducts(productsToRender) {
    productsGrid.innerHTML = '';

    if (productsToRender.length === 0) {
        productsGrid.innerHTML = '<p class="no-products">No products found matching your criteria.</p>';
        return;
    }

    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-category">${formatCategory(product.category)}</p>
                <div class="product-price">
                    <span class="price">₹${product.price.toFixed(2)}</span>
                    ${product.oldPrice ? `<span class="old-price">₹${product.oldPrice.toFixed(2)}</span>` : ''}
                </div>
                <div class="product-actions">
                    <button class="btn btn-primary add-to-cart" data-id="${product.id}">
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                </div>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });

    // Add event listeners to the new buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Format category name for display
function formatCategory(category) {
    return category.split('-').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

// Filter products based on selected criteria
function filterProducts() {
    let filtered = [...products];

    // Filter by category
    if (categoryFilter.value !== 'all') {
        filtered = filtered.filter(product => product.category === categoryFilter.value);
    }

    // Filter by price
    filtered = filtered.filter(product => product.price <= priceRange.value);

    // Sort products
    switch (sortFilter.value) {
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        default:
            // Default sorting (featured)
            break;
    }

    renderProducts(filtered);
}

// Update price range display
function updatePriceRange() {
    priceValue.textContent = priceRange.value;
}

// Search products
function searchProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    
    if (!searchTerm) {
        renderProducts(products);
        return;
    }

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.specs.some(spec => spec.toLowerCase().includes(searchTerm))
    );

    renderProducts(filtered);
}

// Add product to cart
function addToCart(e) {
    const productId = parseInt(e.target.dataset.id);
    const product = products.find(p => p.id === productId);

    // Check if product is already in cart
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    // Update cart in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update cart count
    updateCartCount();

    // Show notification
    showNotification(`${product.name} added to cart`);
}

// Update cart count in header
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = count;
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