// All Collections Page JavaScript
// Execute immediately to ensure products are loaded
console.log('Loading all-collections.js');

// Ensure siteConfig is initialized
if (typeof window.siteConfig === 'undefined') {
    console.error('siteConfig is not initialized. Attempting to initialize it.');
    if (typeof window.initializeSiteConfig === 'function') {
        window.initializeSiteConfig();
    } else {
        console.error('initializeSiteConfig function not found. Make sure script.js is loaded.');
    }
}

// Check if products are available
console.log('Checking products in all-collections.js');
if (!window.siteConfig || !window.siteConfig.products || window.siteConfig.products.length === 0) {
    console.log('No products found, initializing products');
    // Initialize products if they don't exist
    if (typeof window.initializeProducts === 'function') {
        window.initializeProducts();
        console.log('Products initialized. Count:', 
            window.siteConfig && window.siteConfig.products ? window.siteConfig.products.length : 0);
    } else {
        console.error('initializeProducts function not found. Make sure script.js is loaded.');
    }
}

// Main initialization function when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Use the centralized configuration from siteConfig
    const collectionsConfig = {
        // Use product categories from siteConfig.categories
        productCategories: Object.keys(window.siteConfig.categories).map(key => ({
            id: key,
            name: window.siteConfig.categories[key].name
        })),
        // Use age groups from siteConfig.ageGroups
        ageGroups: Object.keys(window.siteConfig.ageGroups).map(key => ({
            id: key,
            name: window.siteConfig.ageGroups[key].displayName
        })),
        // Use materials from siteConfig.materials
        materials: window.siteConfig.materials,
        // Use styles from siteConfig.styles
        styles: window.siteConfig.styles
    };

    // Function to add a new product to the collection
    function addNewProduct(product) {
        // Use the centralized addProduct function from script.js
        if (typeof window.addProduct === 'function') {
            window.addProduct(product);
        } else {
            console.error('addProduct function not found in global scope');
        }
        
        // Re-render products if the page is already loaded
        if (document.readyState === 'complete') {
            renderProducts();
        }
    }
    
    // Use the centralized product data from siteConfig.products
    // No need to define allProducts here as we'll use window.siteConfig.products
        // Note: Product data is now managed in script.js through siteConfig.products
        // All product data is now managed in script.js
    // End of product data comment

    // DOM elements
    const productsGrid = document.getElementById('allProductsGrid');
    const filterButtons = document.querySelectorAll('.filter-btn[data-filter]');
    const ageFilterButtons = document.querySelectorAll('.filter-btn[data-age-filter]');
    const materialFilterButtons = document.querySelectorAll('.filter-btn[data-material-filter]');
    const styleFilterButtons = document.querySelectorAll('.filter-btn[data-style-filter]');
    const sortSelect = document.getElementById('sort-select');
    const toggleAdvancedFiltersBtn = document.querySelector('.toggle-advanced-filters');
    const advancedFiltersContainer = document.querySelector('.advanced-filters');
    const backToTopButton = document.querySelector('.back-to-top');

    // Current filter and sort state
    let currentState = {
        categoryFilter: 'all',
        ageFilter: 'all',
        materialFilter: 'all',
        styleFilter: 'all',
        sortBy: 'default'
    };

    // Initialize the page
    function init() {
        // Debug: Check if products are initialized
        console.log('Initializing all-collections page');
        console.log('window.siteConfig:', window.siteConfig);
        console.log('window.siteConfig.products:', window.siteConfig.products);
        console.log('window.addProduct exists:', typeof window.addProduct === 'function');
        
        // Ensure products are initialized
        if (!window.siteConfig.products || window.siteConfig.products.length === 0) {
            console.log('Products not initialized in init(), attempting to initialize...');
            if (typeof window.initializeProducts === 'function') {
                window.initializeProducts();
                console.log('Products after initialization in init():', window.siteConfig.products);
            }
        }
        
        // Load products
        renderProducts();

        // Set up event listeners
        setupEventListeners();
    }

    // Set up all event listeners
    function setupEventListeners() {
        // Category filter buttons
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all category buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Update filter state
                currentState.categoryFilter = this.getAttribute('data-filter');
                
                // Re-render products
                renderProducts();
            });
        });

        // Age group filter buttons
        ageFilterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all age buttons
                ageFilterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Update filter state
                currentState.ageFilter = this.getAttribute('data-age-filter');
                
                // Re-render products
                renderProducts();
            });
        });

        // Material filter buttons
        materialFilterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all material buttons
                materialFilterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Update filter state
                currentState.materialFilter = this.getAttribute('data-material-filter');
                
                // Re-render products
                renderProducts();
            });
        });

        // Style filter buttons
        styleFilterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all style buttons
                styleFilterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Update filter state
                currentState.styleFilter = this.getAttribute('data-style-filter');
                
                // Re-render products
                renderProducts();
            });
        });

        // Sort select
        if (sortSelect) {
            sortSelect.addEventListener('change', function() {
                // Update sort state
                currentState.sortBy = this.value;
                
                // Re-render products
                renderProducts();
            });
        }

        // Toggle advanced filters
        if (toggleAdvancedFiltersBtn && advancedFiltersContainer) {
            toggleAdvancedFiltersBtn.addEventListener('click', function() {
                // Toggle active class
                this.classList.toggle('active');
                
                // Toggle display of advanced filters
                if (advancedFiltersContainer.style.display === 'none') {
                    advancedFiltersContainer.style.display = 'flex';
                } else {
                    advancedFiltersContainer.style.display = 'none';
                }
            });
        }

        // Back to top button
        if (backToTopButton) {
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 300) {
                    backToTopButton.classList.add('visible');
                } else {
                    backToTopButton.classList.remove('visible');
                }
            });
            
            backToTopButton.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }

    // Filter products based on current state
    function filterProducts() {
        // Debug: Check products before filtering
        console.log('Filtering products');
        console.log('Current state:', currentState);
        console.log('Products before filtering:', window.siteConfig.products);
        
        // Check if products array exists
        if (!window.siteConfig.products || !Array.isArray(window.siteConfig.products)) {
            console.error('Products array is not properly initialized:', window.siteConfig.products);
            // Try to initialize products again
            if (typeof window.initializeProducts === 'function') {
                console.log('Attempting to initialize products again...');
                window.initializeProducts();
                console.log('Products after re-initialization:', window.siteConfig.products);
            }
            // If still no products, return empty array
            if (!window.siteConfig.products || !Array.isArray(window.siteConfig.products)) {
                return [];
            }
        }
        
        // Use the centralized product data from siteConfig.products
        const filtered = window.siteConfig.products.filter(product => {
            // Category filter
            if (currentState.categoryFilter !== 'all' && product.category !== currentState.categoryFilter) {
                return false;
            }
            
            // Age group filter
            if (currentState.ageFilter !== 'all' && product.ageGroup !== currentState.ageFilter) {
                return false;
            }
            
            // Material filter
            if (currentState.materialFilter !== 'all' && product.material !== currentState.materialFilter) {
                return false;
            }
            
            // Style filter
            if (currentState.styleFilter !== 'all' && product.style !== currentState.styleFilter) {
                return false;
            }
            
            return true;
        });
        
        console.log('Filtered products:', filtered);
        return filtered;
    }

    // Sort products based on current state
    function sortProducts(products) {
        const sortedProducts = [...products];
        
        switch (currentState.sortBy) {
            case 'name-asc':
                sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'newest':
                // In a real application, you would sort by date
                // For this example, we'll just reverse the array to simulate newest first
                sortedProducts.reverse();
                break;
            case 'default':
            default:
                // For default sorting, show featured items first
                sortedProducts.sort((a, b) => {
                    if (a.featured && !b.featured) return -1;
                    if (!a.featured && b.featured) return 1;
                    return 0;
                });
                break;
        }
        
        return sortedProducts;
    }

    // Render products to the grid
    function renderProducts() {
        console.log('Rendering products...');
        // Get filtered products
        const filteredProducts = filterProducts();
        console.log('Filtered products:', filteredProducts);
        
        // Sort filtered products
        const sortedProducts = sortProducts(filteredProducts);
        console.log('Sorted products:', sortedProducts);
        
        // Debug: Check if siteConfig and products are properly initialized
        console.log('DEBUG - siteConfig status:');
        console.log('siteConfig exists:', typeof window.siteConfig !== 'undefined');
        console.log('products array exists:', window.siteConfig && Array.isArray(window.siteConfig.products));
        console.log('products count:', window.siteConfig && window.siteConfig.products ? window.siteConfig.products.length : 0);
        console.log('products data:', window.siteConfig && window.siteConfig.products ? window.siteConfig.products : 'No products');
        
        // Clear the grid
        if (!productsGrid) {
            console.error('Products grid element not found!');
            return;
        }
        
        productsGrid.innerHTML = '';
        
        // If no products match the filters, show a message
        if (!sortedProducts || sortedProducts.length === 0) {
            console.log('No products to display');
            productsGrid.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <h3>No products found</h3>
                    <p>Try adjusting your filters to find what you're looking for.</p>
                </div>
            `;
            return;
        }
        
        // Add products to the grid
        sortedProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'design-card';
            productElement.setAttribute('data-category', product.category);
            productElement.setAttribute('data-age-group', product.ageGroup);
            productElement.setAttribute('data-material', product.material);
            productElement.setAttribute('data-style', product.style);
            
            // Default image if the specified image doesn't exist
            const defaultImage = `images/${product.category}-1.svg`;
            
            productElement.innerHTML = `
                <div class="design-image">
                    <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null; this.src='${defaultImage}';">
                    <div class="design-overlay">
                        <a href="#" class="view-details">View Details</a>
                    </div>
                </div>
                <div class="design-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="tag-button-container">
                        <span class="category-tag">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span>
                        <a href="https://wa.me/917675971677?text=I'm%20interested%20in%20the%20${encodeURIComponent(product.name)}" class="whatsapp-btn">
                            <i class="fab fa-whatsapp"></i> Inquire on WhatsApp
                        </a>
                    </div>
                </div>
            `;
            
            productsGrid.appendChild(productElement);
            
            // Add event listener to the View Details button
            const viewDetailsBtn = productElement.querySelector('.view-details');
            if(viewDetailsBtn) {
                viewDetailsBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const designTitle = product.name;
                    const designDesc = product.description;
                    const designImg = product.image;
                    
                    // Create modal for design details
                    const modal = document.createElement('div');
                    modal.classList.add('design-modal');
                    
                    // Generate multiple image paths for the slider
                    // In a real implementation, these would come from a database or product data
                    // For now, we'll create variations based on the original image
                    const imagePaths = [
                        designImg,
                        designImg,
                        designImg
                    ];
                    
                    // Add modal styles dynamically if not already added
                    if (!document.getElementById('design-modal-styles')) {
                        const modalStyles = document.createElement('style');
                        modalStyles.id = 'design-modal-styles';
                        modalStyles.textContent = `
                            .design-modal {
                                position: fixed;
                                top: 0;
                                left: 0;
                                width: 100%;
                                height: 100%;
                                background-color: rgba(0, 0, 0, 0.8);
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                z-index: 2000;
                            }
                            
                            .modal-content {
                                background-color: white;
                                border-radius: 8px;
                                width: 95%;
                                max-width: 1000px;
                                max-height: 90vh;
                                overflow-y: auto;
                                display: flex;
                                flex-direction: column;
                                position: relative;
                            }
                            
                            @media (min-width: 768px) {
                                .modal-content {
                                    flex-direction: row;
                                    height: 80vh;
                                    max-height: 700px;
                                }
                            }
                            
                            .close-modal {
                                position: absolute;
                                top: 15px;
                                right: 15px;
                                font-size: 28px;
                                font-weight: bold;
                                color: #333;
                                cursor: pointer;
                                z-index: 10;
                            }
                            
                            /* Image Slider Styles */
                            .modal-image-slider {
                                flex: 1;
                                min-height: 350px;
                                position: relative;
                            }
                            
                            @media (min-width: 768px) {
                                .modal-image-slider {
                                    flex: 0 0 50%;
                                    height: 100%;
                                }
                            }
                            
                            .slider-container {
                                width: 100%;
                                height: 100%;
                                position: relative;
                                overflow: hidden;
                                border-radius: 8px 8px 0 0;
                            }
                            
                            @media (min-width: 768px) {
                                .slider-container {
                                    border-radius: 8px 0 0 8px;
                                }
                            }
                            
                            .slider-track {
                                display: flex;
                                width: 100%;
                                height: 100%;
                                transition: transform 0.5s ease-in-out;
                            }
                            
                            .slider-item {
                                min-width: 100%;
                                height: 100%;
                                flex-shrink: 0;
                            }
                            
                            .slider-item img {
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                            }
                            
                            .slider-nav {
                                position: absolute;
                                top: 50%;
                                transform: translateY(-50%);
                                width: 40px;
                                height: 40px;
                                background-color: rgba(255, 255, 255, 0.7);
                                border: none;
                                border-radius: 50%;
                                font-size: 18px;
                                font-weight: bold;
                                color: #333;
                                cursor: pointer;
                                z-index: 5;
                                transition: background-color 0.3s ease;
                            }
                            
                            .slider-nav:hover {
                                background-color: rgba(255, 255, 255, 0.9);
                            }
                            
                            .slider-nav.prev {
                                left: 10px;
                            }
                            
                            .slider-nav.next {
                                right: 10px;
                            }
                            
                            .slider-dots {
                                position: absolute;
                                bottom: 15px;
                                left: 0;
                                right: 0;
                                display: flex;
                                justify-content: center;
                                gap: 8px;
                            }
                            
                            .slider-dot {
                                width: 12px;
                                height: 12px;
                                border-radius: 50%;
                                background-color: rgba(255, 255, 255, 0.5);
                                cursor: pointer;
                                transition: background-color 0.3s ease;
                            }
                            
                            .slider-dot.active {
                                background-color: #d4af37;
                                transform: scale(1.2);
                            }
                            
                            .modal-info {
                                flex: 1;
                                padding: 30px;
                            }
                            
                            @media (min-width: 768px) {
                                .modal-info {
                                    flex: 0 0 50%;
                                    overflow-y: auto;
                                    max-height: 100%;
                                    padding: 40px 30px;
                                }
                            }
                            
                            .modal-info h3 {
                                font-size: 1.8rem;
                                margin-bottom: 15px;
                                color: #333;
                            }
                            
                            .modal-info p {
                                margin-bottom: 20px;
                                line-height: 1.6;
                                color: #666;
                            }
                            
                            .modal-details {
                                background-color: #f9f9f9;
                                padding: 15px;
                                border-radius: 4px;
                                margin-bottom: 20px;
                            }
                            
                            .modal-details p {
                                margin-bottom: 10px;
                            }
                            
                            .modal-details p:last-child {
                                margin-bottom: 0;
                            }
                            
                            .modal-whatsapp-btn {
                                display: inline-flex;
                                align-items: center;
                                justify-content: center;
                                background-color: #25D366;
                                color: white;
                                padding: 12px 25px;
                                border-radius: 6px;
                                font-weight: 600;
                                font-size: 1.1rem;
                                transition: all 0.3s ease;
                                text-decoration: none;
                            }
                            
                            .modal-whatsapp-btn:hover {
                                background-color: #128C7E;
                                transform: translateY(-2px);
                                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                            }
                        `;
                        document.head.appendChild(modalStyles);
                    }
                    
                    modal.innerHTML = `
                        <div class="modal-content">
                            <span class="close-modal">&times;</span>
                            <div class="modal-image-slider">
                                <div class="slider-container">
                                    <div class="slider-track">
                                        ${imagePaths.map(path => `
                                            <div class="slider-item">
                                                <img src="${path}" alt="${designTitle}">
                                            </div>
                                        `).join('')}
                                    </div>
                                    <button class="slider-nav prev">&lt;</button>
                                    <button class="slider-nav next">&gt;</button>
                                    <div class="slider-dots">
                                        ${imagePaths.map((_, index) => `
                                            <span class="slider-dot${index === 0 ? ' active' : ''}" data-index="${index}"></span>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                            <div class="modal-info">
                                <h3>${designTitle}</h3>
                                <p>${designDesc}</p>
                                <div class="modal-details">
                                    <p><strong>Style:</strong> ${product.style || 'Contemporary'}</p>
                                    <p><strong>Material:</strong> ${product.material || 'Premium Silk'}</p>
                                    <p><strong>Category:</strong> ${product.category || 'Blouse'}</p>
                                    <p><strong>Customization:</strong> Available</p>
                                </div>
                                <a href="https://wa.me/917675971677?text=I'm%20interested%20in%20the%20${encodeURIComponent(designTitle)}" class="whatsapp-btn modal-whatsapp-btn">
                                    <i class="fab fa-whatsapp"></i> Inquire on WhatsApp
                                </a>
                            </div>
                        </div>
                    `;
                    
                    document.body.appendChild(modal);
                    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
                    
                    // Initialize slider functionality
                    const sliderTrack = modal.querySelector('.slider-track');
                    const sliderItems = modal.querySelectorAll('.slider-item');
                    const prevBtn = modal.querySelector('.slider-nav.prev');
                    const nextBtn = modal.querySelector('.slider-nav.next');
                    const sliderDots = modal.querySelectorAll('.slider-dot');
                    
                    let currentSlide = 0;
                    const slideWidth = 100; // percentage
                    
                    // Set initial position
                    sliderTrack.style.transform = `translateX(0%)`;
                    
                    // Function to update active dot
                    function updateActiveDot() {
                        sliderDots.forEach((dot, index) => {
                            if (index === currentSlide) {
                                dot.classList.add('active');
                            } else {
                                dot.classList.remove('active');
                            }
                        });
                    }
                    
                    // Function to go to a specific slide
                    function goToSlide(slideIndex) {
                        currentSlide = slideIndex;
                        sliderTrack.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
                        updateActiveDot();
                    }
                    
                    // Previous slide button
                    prevBtn.addEventListener('click', function() {
                        if (currentSlide > 0) {
                            goToSlide(currentSlide - 1);
                        }
                    });
                    
                    // Next slide button
                    nextBtn.addEventListener('click', function() {
                        if (currentSlide < sliderItems.length - 1) {
                            goToSlide(currentSlide + 1);
                        }
                    });
                    
                    // Dot navigation
                    sliderDots.forEach((dot, index) => {
                        dot.addEventListener('click', function() {
                            goToSlide(index);
                        });
                    });
                    
                    // Close modal when clicking the close button
                    const closeBtn = modal.querySelector('.close-modal');
                    closeBtn.addEventListener('click', function() {
                        document.body.removeChild(modal);
                        document.body.style.overflow = ''; // Restore scrolling
                    });
                    
                    // Close modal when clicking outside the content
                    modal.addEventListener('click', function(e) {
                        if (e.target === modal) {
                            document.body.removeChild(modal);
                            document.body.style.overflow = ''; // Restore scrolling
                        }
                    });
                });
            }
        });
    }

    // Initialize the page
    init();
});