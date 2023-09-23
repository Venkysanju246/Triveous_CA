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

##  Database
- **Mongo DB**
- The application uses MongoDB as the database system for storing user data, product information, and order history. MongoDB is a NoSQL database that provides flexibility and scalability for managing structured and semi-structured data.


## Technical Highlights

This eCommerce Backend project includes the following notable technical features:

- **Password Hashing:** Securely stores user passwords using bcrypt for enhanced security.

- **Regex Validation:** Utilizes regular expressions (Regex) for data validation, ensuring data integrity, especially checks for length of the phone number.

- **Email Sending:** Sends email notifications for successful registered users.

- **Token Generation:** Generates access tokens for user authentication and authorization.

-  **Cookies** - Implemented cookies for session management and user authentication.

- **OpenAI Integration:** Integrates with OpenAI to enhance product descriptions and correct grammar mistakes in real-time.

## API Documentation

Explore the API endpoints and documentation using Swagger:

- **Swagger Documentation:** [http://localhost:8080/api-docs/#/](http://localhost:8080/api-docs/#/)

This interactive documentation provides detailed information about the available API endpoints, request parameters, and responses. It's a valuable resource for developers and users to understand and interact with your eCommerce Backend API.



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
4. To view Swagger Documentation - 
open - 
```
http://localhost:8080/api-docs/
```

## Demo Working video link 
https://drive.google.com/file/d/1hniExYGN5eOzjZ0mjwcV6zRawrswCkBQ/view?usp=sharing

**You are all set**
