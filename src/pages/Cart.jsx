import React from 'react';
import CartItem from '../components/CartItem';
import { useNavigate } from 'react-router-dom';
// import './Cart.css';

const Cart = ({ cartItems, removeFromCart }) => {
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleProceed = () => {
    // Redirect to Checkout page
    navigate('/checkout');
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
          ))}
          <h3>Total: ${total}</h3>
          <div className="cart-buttons">
            <button onClick={handleProceed} className="proceed-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
