# Dynamic Configuration System Guide

This guide explains how to use the new dynamic configuration system to easily add new categories, age groups, products, and items to your website.

## Overview

The website now uses a centralized configuration system that makes it easy to add new content without modifying multiple files. All configuration is done in the `siteConfig` object in `script.js`. This includes site images, age groups, categories, materials, styles, and products.

## How to Add New Age Groups

### 1. Add to Configuration

In `script.js`, find the `siteConfig.ageGroups` object and add your new age group:

```javascript
ageGroups: {
    women: {
        title: 'Women Categories',
        displayName: 'Women',
        description: 'Elegant designs for women',
        image: 'images/home-imgs/wedding.jpg',
        altText: 'Women Collection'
    },
    kids: {
        title: 'Kids Categories',
        displayName: 'Kids',
        description: 'Adorable styles for little ones',
        image: 'images/home-imgs/casual-blouse.jpg',
        altText: 'Kids Collection'
    },
    // Add your new age group here:
    teens: {
        title: 'Teens Categories',
        displayName: 'Teens',
        description: 'Trendy styles for teenagers',
        image: 'images/home-imgs/teens.jpg',
        altText: 'Teens Collection'
    }
}
```

### 2. Create HTML Files

Create the corresponding HTML files for your new age group:
- `casual-teens.html`
- `designer-teens.html`
- `maggam-teens.html`
- etc.

## How to Add New Categories

### 1. Add to Configuration

In `script.js`, find the `siteConfig.categories` object and add your new category:

```javascript
categories: {
    // ... existing categories ...
    
    // Add your new category here:
    party: {
        name: 'Party Wear',
        description: 'Festive celebration attire',
        storyImage: 'images/home-imgs/party.jpg',
        storyLabel: 'Party',
        isSinglePage: false, // Set to true if it's a single page like wedding
        availableFor: ['women', 'kids'], // Which age groups can access this
        urlPatterns: {
            women: 'party-women.html',
            kids: 'party-kids.html'
        }
    }
}
```

### 2. Create HTML Files

Create the corresponding HTML files:
- `party-women.html`
- `party-kids.html`

### 3. Add Story Image

Add your story image to the `images/home-imgs/` directory.

## Configuration Options

### Age Group Configuration

Each age group has these properties:
- `title`: Modal title when this age group is selected
- `displayName`: Name shown on the card
- `description`: Description shown on the card
- `image`: Image path for the age group card
- `altText`: Alt text for the image

### Category Configuration

Each category has these properties:
- `name`: Full name of the category
- `description`: Description of the category
- `storyImage`: Image path for the story circle
- `storyLabel`: Label shown under the story circle
- `isSinglePage`: `true` if it's a single page (like wedding), `false` if it has age group variants
- `availableFor`: Array of age groups that can access this category
- `singlePageUrl`: URL for single-page categories (only if `isSinglePage` is `true`)
- `urlPatterns`: Object mapping age groups to their URLs (only if `isSinglePage` is `false`)

## Examples

### Adding a New Age Group: "Teens"

1. **Add to configuration:**
```javascript
teens: {
    title: 'Teens Categories',
    displayName: 'Teens',
    description: 'Trendy styles for teenagers',
    image: 'images/home-imgs/teens.jpg',
    altText: 'Teens Collection'
}
```

2. **Update categories to include teens:**
```javascript
casual: {
    // ... existing config ...
    availableFor: ['women', 'kids', 'teens'],
    urlPatterns: {
        women: 'casual-women.html',
        kids: 'casual-kids.html',
        teens: 'casual-teens.html'
    }
}
```

3. **Create HTML files:**
- `casual-teens.html`
- `designer-teens.html`
- `maggam-teens.html`

### Adding a New Category: "Party Wear"

1. **Add to configuration:**
```javascript
party: {
    name: 'Party Wear',
    description: 'Festive celebration attire',
    storyImage: 'images/home-imgs/party.jpg',
    storyLabel: 'Party',
    isSinglePage: false,
    availableFor: ['women', 'kids'],
    urlPatterns: {
        women: 'party-women.html',
        kids: 'party-kids.html'
    }
}
```

2. **Create HTML files:**
- `party-women.html`
- `party-kids.html`

3. **Add story image:**
- Add `party.jpg` to `images/home-imgs/`

## Benefits of This System

1. **Centralized Configuration**: All content is defined in one place, including products
2. **Automatic Generation**: HTML elements are generated automatically
3. **Easy Maintenance**: Adding new content requires minimal code changes
4. **Consistent Structure**: All new content follows the same patterns
5. **Flexible**: Supports both single-page and multi-page categories
6. **Scalable**: Easy to add new age groups, categories, or products
7. **Single Source of Truth**: Products are managed in one location and accessed throughout the site
8. **Simplified Product Management**: Helper functions make it easy to add, remove, and filter products

## What Gets Generated Automatically

- Age group cards on the main page
- Story items in the category stories section
- Modal content for category selection
- Navigation logic for all categories
- Event handlers for all interactive elements
- Product cards in the collections page
- Product filtering based on categories, age groups, materials, and styles
- Product sorting options (featured, name, newest)
- Product detail modals with image sliders

## Troubleshooting

### Modal Not Showing Options
- Check that the category is included in the `availableFor` array for the age group
- Verify that the `urlPatterns` object includes the age group

### Story Item Not Working
- Ensure the category is properly configured in `siteConfig.categories`
- Check that `storyImage` and `storyLabel` are set correctly

### Age Group Card Not Appearing
- Verify the age group is properly configured in `siteConfig.ageGroups`
- Check that the image path is correct

### Products Not Displaying
- Ensure `window.siteConfig.products` is properly initialized in `script.js`
- Check that the `initializeProducts()` function is called
- Verify that products have all required properties (id, name, description, image, category, ageGroup)

### Product Filtering Not Working
- Check that product properties match exactly with filter values (case-sensitive)
- Ensure filter buttons have the correct data attributes
- Verify that the `filterProducts()` function is using `window.siteConfig.products`

## How to Manage Products

### 1. Product Configuration

Products are now managed centrally in the `siteConfig.products` array in `script.js`. The system provides helper functions to add, remove, and retrieve products.

### 2. Adding a New Product

Use the global `addProduct` function to add a new product:

```javascript
addProduct({
    id: 'unique-product-id',
    name: 'Product Name',
    description: 'Product description text',
    image: 'images/products/product-image.jpg',
    category: 'wedding', // Must match an existing category key
    ageGroup: 'women', // Must match an existing age group key
    material: 'silk', // Must match an existing material
    style: 'traditional', // Must match an existing style
    featured: true // Set to true for featured products
});
```

### 3. Removing a Product

Use the global `removeProduct` function to remove a product by its ID:

```javascript
removeProduct('unique-product-id');
```

### 4. Retrieving Products

Use the global `getProducts` function to retrieve products with optional filtering:

```javascript
// Get all products
const allProducts = getProducts();

// Get products with filters
const filteredProducts = getProducts({
    category: 'wedding',
    ageGroup: 'women',
    material: 'silk',
    style: 'traditional',
    featured: true
});
```

## File Structure

```
go/
├── script.js (contains siteConfig with products)
├── all-collections.js (uses siteConfig.products)
├── index.html (uses dynamic containers)
├── all-collections.html (displays all products)
├── casual-women.html
├── casual-kids.html
├── designer-women.html
├── designer-kids.html
├── maggam-women.html
├── maggam-kids.html
├── wedding.html
└── images/
    ├── home-imgs/
    │   ├── wedding.jpg
    │   ├── casual-blouse.jpg
    │   ├── maggam.jpg
    │   └── designer-blouses.svg
    └── products/
        └── (product images)
```

This system makes it incredibly easy to expand your website with new content while maintaining consistency and reducing the chance of errors.