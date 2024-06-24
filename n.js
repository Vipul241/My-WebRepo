import React from 'react';

// Navigation bar component
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

// Shopping items component
const ShoppingItems = () => {
  // Mock data for shopping items
  const shoppingItems = [
    { id: 1, name: 'Product 1', price: '$19.99' },
    { id: 2, name: 'Product 2', price: '$24.99' },
    { id: 3, name: 'Product 3', price: '$14.99' },
    // Add more shopping items as needed
  ];

  return (
    <div className="shopping-items">
      <h2>Available Products</h2>
      <ul>
        {shoppingItems.map(item => (
          <li key={item.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <button>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Footer component
const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
        {/* Add social network icons */}
        <span>Facebook</span>
        <span>Twitter</span>
        <span>Instagram</span>
      </div>
      <p>&copy; 2023 YourShop. All rights reserved.</p>
    </footer>
  );
};

// Main App component
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <ShoppingItems />
      </main>
      <Footer />
    </div>
  );
};

export default App;