# eCommerce Backend

#E-commerce Backend Application Build using Node JS

## Features

- **User Registration and Authentication:** Users can register with their email, password, and phone number. Passwords are securely hashed using the bcrypt module. Authenticated users receive an access token for further authentication.

- **Product Management:** Authenticated users can add products to the platform. **Notably, the application integrates OpenAI to correct mistakes in product descriptions and grammar before storing the corrected data in the database.**

- **Product Queries:**
  - Get all uploaded products by a particular user.
  - Retrieve specific product details.
  - Fetch products based on categories.

- **Shopping Cart:** Users can add items to their shopping cart, view the cart contents, update item quantities, and delete products from the cart.

- **Order Processing:** Users can place orders for items in their cart, and an order history feature is available.

## Installation

Follow these steps to set up the eCommerce Backend locally:

1. Clone the repository

2. Install dependencies using 
```
npm install
```
3. Run the command
```
npm run server
```

**You are all set**
