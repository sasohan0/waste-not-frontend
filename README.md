# 🚀 Waste Not - A Re-commerce Project 🌍

## 📝 Brief Description
"Waste Not" is a full-stack re-commerce project developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). The project is designed to promote the idea of reusing items, thereby reducing waste. It provides a platform for users to buy and sell used items, contributing to a more sustainable and eco-friendly lifestyle.

## 🛠️ Features
- **User Authentication and Authorization** 🔐: Users can create accounts, log in with JWT authentication, and even use third-party services like Google and Github for login. All user data is securely stored in a MongoDB database.
- **Profile Management** 👤: Users can view and edit their personal information, including name, email, and profile picture. All these APIs are secured through JWT.
- **Item Management** 📦: Users can perform CRUD operations on items - create listings, read item details, update their items, and delete items. All these APIs are also secured through JWT.
- **Search and Filtering** 🔍: The application includes search functionality that allows users to find items.
- **Dashboard** 📊: A comprehensive dashboard provides an overview of data and activities.

## 🚀 Getting Started ->> Installation
To run this project on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/sasohan0/waste-not-frontend.git`
2. Navigate into the directory: `cd waste-not-frontend`
3. Install the dependencies: `npm install`
4. Start the server: `npm start`

## Packages Used
Express.js: For creating the server-side application
MongoDB: For modeling and managing the application data
Cors: For enabling CORS with various options
Dotenv: For loading environment variables from a .env file
Jsonwebtoken: For implementing JWT authentication
Nodemon: For automatically restarting the node application when file changes are detected
Concurrently: For running multiple npm scripts concurrently
React: For building the user interface
React-dom: For rendering React components
React-router-dom: For managing routing in React
React Icons: For using popular icons in your React applications
SweetAlert2: For creating beautiful, responsive alerts
Vite: A build tool that aims to provide a faster and leaner development experience for modern web projects
Tailwind CSS: A utility-first CSS framework for rapidly building custom user interfaces



## API Endpoints
https://waste-not-backend.onrender.com/products
https://waste-not-backend.onrender.com/user (needs login)

## 📚 Schema

### User Schema
- `name`: (String, required) The name of the user.
- `email`: (String, required, unique) The email of the user.
- `password`: (String, required) The hashed password of the user.
- `items`: (Array of item IDs) The items listed by the user.

### Item Schema
- `title`: (String, required) The title of the item.
- `description`: (String) The description of the item.
- `price`: (Number, required) The price of the item.
- `owner`: (User ID, required) The user who listed the item.

## Live Site
[You can access the live site here.](https://waste-not-f415a.web.app/)
