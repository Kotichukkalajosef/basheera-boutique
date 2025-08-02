// Bottom Navigation Bar Script
document.addEventListener('DOMContentLoaded', function() {
    // Create the bottom navigation bar element
    const createBottomNav = function() {
        // Check if bottom nav already exists
        if (document.querySelector('.bottom-nav')) {
            return;
        }
        
        // Create the bottom navigation bar
        const bottomNav = document.createElement('nav');
        bottomNav.className = 'bottom-nav';
        
        // Define navigation items
        const navItems = [
            { href: 'index.html', icon: 'fa-home', text: 'Home' },
            { href: 'all-collections.html', icon: 'fa-shopping-bag', text: 'Collections' },
            { href: 'index.html#categories', icon: 'fa-th-large', text: 'Categories' },
            { href: 'index.html#contact', icon: 'fa-envelope', text: 'Contact' }
        ];
        
        // Create navigation items
        navItems.forEach(item => {
            const navItem = document.createElement('a');
            navItem.href = item.href;
            navItem.className = 'bottom-nav-item';
            
            // Check if this is the current page
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            if ((currentPage === item.href) || 
                (currentPage === '' && item.href === 'index.html') ||
                (currentPage === 'index.html' && item.href === 'index.html')) {
                navItem.classList.add('active');
            }
            
            const icon = document.createElement('i');
            icon.className = `fas ${item.icon}`;
            
            const span = document.createElement('span');
            span.textContent = item.text;
            
            navItem.appendChild(icon);
            navItem.appendChild(span);
            bottomNav.appendChild(navItem);
        });
        
        // Add the bottom navigation bar to the page
        document.body.appendChild(bottomNav);
        
        // Add event listeners to bottom nav items
        const bottomNavItems = document.querySelectorAll('.bottom-nav-item');
        
        bottomNavItems.forEach(item => {
            item.addEventListener('click', function(e) {
                // Remove active class from all items
                bottomNavItems.forEach(navItem => {
                    navItem.classList.remove('active');
                });
                
                // Add active class to clicked item
                this.classList.add('active');
                
                // If the link is to a section on the same page, handle smooth scrolling
                const href = this.getAttribute('href');
                if (href.includes('#') && href.split('#')[1].length > 0) {
                    const isCurrentPage = window.location.pathname.endsWith('index.html') || 
                                         window.location.pathname.endsWith('/');
                    
                    if (isCurrentPage || href.startsWith('#')) {
                        e.preventDefault();
                        const targetId = href.split('#')[1];
                        const targetSection = document.getElementById(targetId);
                        
                        if (targetSection) {
                            // Close mobile menu if open
                            if (document.body.classList.contains('menu-open')) {
                                // Try to find the close mobile menu function
                                const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
                                if (mobileMenuBtn) {
                                    mobileMenuBtn.click();
                                }
                            }
                            
                            // Scroll to the section
                            window.scrollTo({
                                top: targetSection.offsetTop - 80, // Adjust for header height
                                behavior: 'smooth'
                            });
                        }
                    }
                }
            });
        });
    };
    
    // Call the function to create the bottom navigation bar
    createBottomNav();
    
    // Ensure mobile menu is working
    const setupMobileMenu = function() {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        if (!mobileMenuBtn) return;
        
        // Make sure the mobile menu button is visible and clickable
        mobileMenuBtn.style.zIndex = '1000';
        
        // Ensure the mobile menu is properly initialized
        if (!mobileMenuBtn.hasAttribute('data-initialized')) {
            mobileMenuBtn.addEventListener('click', function() {
                document.body.classList.toggle('menu-open');
                this.classList.toggle('active');
                
                const mobileNav = document.querySelector('.mobile-nav');
                if (mobileNav) {
                    mobileNav.classList.toggle('open');
                    
                    // Add animation to menu items
                    const menuItems = mobileNav.querySelectorAll('ul li');
                    menuItems.forEach((item, index) => {
                        item.classList.remove('animate-in');
                        setTimeout(() => {
                            item.classList.add('animate-in');
                        }, 50 * index);
                    });
                }
            });
            
            mobileMenuBtn.setAttribute('data-initialized', 'true');
        }
    };
    
    // Setup mobile menu
    setupMobileMenu();
});