import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

const Shopping = ({ addToCart }) => {
  const [products] = useState([
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Phone', price: 500 },
    { id: 3, name: 'Headphones', price: 100 },
  ]);

  return (
    <div>
      <h2>Shop Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Shopping;
