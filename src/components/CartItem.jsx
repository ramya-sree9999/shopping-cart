import React from 'react';
import './CartItem.css';

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="cart-item">
      <h4>{item.name}</h4>
      <p>Price: ${item.price}</p>
      <button className="remove-btn" onClick={() => removeFromCart(item)}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
