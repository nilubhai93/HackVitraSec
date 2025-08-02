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
       image: "https://images.pexels.com/photos/4398314/pexels-photo-4398314.jpeg?_gl=1*12ofzos*_ga*ODgxMDQzMjY0LjE3MzczMTc4MTk.*_ga_8JE65Q40S6*czE3NTQxMDU2MjMkbzMkZzEkdDE3NTQxMDU2NjUkajE4JGwwJGgw",
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
       image: "https://images.pexels.com/photos/5853935/pexels-photo-5853935.jpeg?_gl=1*13dt1wj*_ga*ODgxMDQzMjY0LjE3MzczMTc4MTk.*_ga_8JE65Q40S6*czE3NTQxMDU2MjMkbzMkZzEkdDE3NTQxMDU3MjkkajI3JGwwJGgw",
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
       image: "https://images.pexels.com/photos/30486958/pexels-photo-30486958.jpeg?_gl=1*1ngyoxq*_ga*ODgxMDQzMjY0LjE3MzczMTc4MTk.*_ga_8JE65Q40S6*czE3NTQxMDc5OTIkbzQkZzEkdDE3NTQxMDgwMTEkajQxJGwwJGgw",
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
       image: "https://5.imimg.com/data5/PH/NK/YL/SELLER-47156935/jenny-prince-5-pin-multi-plug.jpg",
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
       image: "https://images.pexels.com/photos/9462685/pexels-photo-9462685.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
       specs: ["Class 00", "Rubber insulated", "Size L"]
   },

   {
       id: 7,
       name: "Soldering Iron",
       category: "testing",
       price: 899,
       oldPrice: 1199,
       rating: 4.4,
       ratingCount: 156,
       image: "https://m.media-amazon.com/images/I/71JDklf+e4L.jpg",
       specs: ["40W", "Temperature control", "LED indicator"],
       badge: "Popular"
   },
   {
       id: 8,
       name: "Extension Cord",
       category: "cables",
       price: 1899,
       oldPrice: 2299,
       rating: 4.1,
       ratingCount: 67,
       image: "https://m.media-amazon.com/images/I/71pVPgu0geL.jpg",
       specs: ["50ft length", "Heavy duty", "Weather resistant"]
   },
   {
       id: 9,
       name: "Tool Box",
       category: "storage",
       price: 3299,
       oldPrice: 3999,
       rating: 4.7,
       ratingCount: 189,
       image: "https://5.imimg.com/data5/EI/ED/MY-2082997/tool-box.jpg",
       specs: ["Metal construction", "3 compartments", "Lock included"]
   },
   {
       id: 10,
       name: "Wire Nuts",
       category: "connectors",
       price: 199,
       oldPrice: 299,
       rating: 4.2,
       ratingCount: 234,
       image: "https://5.imimg.com/data5/SELLER/Default/2024/6/428175436/MT/ZC/OW/28006305/wire-nut-connector-500x500.jpeg",
       specs: ["Assorted sizes", "100 pieces", "UL listed"]
   },
   {
       id: 11,
       name: "Angle Grinder",
       category: "power-tools",
       price: 2899,
       oldPrice: 3499,
       rating: 4.5,
       ratingCount: 102,
       image: "https://static1.industrybuying.com/products/power-tools/grinders-vibrators/angle-grinders/POW.ANG.527458227_1726830833379.webp",
       specs: ["750W motor", "115mm disc", "Variable speed"]
   },
   {
       id: 12,
       name: "Electrical Tape",
       category: "materials",
       price: 149,
       oldPrice: 199,
       rating: 4.0,
       ratingCount: 312,
       image: "https://m.media-amazon.com/images/I/710cQMQMAAL._UF1000,1000_QL80_.jpg",
       specs: ["PVC material", "20m length", "Flame retardant"]
   },
   {
       id: 13,
       name: "Voltage Tester",
       category: "testing",
       price: 799,
       oldPrice: 999,
       rating: 4.3,
       ratingCount: 78,
       image: "https://m.media-amazon.com/images/I/61R7NKDoYiL.jpg",
       specs: ["Non-contact", "Audio/visual alert", "12-1000V range"],
       badge: "Recommended"
   },
   {
       id: 14,
       name: "Cable Ties",
       category: "accessories",
       price: 299,
       oldPrice: 399,
       rating: 4.1,
       ratingCount: 145,
       image: "https://rukminim2.flixcart.com/image/704/844/kgiaykw0/cable-tie/n/9/n/100-18-inch-nylon-cable-ties-tie-wire-organiser-ties-yuvaan-original-imafwqhngknshbuk.jpeg?q=90&crop=false",
       specs: ["Nylon material", "Various sizes", "500 pieces"]
   },
   {
       id: 15,
       name: "Heat Gun",
       category: "power-tools",
       price: 1899,
       oldPrice: 2399,
       rating: 4.4,
       ratingCount: 91,
       image: "https://cdn.moglix.com/p/N8z0fggDvloXf-xxlarge.jpg",
       specs: ["2000W", "Variable temperature", "Multiple nozzles"]
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