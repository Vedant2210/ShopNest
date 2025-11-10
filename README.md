# 🛍️ ShopNest — React E-Commerce Frontend

ShopNest is a modern, responsive e-commerce frontend built with **React**, **Tailwind CSS**, and **React Context API**.  
It allows users to browse products, add them to the cart, modify quantities dynamically, and view the total price — all with a clean UI and smooth interactions.
Check Out At- https://shop-nest-ebon-five.vercel.app/
---

## 🚀 Features

✅ **Dynamic Product Listing** — Browse product cards with name, image, and price.  
✅ **Add to Cart Functionality** — Add items directly from the homepage.  
✅ **Quantity Management** — Increase/decrease quantities with real-time updates.  
✅ **Total Calculation** — Automatically updates total price as quantities change.  
✅ **Global State with Context API** — Cart data is shared across all components.  
✅ **Responsive Design** — Fully styled using Tailwind CSS for all screen sizes.  
✅ **Smooth Navigation** — React Router used for switching between pages.  
✅ **Marquee Animation (Optional)** — Adds a scrolling title effect for visual appeal.

---

## 🧩 Tech Stack

| Technology | Purpose |
|-------------|----------|
| **React JS** | Component-based UI framework |
| **React Router DOM** | Client-side routing |
| **Tailwind CSS** | Utility-first styling framework |
| **Context API** | Lightweight global state management |


---
## 🗂️ Folder Structure
```
ShopNest/
├── src/
│ ├── assets/ # Images (logo, cart icon)
│ ├── components/
│ │ ├── Navbar.jsx # Header with title + cart count
│ │ ├── Homepage.jsx # Displays all product cards
│ │ ├── Card.jsx # Single product card component
│ │ ├── AddedCart.jsx # Handles quantity controls & totals
│ │ ├── CartPage.jsx # Main cart page layout
│ ├── context/
│ │ ├── UserContext.jsx # React Context creation
│ │ ├── UserProvider.jsx # Context Provider with cart logic
│ ├── App.jsx # App routes & Toast setup
│ ├── main.jsx # Entry point (BrowserRouter + Provider)
│ ├── index.css # Tailwind CSS setup
├── package.json
└── README.md
```
Used Context API:
The Context API serves as the backbone of state management in this project. It allows seamless data sharing across components without the need for prop drilling, ensuring clean, scalable, and maintainable code.

🧠 Why Context API?
🏗 Centralized State Management: All essential data like cart items, user info, and app preferences are managed in one place.
🚫 No Prop Drilling: Components can access or update global data directly, without passing props through multiple layers.
🪶 Lightweight & Dependency-Free: Unlike Redux, Context API requires no additional setup or libraries.
⚙️ Reactive & Real-Time Updates: Any state change (like adding or removing a cart item) instantly updates all relevant components.
🧩 Cleaner Code Structure: The logic is separated into context providers, making the architecture easy to extend and maintain.

---
## 🚀 How to Run on Your System

Follow these simple steps to set up and run **ShopNest** locally:

### 1️⃣ Clone the Repository
```
git clone https://github.com/Vedant2210/ShopNest.git
```
2️⃣ Navigate to the Project Directory
```
cd ShopNest
```
3️⃣ Install Dependencies
Make sure you have Node.js and npm installed.
Then run:
```
npm install
npm install react-router-dom
npm install react-toastify
npm install tailwindcss postcss autoprefixer
npm install @tailwindcss/vite
```
4️⃣ Run the Development Server
```
npm run dev
```
5️⃣ Open in Browser
Once the server starts, open the link shown in the terminal — usually:
```
http://localhost:5173/
```

## 🗂️ Folder Structure

