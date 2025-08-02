# Elegance Boutique Website

## Overview
This is a static boutique website designed to showcase blouse designs and maggam work in a visually rich, e-commerce-like layout. The website does not include any prices or payment system. Instead, users can view different designs by category and click a WhatsApp button below each image, which sends the design info/image to the boutique's WhatsApp for further communication.

## 🚀 Dynamic Configuration System

This website now features a **dynamic configuration system** that makes it incredibly easy to add new categories, age groups, and items. All content is centrally managed through the `siteConfig` object in `script.js`.

### ✨ Key Features

- **Centralized Configuration**: All content defined in one place
- **Automatic HTML Generation**: Elements are generated dynamically
- **Easy Maintenance**: Add new content with minimal code changes
- **Flexible Structure**: Supports both single-page and multi-page categories
- **Scalable Design**: Easy to expand with new age groups or categories

### 📖 Quick Start Guide

See `DYNAMIC_CONFIGURATION_GUIDE.md` for detailed instructions on how to:
- Add new age groups (e.g., "Teens")
- Add new categories (e.g., "Party Wear")
- Configure images and descriptions
- Set up navigation patterns

### 🎯 Example: Adding a New Category

To add a new category like "Party Wear":

1. **Add to configuration** in `script.js`:
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

2. **Create HTML files**: `party-women.html`, `party-kids.html`
3. **Add story image** to `images/home-imgs/`

That's it! The system automatically generates all the necessary HTML elements and navigation logic.

## Features
- Responsive design that works on desktop, tablet, and mobile devices
- Category-based navigation for different types of blouses and maggam work
- Featured designs section on the homepage
- Detailed product pages with WhatsApp inquiry buttons
- About us and contact information sections
- **Dynamic content generation** for easy expansion

## Structure
- `index.html` - Homepage with featured designs and category navigation
- `wedding.html` - Wedding blouses category page
- `casual-women.html` - Women's casual blouses category page
- `casual-kids.html` - Kids' casual blouses category page
- `maggam-women.html` - Women's maggam work category page
- `maggam-kids.html` - Kids' maggam work category page
- `designer-women.html` - Women's designer blouses category page
- `designer-kids.html` - Kids' designer blouses category page
- `styles.css` - Main stylesheet for the website
- `script.js` - JavaScript for interactive elements and dynamic configuration
- `images/` - Directory containing all image assets
- `DYNAMIC_CONFIGURATION_GUIDE.md` - Detailed guide for adding new content

## How to Use
1. Open `index.html` in a web browser to view the website
2. Navigate through different categories using the navigation menu
3. Click on designs to view more details
4. Use the WhatsApp button to inquire about specific designs

## Customization
### Adding New Products
1. Create a new product image and add it to the `images/` directory
2. Add the product to the appropriate category page by copying an existing product card and updating the image source, title, and description

### Adding New Categories or Age Groups
See `DYNAMIC_CONFIGURATION_GUIDE.md` for detailed instructions on how to add new categories and age groups using the dynamic configuration system.

### Updating WhatsApp Contact
The WhatsApp contact number can be updated in the JavaScript file:
1. Open `script.js`
2. Locate the `whatsappNumber` variable
3. Update the phone number (include country code without + symbol)

### Changing Colors and Styles
1. Open `styles.css`
2. Update the color variables in the `:root` section to change the color scheme

## Notes
- This is a static website with no backend or database
- All product images are SVG placeholders and should be replaced with actual product images
- The WhatsApp integration uses the WhatsApp API to open a chat with a predefined message
- The dynamic configuration system makes it easy to add new content without modifying multiple files

## Credits
Designed and developed for Elegance Boutique