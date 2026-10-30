# Grocery List Manager

## About the Project

Grocery List Manager is a simple web application created using HTML, CSS, and JavaScript. It allows users to create a grocery list, keep track of purchased items, and organize their shopping.

This project was developed for the CSET-105 course at Thaddeus Stevens College of Technology.

## Features

- **Add Products:** Users can add new items to their grocery list.
- **Input Validation:** Prevents users from adding empty items.
- **Mark as Purchased:** Click on an item to mark it as purchased.
- **Move Items:** Purchased items automatically move to the Purchased section.
- **Undo Purchases:** Click a purchased item again to move it back to Pending.
- **Filter Items:** View All, Pending, or Purchased items using the dropdown menu.
- **Automatic Updates:** The lists update when products are added or their status changes.

## Technologies Used

- **HTML5** – Website structure.
- **CSS3** – Styling and layout.
- **JavaScript** – Application functionality and DOM manipulation.

## How to Use

1. Open `index.html` in a web browser.
2. Type a product name in the input box.
3. Click **Add** to add the product.
4. Click on a product to mark it as purchased.
5. Click it again to mark it as pending.
6. Use the **Menu** dropdown to filter between All, Pending, and Purchased.

## Project Files

- `index.html` – Contains the HTML structure.
- `style.css` – Contains the website styling.
- `script.js` – Handles the grocery list functionality.

## How It Works

The application uses a JavaScript array to store grocery items as objects. Each item has a name and a `purchased` property, which can be `true` or `false`.

JavaScript functions handle adding products, changing their purchased status, updating the HTML lists, and filtering items.

## Authors

Developed as a team project for CSET-105.

## Project Status

JavaScript functionality is complete. Final styling and testing may still be needed.
