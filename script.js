// DYNAMIC CONFIGURATION SYSTEM
// This centralized configuration makes it easy to add new categories, age groups, and items

// Initialize siteConfig function
function initializeSiteConfig() {
  console.log("Initializing siteConfig...");
  // Check if siteConfig is already defined
  if (typeof window.siteConfig !== "undefined") {
    console.log("siteConfig already exists, returning existing config");
    // Make sure products array exists
    if (!window.siteConfig.products) {
      console.log("Products array missing, initializing it");
      window.siteConfig.products = [];
      // Initialize with sample products
      initializeProducts();
    }
    return window.siteConfig;
  }

  console.log("Creating new siteConfig");
  // Create the siteConfig object if it doesn't exist
  window.siteConfig = {
    // Global Site Images Configuration
    siteImages: {
      // Home page banner image
      homeBanner: "images/BannerHero.jpg",
      // Collections page banner image
      collectionsBanner: "images/all-collections-banner.svg",
      // Category page banners
      categoryBanners: {
        wedding: "images/wedding-banner.svg",
        casual: "images/casual-banner.svg",
        maggam: "images/maggam-banner.svg",
        designer: "images/designer-banner.svg",
      },
      // Category story images
      categoryStories: {
        wedding: "images/home-imgs/wedding.jpg",
        casual: "images/home-imgs/casual-blouse.jpg",
        maggam: "images/home-imgs/maggam.jpg",
        designer: "images/designer-blouses.svg",
      },
      // Browse categories background image
      browseCategoriesBg: "images/pattern-bg.svg",
      // Default product image (used as fallback)
      defaultProductImage: "images/product-1.svg",
    },
    // Categories Configuration
    categories: {
      wedding: {
        name: "Wedding",
        description: "Elegant wedding blouses",
        storyLabel: "Wedding",
        storyImage: "images/home-imgs/wedding.jpg",
      },

      casual: {
        name: "Casual",
        description: "Comfortable everyday blouses",
        storyLabel: "Casual",
        storyImage: "images/home-imgs/casual-blouse.jpg",
      },
      maggam: {
        name: "Maggam",
        description: "Traditional maggam work blouses",
        storyLabel: "Maggam",
        storyImage: "images/home-imgs/maggam.jpg",
      },
      designer: {
        name: "Designer",
        description: "Exclusive designer blouses",
        storyLabel: "Designer",
        storyImage: "images/designer-blouses.svg",
      },
      party: {
        name: "Party Wear",
        description: "Festive celebration attire",
        storyLabel: "Party Wear",
        storyImage: "images/home-imgs/party.jpg",
        isSinglePage: false,
        availableFor: ["women", "kids", "teens"],
        urlPatterns: {
          women: "party-women.html",
          kids: "party-kids.html",
          teens: "party-teens.html",
        },
      },
    },
    // Age Groups Configuration
    ageGroups: {
      teens: {
        visibility: false,
        title: "Teens Categories",
        displayName: "Teens",
        description: "Trendy styles for teenagers",
        image: "images/home-imgs/teens.jpg",
        altText: "Teens Collection",
      },
      women: {
        visibility: true,
        title: "Women Categories",
        displayName: "Women",
        description: "Elegant designs for women",
        image: "images/home-imgs/wedding.jpg",
        altText: "Women Collection",
      },
      kids: {
        visibility: true,
        title: "Kids Categories",
        displayName: "Kids",
        description: "Adorable styles for little ones",
        image: "images/home-imgs/casual-blouse.jpg",
        altText: "Kids Collection",
      },
    },
    // Materials Configuration
    materials: [
      { id: "cotton", name: "Cotton" },
      { id: "silk", name: "Silk" },
      { id: "linen", name: "Linen" },
      { id: "velvet", name: "Velvet" },
    ],
    // Styles Configuration
    styles: [
      { id: "floral", name: "Floral" },
      { id: "traditional", name: "Traditional" },
      { id: "contemporary", name: "Contemporary" },
    ],
    // Products Configuration - Centralized product data
    products: [],
  };

  console.log("Calling initializeProducts from initializeSiteConfig");
  // Initialize with sample products
  initializeProducts();

  return window.siteConfig;
}

// Function to initialize products
function initializeProducts() {
  console.log("Initializing products...");
  // Make sure window.siteConfig.products exists
  if (!window.siteConfig.products) {
    window.siteConfig.products = [];
  }

  // Sample product data - in a real application, this would come from a database or API
  const sampleProducts = [
    // Wedding category - Women
    {
      id: "w1",
      name: "Royal Bridal Silk",
      description: "Luxurious silk with gold zardozi work",
      image: "images/wedding-1.svg",
      category: "wedding",
      ageGroup: "women",
      material: "silk",
      style: "traditional",
      featured: true,
    },
    {
      id: "w2",
      name: "Regal Velvet",
      description: "Rich velvet with kundan and stone work",
      image: "images/wedding-2.svg",
      category: "wedding",
      ageGroup: "women",
      material: "velvet",
      style: "traditional",
      featured: true,
    },
    {
      id: "w3",
      name: "Pearl Elegance",
      description: "Silk blouse with pearl and crystal work",
      image: "images/wedding-3.svg",
      category: "wedding",
      ageGroup: "women",
      material: "silk",
      style: "traditional",
      featured: false,
    },
    {
      id: "w4",
      name: "Golden Heritage",
      description: "Velvet blouse with traditional zardozi",
      image: "images/wedding-4.svg",
      category: "wedding",
      ageGroup: "women",
      material: "velvet",
      style: "traditional",
      featured: false,
    },
    {
      id: "w5",
      name: "Crimson Bride",
      description: "Red silk with gold thread work",
      image: "images/wedding-5.svg",
      category: "wedding",
      ageGroup: "women",
      material: "silk",
      style: "traditional",
      featured: true,
    },
    {
      id: "w6",
      name: "Crystal Symphony",
      description: "Silk blouse with crystal and bead work",
      image: "images/wedding-6.svg",
      category: "wedding",
      ageGroup: "women",
      material: "silk",
      style: "traditional",
      featured: false,
    },
    // Casual category - Women
    {
      id: "cw1",
      name: "Floral Cotton",
      description: "Breathable cotton with delicate floral embroidery",
      image: "images/casual-1.svg",
      category: "casual",
      ageGroup: "women",
      material: "cotton",
      style: "floral",
      featured: false,
    },
    {
      id: "cw2",
      name: "Simple Elegance",
      description: "Light linen with minimal thread work",
      image: "images/casual-2.svg",
      category: "casual",
      ageGroup: "women",
      material: "linen",
      style: "contemporary",
      featured: false,
    },
    {
      id: "cw3",
      name: "Pastel Bloom",
      description: "Light silk with pastel floral patterns",
      image: "images/casual-3.svg",
      category: "casual",
      ageGroup: "women",
      material: "silk",
      style: "floral",
      featured: true,
    },
    // Casual category - Kids
    {
      id: "ck1",
      name: "Playful Patterns",
      description: "Colorful cotton blouse with playful patterns",
      image: "images/casual-4.svg",
      category: "casual",
      ageGroup: "kids",
      material: "cotton",
      style: "contemporary",
      featured: true,
    },
    {
      id: "ck2",
      name: "Cute Comfort",
      description: "Soft cotton with cute embroidery details",
      image: "images/casual-5.svg",
      category: "casual",
      ageGroup: "kids",
      material: "cotton",
      style: "floral",
      featured: false,
    },
    // Maggam category - Women
    {
      id: "mw1",
      name: "Traditional Maggam",
      description: "Classic maggam work with traditional motifs",
      image: "images/maggam-1.svg",
      category: "maggam",
      ageGroup: "women",
      material: "silk",
      style: "traditional",
      featured: true,
    },
    {
      id: "mw2",
      name: "Contemporary Maggam",
      description: "Modern take on traditional maggam embroidery",
      image: "images/maggam-2.svg",
      category: "maggam",
      ageGroup: "women",
      material: "silk",
      style: "contemporary",
      featured: false,
    },
    // Maggam category - Kids
    {
      id: "mk1",
      name: "Mini Maggam",
      description: "Delicate maggam work sized for little ones",
      image: "images/maggam-3.svg",
      category: "maggam",
      ageGroup: "kids",
      material: "silk",
      style: "traditional",
      featured: true,
    },
    // Designer category - Women
    {
      id: "dw1",
      name: "Couture Collection",
      description: "Exclusive designer piece with unique embellishments",
      image: "images/designer-1.svg",
      category: "designer",
      ageGroup: "women",
      material: "silk",
      style: "contemporary",
      featured: true,
    },
    {
      id: "dw2",
      name: "Runway Ready",
      description: "Fashion-forward design with modern aesthetics",
      image: "images/designer-2.svg",
      category: "designer",
      ageGroup: "women",
      material: "linen",
      style: "contemporary",
      featured: false,
    },
    // Designer category - Kids
    {
      id: "dk1",
      name: "Little Luxury",
      description: "Premium designer blouse for special occasions",
      image: "images/designer-3.svg",
      category: "designer",
      ageGroup: "kids",
      material: "silk",
      style: "contemporary",
      featured: true,
    },
    // Wedding category - Kids
    {
      id: "wk1",
      name: "Mini Bridal Silk",
      description: "Luxurious silk with delicate embroidery for little ones",
      image: "images/wedding-1.svg",
      category: "wedding",
      ageGroup: "kids",
      material: "silk",
      style: "traditional",
      featured: true,
    },
    {
      id: "wk2",
      name: "Little Velvet",
      description: "Rich velvet with small stone work for kids",
      image: "images/wedding-2.svg",
      category: "wedding",
      ageGroup: "kids",
      material: "velvet",
      style: "traditional",
      featured: false,
    },
    {
      id: "wk3",
      name: "Pearl Princess",
      description: "Silk blouse with tiny pearls for special occasions",
      image: "images/wedding-3.svg",
      category: "wedding",
      ageGroup: "kids",
      material: "silk",
      style: "traditional",
      featured: true,
    },
    {
      id: "wk4",
      name: "Golden Celebration",
      description: "Festive blouse with golden details for little ones",
      image: "images/wedding-4.svg",
      category: "wedding",
      ageGroup: "kids",
      material: "velvet",
      style: "traditional",
      featured: false,
    },
  ];

  // Add sample products to siteConfig
  sampleProducts.forEach((product) => addProduct(product));
}

// Function to add a new product
function addProduct(product) {
  // Validate required fields
  if (!product.id || !product.name || !product.category || !product.ageGroup) {
    console.error("Product is missing required fields");
    return false;
  }

  // Check if product with this ID already exists
  const existingProductIndex = window.siteConfig.products.findIndex(
    (p) => p.id === product.id
  );

  if (existingProductIndex >= 0) {
    // Update existing product
    window.siteConfig.products[existingProductIndex] = product;
    return true;
  } else {
    // Add new product
    window.siteConfig.products.push(product);
    return true;
  }
}

// Function to remove a product
function removeProduct(productId) {
  const initialLength = window.siteConfig.products.length;
  window.siteConfig.products = window.siteConfig.products.filter(
    (p) => p.id !== productId
  );
  return window.siteConfig.products.length !== initialLength;
}

// Function to get products with optional filtering
function getProducts(filters = {}) {
  let filteredProducts = [...window.siteConfig.products];

  // Apply category filter
  if (filters.category && filters.category !== "all") {
    filteredProducts = filteredProducts.filter(
      (p) => p.category === filters.category
    );
  }

  // Apply age group filter
  if (filters.ageGroup && filters.ageGroup !== "all") {
    filteredProducts = filteredProducts.filter(
      (p) => p.ageGroup === filters.ageGroup
    );
  }

  // Apply material filter
  if (filters.material && filters.material !== "all") {
    filteredProducts = filteredProducts.filter(
      (p) => p.material === filters.material
    );
  }

  // Apply style filter
  if (filters.style && filters.style !== "all") {
    filteredProducts = filteredProducts.filter(
      (p) => p.style === filters.style
    );
  }

  // Apply featured filter
  if (filters.featured === true) {
    filteredProducts = filteredProducts.filter((p) => p.featured === true);
  }

  return filteredProducts;
}

// Expose product management functions to global scope
window.addProduct = addProduct;
window.removeProduct = removeProduct;
window.getProducts = getProducts;

// Make sure product management functions are available globally
window.initializeSiteConfig = initializeSiteConfig;
window.initializeProducts = initializeProducts;

// Initialize siteConfig immediately to ensure it's available for all pages
// Don't wait for DOMContentLoaded to initialize the core configuration
console.log("Initializing siteConfig immediately in script.js");
initializeSiteConfig();

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM content loaded in script.js");
  // Ensure products are initialized
  if (!window.siteConfig.products || window.siteConfig.products.length === 0) {
    console.log(
      "Products not initialized in DOMContentLoaded, initializing them"
    );
    initializeProducts();
  }

  // Debug: Check if products are initialized
  console.log("After initialization in DOMContentLoaded:");
  console.log("window.siteConfig:", window.siteConfig);
  console.log("window.siteConfig.products:", window.siteConfig.products);
  console.log(
    "window.siteConfig.products.length:",
    window.siteConfig.products.length
  );
  console.log("window.siteConfig.categories:", window.siteConfig.categories);

  // No longer loading dynamic configuration from localStorage
  // Static configuration will be used instead
  // Header scroll effect
  const header = document.querySelector("header");
  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add scrolled class for styling
    if (scrollTop > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Hide/show header on scroll (optional)
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down
      header.style.transform = "translateY(-100%)";
    } else {
      // Scrolling up
      header.style.transform = "translateY(0)";
    }

    lastScrollTop = scrollTop;
  });

  // Bottom Navigation Bar Functionality
  const bottomNavItems = document.querySelectorAll(".bottom-nav-item");

  bottomNavItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      // Remove active class from all items
      bottomNavItems.forEach((navItem) => {
        navItem.classList.remove("active");
      });

      // Add active class to clicked item
      this.classList.add("active");

      // If the link is to a section on the same page, handle smooth scrolling
      const href = this.getAttribute("href");
      if (href.startsWith("#") && href.length > 1) {
        e.preventDefault();
        const targetSection = document.querySelector(href);
        if (targetSection) {
          // Close mobile menu if open
          if (document.body.classList.contains("menu-open")) {
            closeMobileMenu();
          }

          // Scroll to the section
          window.scrollTo({
            top: targetSection.offsetTop - 80, // Adjust for header height
            behavior: "smooth",
          });
        }
      }
    });
  });

  // Set active bottom nav item based on scroll position and handle hide/show animation
  let lastScrollY = 0;
  const bottomNav = document.querySelector(".bottom-nav");

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;

    // Hide/show bottom nav based on scroll direction
    if (scrollPosition > lastScrollY && scrollPosition > 150) {
      // Scrolling down - hide the bottom nav
      bottomNav.style.transform = "translateY(100%)";
    } else {
      // Scrolling up or at top - show the bottom nav
      bottomNav.style.transform = "translateY(0)";
    }

    // Update last scroll position
    lastScrollY = scrollPosition > 0 ? scrollPosition : 0;

    // Get all sections that have an ID
    const sections = document.querySelectorAll("section[id]");

    // Find the section that is currently in view
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100; // Adjust for header height
      const sectionHeight = section.offsetHeight;
      const sectionId = "#" + section.getAttribute("id");

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        // Find the corresponding nav item and make it active
        bottomNavItems.forEach((item) => {
          if (item.getAttribute("href") === sectionId) {
            bottomNavItems.forEach((navItem) =>
              navItem.classList.remove("active")
            );
            item.classList.add("active");
          }
        });
      }
    });

    // Special case for home (when at the top of the page)
    if (scrollPosition < 100) {
      bottomNavItems.forEach((item) => {
        if (item.getAttribute("href") === "#") {
          bottomNavItems.forEach((navItem) =>
            navItem.classList.remove("active")
          );
          item.classList.add("active");
        }
      });
    }
  });

  // Enhanced Mobile Menu Toggle Functionality
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileMenuOverlay = document.querySelector(".mobile-menu-overlay");
  const body = document.body;

  if (mobileMenuBtn && mobileNav) {
    // Toggle mobile menu
    mobileMenuBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleMobileMenu();
    });

    // Close mobile menu when clicking overlay
    if (mobileMenuOverlay) {
      mobileMenuOverlay.addEventListener("click", function () {
        closeMobileMenu();
      });
    }

    // Close mobile menu when clicking on a link
    const mobileNavLinks = mobileNav.querySelectorAll("a");
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", function () {
        closeMobileMenu();
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", function (e) {
      if (!mobileMenuBtn.contains(e.target) && !mobileNav.contains(e.target)) {
        closeMobileMenu();
      }
    });

    // Close mobile menu on escape key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && mobileNav.classList.contains("active")) {
        closeMobileMenu();
      }
    });

    // Close mobile menu on window resize (if screen becomes large)
    window.addEventListener("resize", function () {
      if (window.innerWidth > 1024 && mobileNav.classList.contains("active")) {
        closeMobileMenu();
      }
    });

    function toggleMobileMenu() {
      mobileMenuBtn.classList.toggle("active");
      mobileNav.classList.toggle("active");
      if (mobileMenuOverlay) {
        mobileMenuOverlay.classList.toggle("active");
      }
      body.classList.toggle("menu-open");

      // Add entrance animation for menu items
      if (mobileNav.classList.contains("active")) {
        // Reset animations before applying new ones
        const menuItems = mobileNav.querySelectorAll("li");
        menuItems.forEach((item) => {
          item.classList.remove("animate-in");
          // Force reflow to restart animation
          void item.offsetWidth;
        });

        // Apply animations with a slight delay
        setTimeout(() => {
          animateMenuItems();
        }, 50);
      }
    }

    function closeMobileMenu() {
      mobileMenuBtn.classList.remove("active");
      mobileNav.classList.remove("active");
      if (mobileMenuOverlay) {
        mobileMenuOverlay.classList.remove("active");
      }
      body.classList.remove("menu-open");
    }

    function animateMenuItems() {
      const menuItems = mobileNav.querySelectorAll("li");
      menuItems.forEach((item, index) => {
        // Set custom property for staggered animation
        item.style.setProperty("--item-index", index);
        // Add animation class
        item.classList.add("animate-in");
      });
    }
  }

  // Apply dynamic images from site configuration
  function applyDynamicImages() {
    // Make sure siteConfig is initialized
    if (typeof window.siteConfig === "undefined") {
      console.error("siteConfig is not initialized");
      return;
    }

    // Apply home banner image
    const heroSection = document.querySelector(".hero");
    if (heroSection) {
      heroSection.style.backgroundImage = `linear-gradient(135deg, rgba(26, 26, 46, 0.8), rgba(139, 38, 53, 0.8)), url('${window.siteConfig.siteImages.homeBanner}')`;
    }

    // Apply collections banner image
    const collectionsBanner = document.querySelector(".collections-banner");
    if (collectionsBanner) {
      collectionsBanner.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${window.siteConfig.siteImages.collectionsBanner}')`;
    }

    // Apply category banner images
    const categoryBanners = document.querySelectorAll("[data-category-banner]");
    if (categoryBanners.length > 0) {
      categoryBanners.forEach((banner) => {
        const category = banner.getAttribute("data-category-banner");
        if (
          category &&
          window.siteConfig.siteImages.categoryBanners[category]
        ) {
          banner.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${window.siteConfig.siteImages.categoryBanners[category]}')`;
        }
      });
    }

    // Apply age group images
    const ageGroupCards = document.querySelectorAll(
      ".age-group-card .age-group-image img"
    );
    if (ageGroupCards.length > 0) {
      ageGroupCards.forEach((img) => {
        const ageGroup = img
          .closest(".age-group-card")
          .getAttribute("data-age-group");
        if (ageGroup && window.siteConfig.ageGroups[ageGroup]) {
          img.src = window.siteConfig.ageGroups[ageGroup].image;
          img.alt = window.siteConfig.ageGroups[ageGroup].altText;
        }
      });
    }

    // Apply browse categories background
    const modalLeft = document.querySelector(".modal-left");
    if (modalLeft) {
      modalLeft.style.setProperty(
        "--pattern-bg",
        `url('${window.siteConfig.siteImages.browseCategoriesBg}')`
      );
    }
  }

  // DYNAMIC CONFIGURATION SYSTEM
  // This centralized configuration makes it easy to add new categories, age groups, and items

  // Note: Main initializeSiteConfig function is defined at the top of this file
  // This comment block is kept for documentation purposes

  // Initialize the siteConfig object with default values
  window.siteConfig = {
    // Global Site Images Configuration
    siteImages: {
      // Home page banner image
      homeBanner: "images/BannerHero.jpg",
      // Collections page banner image
      collectionsBanner: "images/collections-banner.jpg",
      // Category page banners
      categoryBanners: {
        wedding: "images/wedding-banner.svg",
        casual: "images/casual-banner.svg",
        maggam: "images/maggam-banner.svg",
        designer: "images/designer-banner.svg",
      },
      // Browse categories background image
      browseCategoriesBg: "images/pattern-bg.svg",
      // Default product image (used as fallback)
      defaultProductImage: "images/product-1.svg",
    },
    // Age Groups Configuration
    ageGroups: {
      women: {
        title: "Women Categories",
        displayName: "Women",
        description: "Elegant designs for women",
        image: "images/home-imgs/wedding.jpg",
        altText: "Women Collection",
      },
      kids: {
        title: "Kids Categories",
        displayName: "Kids",
        description: "Adorable styles for little ones",
        image: "images/home-imgs/casual-blouse.jpg",
        altText: "Kids Collection",
      },
      teens: {
        title: "Teens Categories",
        displayName: "Teens",
        description: "Trendy styles for teenagers",
        image: "images/home-imgs/teens.jpg",
        altText: "Teens Collection",
        visibility: false,
      },
    },

    // Categories Configuration
    categories: {
      wedding: {
        name: "Wedding Blouses",
        description: "Elegant bridal designs",
        storyImage: "images/home-imgs/wedding.jpg",
        storyLabel: "Wedding",
        // Wedding now has pages for different age groups
        isSinglePage: false,
        // Available for which age groups
        availableFor: ["women", "teens"],
        // URL patterns for different age groups
        urlPatterns: {
          women: "wedding.html",
          teens: "wedding-teens.html",
          kids: "wedding-kids.html",
        },
        // Visibility flag for this category
        visibility: true,
      },
      casual: {
        name: "Casual Blouses",
        description: "Everyday comfort & style",
        storyImage: "images/home-imgs/casual-blouse.jpg",
        storyLabel: "Casual",
        isSinglePage: false,
        // Available for which age groups
        availableFor: ["women", "kids", "teens"],
        // URL patterns for different age groups
        urlPatterns: {
          women: "casual-women.html",
          kids: "casual-kids.html",
          teens: "casual-teens.html",
        },
        // Visibility flag for this category
        visibility: true,
      },
      maggam: {
        name: "Maggam Work",
        description: "Traditional embroidery",
        storyImage: "images/home-imgs/maggam.jpg",
        storyLabel: "Maggam",
        isSinglePage: false,
        availableFor: ["women", "kids", "teens"],
        urlPatterns: {
          women: "maggam-women.html",
          kids: "maggam-kids.html",
          teens: "maggam-teens.html",
        },
        // Visibility flag for this category
        visibility: true,
      },
      designer: {
        name: "Designer Blouses",
        description: "Exclusive couture pieces",
        storyImage: "images/designer-blouses.svg",
        storyLabel: "Designer",
        isSinglePage: false,
        availableFor: ["women", "kids", "teens"],
        urlPatterns: {
          women: "designer-women.html",
          kids: "designer-kids.html",
          teens: "designer-teens.html",
        },
        // Visibility flag for this category
        visibility: true,
      },
      party: {
        name: "Party Wear",
        description: "Festive celebration attire",
        storyImage: "images/home-imgs/party.jpg",
        storyLabel: "Party Wear",
        isSinglePage: false,
        availableFor: ["women", "kids", "teens"],
        urlPatterns: {
          women: "party-women.html",
          kids: "party-kids.html",
          teens: "party-teens.html",
        },
        // Visibility flag for this category
        visibility: false,
      },
      // To add more categories, simply add them here following the same pattern
    },
  };

  // DYNAMIC DATA GENERATION FUNCTIONS

  // Generate category data for each age group
  function generateCategoryData() {
    const categoryData = {};

    Object.keys(siteConfig.ageGroups).forEach((ageGroup) => {
      const ageGroupConfig = siteConfig.ageGroups[ageGroup];

      // Skip age groups that are not visible
      if (ageGroupConfig.visibility === false) {
        return;
      }

      const categories = [];

      Object.keys(siteConfig.categories).forEach((categoryKey) => {
        const categoryConfig = siteConfig.categories[categoryKey];

        // Skip categories that are not visible
        if (categoryConfig.visibility === false) {
          return;
        }

        // Check if this category is available for this age group
        if (categoryConfig.availableFor.includes(ageGroup)) {
          let url;
          if (categoryConfig.isSinglePage) {
            url = categoryConfig.singlePageUrl;
          } else {
            url = categoryConfig.urlPatterns[ageGroup];
          }

          categories.push({
            name: categoryConfig.name,
            description: categoryConfig.description,
            url: url,
          });
        }
      });

      categoryData[ageGroup] = {
        title: ageGroupConfig.title,
        categories: categories,
      };
    });

    return categoryData;
  }

  // Generate story mappings dynamically
  function generateStoryMappings() {
    const storyMappings = {};

    Object.keys(siteConfig.categories).forEach((categoryKey) => {
      const categoryConfig = siteConfig.categories[categoryKey];

      // Skip categories that are not visible
      if (categoryConfig.visibility === false) {
        return;
      }

      if (categoryConfig.isSinglePage) {
        storyMappings[categoryKey] = categoryConfig.singlePageUrl;
      } else {
        storyMappings[categoryKey] = "#"; // Will show modal to choose age group
      }
    });

    return storyMappings;
  }

  // Generate category selection options for story items
  function generateCategorySelectionOptions(categoryKey) {
    const categoryConfig = siteConfig.categories[categoryKey];

    // Skip if category is not visible
    if (categoryConfig.visibility === false) {
      return [];
    }

    const options = [];

    categoryConfig.availableFor.forEach((ageGroup) => {
      const ageGroupConfig = siteConfig.ageGroups[ageGroup];

      // Skip age groups that are not visible
      if (ageGroupConfig.visibility === false) {
        return;
      }

      let url;

      if (categoryConfig.isSinglePage) {
        url = categoryConfig.singlePageUrl;
      } else {
        url = categoryConfig.urlPatterns[ageGroup];
      }

      options.push({
        name: `${ageGroupConfig.displayName} ${categoryConfig.name}`,
        description: `${ageGroupConfig.description} - ${categoryConfig.description}`,
        url: url,
      });
    });

    return options;
  }

  // Initialize dynamic data
  const categoryData = generateCategoryData();
  const storyMappings = generateStoryMappings();

  // DYNAMIC HTML GENERATION FUNCTIONS

  // Generate age group cards dynamically
  function generateAgeGroupCards() {
    const container = document.getElementById("ageGroupContainer");
    if (!container) return;

    container.innerHTML = "";

    Object.keys(siteConfig.ageGroups).forEach((ageGroupKey) => {
      const ageGroupConfig = siteConfig.ageGroups[ageGroupKey];

      // Skip age groups that are not visible
      if (ageGroupConfig.visibility === false) {
        return;
      }

      const cardElement = document.createElement("div");
      cardElement.className = "age-group-card";
      cardElement.setAttribute("data-age-group", ageGroupKey);

      cardElement.innerHTML = `
                <div class="age-group-image">
                    <img src="${ageGroupConfig.image}" alt="${ageGroupConfig.altText}" />
                    <div class="age-group-overlay">
                        <h3>${ageGroupConfig.displayName}</h3>
                        <p>${ageGroupConfig.description}</p>
                    </div>
                </div>
            `;

      container.appendChild(cardElement);
    });
  }

  // Generate story items dynamically
  function generateStoryItems() {
    const container = document.getElementById("categoryStoriesContainer");
    if (!container) return;

    container.innerHTML = "";

    Object.keys(siteConfig.categories).forEach((categoryKey) => {
      const categoryConfig = siteConfig.categories[categoryKey];

      // Skip categories that are not visible
      if (categoryConfig.visibility === false) {
        return;
      }

      // Get image from siteConfig.siteImages.categoryStories if available, otherwise fallback to category config
      const storyImage =
        siteConfig.siteImages.categoryStories &&
        siteConfig.siteImages.categoryStories[categoryKey]
          ? siteConfig.siteImages.categoryStories[categoryKey]
          : categoryConfig.storyImage;

      const storyElement = document.createElement("div");
      storyElement.className = "story-item";
      storyElement.setAttribute("data-category", categoryKey);

      storyElement.innerHTML = `
                <div class="story-circle">
                    <img src="${storyImage}" alt="${categoryConfig.storyLabel}" />
                </div>
                <span class="story-label">${categoryConfig.storyLabel}</span>
            `;

      container.appendChild(storyElement);
    });
  }

  // Initialize dynamic HTML
  generateAgeGroupCards();
  generateStoryItems();

  // Modern Category System Functionality
  const categoryModal = document.getElementById("categoryModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalCategories = document.getElementById("modalCategories");
  const closeModal = document.getElementById("closeModal");

  // Age group card click handlers (using event delegation for dynamic elements)
  document.addEventListener("click", function (e) {
    if (e.target.closest(".age-group-card")) {
      const card = e.target.closest(".age-group-card");
      const group = card.getAttribute("data-age-group");
      const data = categoryData[group];

      if (data) {
        showCategoryModal(data);
      }
    }
  });

  // Story item click handlers (using event delegation for dynamic elements)
  document.addEventListener("click", function (e) {
    if (e.target.closest(".story-item")) {
      const item = e.target.closest(".story-item");
      const category = item.getAttribute("data-category");
      const url = storyMappings[category];

      if (url === "#") {
        // Show modal for categories that have multiple age group variants
        const options = generateCategorySelectionOptions(category);
        const categoryConfig = siteConfig.categories[category];
        showCategorySelectionModal(categoryConfig.name, options);
      } else {
        // Direct navigation for single-page categories
        window.location.href = url;
      }
    }
  });

  // Premium Modal functions
  function showCategoryModal(data) {
    modalTitle.textContent = data.title;
    document.querySelector(".modal-subtitle").textContent =
      data.subtitle || "Explore our exclusive collection";
    modalCategories.innerHTML = "";

    data.categories.forEach((category) => {
      const categoryElement = document.createElement("div");
      categoryElement.className = "modal-category-item";
      categoryElement.innerHTML = `
                <div class="hover-effect"></div>
                <h4>${category.name}</h4>
                <p>${category.description}</p>
            `;
      categoryElement.addEventListener("click", function () {
        // Add a visual feedback before navigation
        this.classList.add("clicked");
        setTimeout(() => {
          window.location.href = category.url;
        }, 150); // Short delay for the animation to be visible
      });
      modalCategories.appendChild(categoryElement);
    });

    // Update modal footer note if provided
    const modalNote = document.querySelector(".modal-note");
    if (modalNote && data.note) {
      modalNote.textContent = data.note;
    }

    // Update action button if provided
    const actionBtn = document.querySelector(".modal-left .modal-action-btn");

    // Set button text and URL
    if (actionBtn) {
      actionBtn.textContent = data.actionText || "View All Collections";
      actionBtn.href = data.actionUrl || "all-collections.html";
    }

    categoryModal.classList.add("active");
    document.body.style.overflow = "hidden";

    // Add entrance animation
    setTimeout(() => {
      document.querySelector(".modal-content").style.transform = "scale(1)";
    }, 10);
  }

  function showCategorySelectionModal(title, categories, subtitle) {
    modalTitle.textContent = title;
    document.querySelector(".modal-subtitle").textContent =
      subtitle || "Explore our exclusive collection";
    modalCategories.innerHTML = "";

    categories.forEach((category) => {
      const categoryElement = document.createElement("div");
      categoryElement.className = "modal-category-item";
      categoryElement.innerHTML = `
                <div class="hover-effect"></div>
                <h4>${category.name}</h4>
                <p>${category.description}</p>
            `;
      categoryElement.addEventListener("click", function () {
        // Add a visual feedback before navigation
        this.classList.add("clicked");
        setTimeout(() => {
          window.location.href = category.url;
        }, 150); // Short delay for the animation to be visible
      });
      modalCategories.appendChild(categoryElement);
    });

    // Set the action button to navigate to all-collections.html
    const actionBtn = document.querySelector(".modal-left .modal-action-btn");

    if (actionBtn) {
      actionBtn.textContent = "View All Collections";
      actionBtn.href = "all-collections.html";
    }

    categoryModal.classList.add("active");
    document.body.style.overflow = "hidden";

    // Add entrance animation
    setTimeout(() => {
      document.querySelector(".modal-content").style.transform = "scale(1)";
    }, 10);
  }

  // Close modal handlers
  if (closeModal) {
    closeModal.addEventListener("click", closeCategoryModal);
  }

  if (categoryModal) {
    categoryModal.addEventListener("click", function (e) {
      if (e.target === categoryModal) {
        closeCategoryModal();
      }
    });
  }

  function closeCategoryModal() {
    if (categoryModal) {
      // Add exit animation
      const modalContent = document.querySelector(".modal-content");
      modalContent.style.transform = "scale(0.9)";

      // Delay removing the active class to allow for animation
      setTimeout(() => {
        categoryModal.classList.remove("active");
        document.body.style.overflow = "auto";
      }, 300);
    }
  }

  // Close modal on escape key
  document.addEventListener("keydown", function (e) {
    if (
      e.key === "Escape" &&
      categoryModal &&
      categoryModal.classList.contains("active")
    ) {
      closeCategoryModal();
    }
  });

  // Floating WhatsApp Chat Button Functionality
  const floatingWhatsApp = document.querySelector(".floating-whatsapp");
  const whatsappBubble = document.querySelector(".whatsapp-bubble");
  const whatsappIcon = document.querySelector(".whatsapp-icon");
  const chatNowBtn = document.querySelector(".bubble-action.chat-now");
  const closeBubbleBtn = document.querySelector(".bubble-action.close-bubble");

  // Only initialize WhatsApp functionality if the elements exist
  if (floatingWhatsApp && whatsappBubble && whatsappIcon) {
    // Create a style element to manipulate the notification badge
    const notificationStyle = document.createElement("style");
    document.head.appendChild(notificationStyle);

    // WhatsApp URL with pre-filled message
    const whatsappUrl =
      "https://wa.me/917675971677?text=Hi,%20I%20visited%20your%20website%20and%20I%27m%20interested%20in%20your%20designs.";

    // Function to show the chat bubble
    function showBubble() {
      whatsappBubble.classList.add("show");
    }

    // Function to hide the chat bubble
    function hideBubble() {
      whatsappBubble.classList.remove("show");
    }

    // Function to hide the notification badge
    function hideNotificationBadge() {
      notificationStyle.textContent =
        ".whatsapp-icon::after { display: none; }";
    }

    // Show the chat bubble after a short delay when page loads
    const showBubbleTimeout = setTimeout(function () {
      showBubble();
    }, 2000);

    // Hide the bubble after 10 seconds if user doesn't interact with it
    const autohideTimeout = setTimeout(function () {
      hideBubble();
    }, 12000);

    // Open WhatsApp chat when clicking the Chat Now button
    if (chatNowBtn) {
      chatNowBtn.addEventListener("click", function () {
        hideNotificationBadge();
        window.open(whatsappUrl, "_blank");
      });
    }

    // Close the bubble when clicking the Close button
    if (closeBubbleBtn) {
      closeBubbleBtn.addEventListener("click", function (e) {
        e.stopPropagation(); // Prevent bubble click event from firing
        hideBubble();
        // Clear the autohide timeout since user manually closed it
        clearTimeout(autohideTimeout);
      });
    }

    hideNotificationBadge();
  }

  // Toggle the chat bubble when clicking on the WhatsApp icon
  if (whatsappIcon) {
    whatsappIcon.addEventListener("click", function () {
      // Hide notification badge on first interaction
      hideNotificationBadge();

      if (whatsappBubble.classList.contains("show")) {
        // If bubble is shown, open WhatsApp
        window.open(whatsappUrl, "_blank");
      } else {
        // If bubble is hidden, show it
        showBubble();
      }
    });
  }

  // Prevent the bubble from closing when clicking inside it (except for the close button)
  if (whatsappBubble) {
    whatsappBubble.addEventListener("click", function (e) {
      // Only prevent if it's not the close button
      if (!e.target.classList.contains("close-bubble")) {
        e.stopPropagation();
      }
    });
  }

  // Smooth scrolling for navigation links
  const allNavLinks = document.querySelectorAll(
    "nav a, .hero a, .footer-links a"
  );

  allNavLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Only apply to links that start with #
      if (this.getAttribute("href").startsWith("#")) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 80, // Offset for header
            behavior: "smooth",
          });
        }
      }
    });
  });

  // Active navigation link highlighting
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    allNavLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // Newsletter form submission
  const newsletterForm = document.querySelector(".newsletter-form");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();

      if (email) {
        // Here you would typically send this to a server
        // For now, we'll just show an alert
        alert(
          `Thank you for subscribing with ${email}! We'll keep you updated with our latest designs.`
        );
        emailInput.value = "";
      }
    });
  }

  // Design card details view
  const designCards = document.querySelectorAll(".design-card");

  designCards.forEach((card) => {
    const viewDetailsBtn = card.querySelector(".view-details");

    if (viewDetailsBtn) {
      viewDetailsBtn.addEventListener("click", function (e) {
        e.preventDefault();

        const designTitle = card.querySelector(".design-info h3").textContent;
        const designDesc = card.querySelector(".design-info p").textContent;
        const designImg = card.querySelector(".design-image img").src;

        // Create modal for design details
        const modal = document.createElement("div");
        modal.classList.add("design-modal");

        // Generate multiple image paths for the slider
        // In a real implementation, these would come from a database or product data
        // For now, we'll create variations based on the original image
        const imagePath = designImg.substring(0, designImg.lastIndexOf("."));
        const imageExt = designImg.substring(designImg.lastIndexOf("."));

        // Create array of image paths (original + variations)
        const imagePaths = [
          designImg,
          // For demo purposes, we'll use the same image multiple times
          // In a real implementation, these would be different angles/views
          designImg,
          designImg,
          designImg,
        ];

        modal.innerHTML = `
                    <div class="modal-content">
                        <span class="close-modal">&times;</span>
                        <div class="modal-image-slider">
                            <div class="slider-container">
                                <div class="slider-track">
                                    ${imagePaths
                                      .map(
                                        (img) => `
                                        <div class="slider-item">
                                            <img src="${img}" alt="${designTitle}">
                                        </div>
                                    `
                                      )
                                      .join("")}
                                </div>
                                <button class="slider-nav prev">&lt;</button>
                                <button class="slider-nav next">&gt;</button>
                                <div class="slider-dots">
                                    ${imagePaths
                                      .map(
                                        (_, index) => `
                                        <span class="slider-dot${
                                          index === 0 ? " active" : ""
                                        }" data-index="${index}"></span>
                                    `
                                      )
                                      .join("")}
                                </div>
                            </div>
                        </div>
                        <div class="modal-info">
                            <h3>${designTitle}</h3>
                            <p>${designDesc}</p>
                            <div class="modal-details">
                                <p><strong>Style:</strong> Contemporary</p>
                                <p><strong>Material:</strong> Premium Silk</p>
                                <p><strong>Work Type:</strong> Hand Embroidery</p>
                                <p><strong>Customization:</strong> Available</p>
                            </div>
                            <a href="https://wa.me/917675971677?text=I'm%20interested%20in%20the%20${encodeURIComponent(
                              designTitle
                            )}" class="whatsapp-btn modal-whatsapp-btn">
                                <i class="fab fa-whatsapp"></i> Inquire on WhatsApp
                            </a>
                        </div>
                    </div>
                `;

        document.body.appendChild(modal);
        document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open

        // Initialize slider functionality
        const sliderTrack = modal.querySelector(".slider-track");
        const sliderItems = modal.querySelectorAll(".slider-item");
        const prevBtn = modal.querySelector(".slider-nav.prev");
        const nextBtn = modal.querySelector(".slider-nav.next");
        const sliderDots = modal.querySelectorAll(".slider-dot");

        let currentSlide = 0;
        const slideCount = sliderItems.length;

        // Function to update slider position
        function updateSlider() {
          // Update slider track position
          sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

          // Update active dot
          sliderDots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentSlide);
          });
        }

        // Event listeners for slider navigation
        prevBtn.addEventListener("click", function () {
          currentSlide = (currentSlide - 1 + slideCount) % slideCount;
          updateSlider();
        });

        nextBtn.addEventListener("click", function () {
          currentSlide = (currentSlide + 1) % slideCount;
          updateSlider();
        });

        // Event listeners for slider dots
        sliderDots.forEach((dot, index) => {
          dot.addEventListener("click", function () {
            currentSlide = index;
            updateSlider();
          });
        });

        // Close modal functionality
        const closeBtn = modal.querySelector(".close-modal");
        closeBtn.addEventListener("click", function () {
          document.body.removeChild(modal);
          document.body.style.overflow = "auto";
        });

        // Close modal when clicking outside
        modal.addEventListener("click", function (e) {
          if (e.target === modal) {
            document.body.removeChild(modal);
            document.body.style.overflow = "auto";
          }
        });
      });
    }
  });

  // Add modal styles dynamically
  const modalStyles = document.createElement("style");
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
            padding: 20px;
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
            background-color: rgba(255, 255, 255, 0.8);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
        }
        
        .close-modal:hover {
            background-color: #d4af37;
            color: white;
            transform: rotate(90deg);
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
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            width: 100%;
            margin-top: 10px;
        }
        
        .modal-whatsapp-btn i {
            margin-right: 10px;
            font-size: 1.3rem;
        }
        
        .modal-whatsapp-btn:hover {
            background-color: #1da851;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
            transform: translateY(-2px);
        }
    `;

  document.head.appendChild(modalStyles);
});

// Premium JavaScript Enhancements
document.addEventListener("DOMContentLoaded", function () {
  // Header scroll effect
  const header = document.querySelector("header");
  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    lastScrollTop = scrollTop;
  });

  // Enhanced Mobile Menu

  // Enhanced Category Modal
  const ageGroupCards = document.querySelectorAll(".age-group-card");
  const categoryModal = document.querySelector(".category-modal");
  const closeModal = document.querySelector(".close-modal");
  const modalContent = document.querySelector(".modal-content");

  ageGroupCards.forEach((card) => {
    card.addEventListener("click", function () {
      const ageGroup = this.getAttribute("data-age-group");
      const modalTitle = document.querySelector(".modal-header h3");

      if (modalTitle) {
        modalTitle.textContent =
          ageGroup === "women" ? "Women Collection" : "Kids Collection";
      }

      categoryModal.classList.add("active");
      document.body.style.overflow = "hidden";

      // Animate modal content
      setTimeout(() => {
        modalContent.style.transform = "scale(1)";
      }, 10);
    });
  });

  function closeCategoryModal() {
    modalContent.style.transform = "scale(0.9)";
    setTimeout(() => {
      categoryModal.classList.remove("active");
      document.body.style.overflow = "";
    }, 200);
  }

  if (closeModal) {
    closeModal.addEventListener("click", closeCategoryModal);
  }

  if (categoryModal) {
    categoryModal.addEventListener("click", function (e) {
      if (e.target === categoryModal) {
        closeCategoryModal();
      }
    });
  }

  // Enhanced WhatsApp Chat
  const whatsappIcon = document.querySelector(".whatsapp-icon");
  const whatsappBubble = document.querySelector(".whatsapp-bubble");
  const closeBubbleBtn = document.querySelector(".close-bubble");
  const chatNowBtn = document.querySelector(".chat-now");

  if (whatsappIcon && whatsappBubble) {
    whatsappIcon.addEventListener("click", function () {
      whatsappBubble.classList.add("show");
    });

    if (closeBubbleBtn) {
      closeBubbleBtn.addEventListener("click", function () {
        whatsappBubble.classList.remove("show");
      });
    }

    if (chatNowBtn) {
      chatNowBtn.addEventListener("click", function () {
        const phoneNumber = "+919876543210"; // Replace with actual number
        const message =
          "Hi! I'm interested in your blouse designs. Can you help me?";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          message
        )}`;
        window.open(whatsappUrl, "_blank");
      });
    }
  }

  // Enhanced Back to Top Button
  const backToTopBtn = document.querySelector(".back-to-top");

  if (backToTopBtn) {
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    });

    backToTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // Enhanced Product Filtering
  const filterBtns = document.querySelectorAll(".filter-btn");
  const productCards = document.querySelectorAll(".product-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter");

      // Update active button
      filterBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      // Filter products with animation
      productCards.forEach((card) => {
        const category = card.getAttribute("data-category");

        if (filter === "all" || category === filter) {
          card.style.display = "block";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 50);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(20px)";
          setTimeout(() => {
            card.style.display = "none";
          }, 300);
        }
      });
    });
  });

  // Enhanced Product Card Interactions
  productCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

  // Enhanced Form Interactions
  const newsletterForm = document.querySelector(".newsletter-form");
  const newsletterInput = document.querySelector(".newsletter-form input");

  if (newsletterForm && newsletterInput) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = newsletterInput.value.trim();
      if (email) {
        // Add success animation
        const submitBtn = this.querySelector(".btn");
        const originalText = submitBtn.textContent;

        submitBtn.textContent = "Subscribed!";
        submitBtn.style.background =
          "linear-gradient(135deg, #25D366, #128C7E)";

        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.style.background = "";
          newsletterInput.value = "";
        }, 2000);
      }
    });
  }

  // Enhanced Loading Animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animateElements = document.querySelectorAll(
    ".design-card, .age-group-card, .story-item, .product-card"
  );
  animateElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

  // Enhanced Category Stories (using dynamic configuration)
  // Note: This section is now handled by the dynamic story item handlers above

  // Enhanced Modal Category Items (using dynamic configuration)
  // Note: Modal category items are now dynamically generated and handled by the modal functions above

  // Enhanced WhatsApp Order Buttons
  const whatsappOrderBtns = document.querySelectorAll(".whatsapp-order-btn");

  whatsappOrderBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      const productName =
        this.closest(".product-card").querySelector("h3").textContent;
      const phoneNumber = "+919876543210"; // Replace with actual number
      const message = `Hi! I'm interested in ordering: ${productName}. Can you provide more details?`;
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;

      window.open(whatsappUrl, "_blank");
    });
  });

  // Enhanced Order Buttons
  const orderBtns = document.querySelectorAll(".order-btn");

  orderBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      const productName =
        this.closest(".product-card").querySelector("h3").textContent;
      const phoneNumber = "+919876543210"; // Replace with actual number
      const message = `Hi! I would like to place an order for: ${productName}. Please help me with the ordering process.`;
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;

      window.open(whatsappUrl, "_blank");
    });
  });

  // Enhanced View Details Buttons
  const viewDetailsBtns = document.querySelectorAll(".view-details");

  viewDetailsBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      const productCard = this.closest(".design-card");
      const productName = productCard.querySelector("h3").textContent;

      // Add your product detail view logic here
      console.log("Viewing details for:", productName);
    });
  });

  // Enhanced View Product Buttons
  const viewProductBtns = document.querySelectorAll(".view-product");

  viewProductBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      const productCard = this.closest(".product-card");
      const productName = productCard.querySelector("h3").textContent;

      // Add your product detail view logic here
      console.log("Viewing product:", productName);
    });
  });

  // Enhanced Social Media Links
  const socialLinks = document.querySelectorAll(".social-icon");

  socialLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const platform = this.getAttribute("data-platform");
      const urls = {
        facebook: "https://facebook.com/yourpage",
        instagram: "https://instagram.com/yourpage",
        twitter: "https://twitter.com/yourpage",
        youtube: "https://youtube.com/yourchannel",
      };

      if (urls[platform]) {
        window.open(urls[platform], "_blank");
      }
    });
  });

  // Enhanced Performance: Lazy Loading for Images
  const images = document.querySelectorAll("img[data-src]");

  const imageObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));

  // Enhanced Accessibility
  document.addEventListener("keydown", function (e) {
    // Skip to main content
    if (e.key === "Tab" && e.target === document.body) {
      const mainContent =
        document.querySelector("main") || document.querySelector(".hero");
      if (mainContent) {
        mainContent.focus();
      }
    }
  });

  // Enhanced Touch Interactions for Mobile
  let touchStartY = 0;
  let touchEndY = 0;

  document.addEventListener("touchstart", function (e) {
    touchStartY = e.changedTouches[0].screenY;
  });

  document.addEventListener("touchend", function (e) {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe up - could trigger back to top
        if (window.pageYOffset > 500) {
          backToTopBtn.classList.add("show");
        }
      } else {
        // Swipe down - could hide back to top
        backToTopBtn.classList.remove("show");
      }
    }
  }

  // Enhanced Error Handling
  window.addEventListener("error", function (e) {
    console.error("JavaScript error:", e.error);
  });

  // Enhanced Performance Monitoring
  window.addEventListener("load", function () {
    const loadTime = performance.now();
    console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
  });

  console.log("Premium JavaScript enhancements loaded successfully!");
});
