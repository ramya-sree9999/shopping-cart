import React, { useState } from 'react';

const Shopping = () => {
  const [products] = useState([
    {
      id: 1,
      name: 'Laptop',
      price: 1000,
      image: 'https://m.media-amazon.com/images/I/61Qe0euJJZL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      id: 2,
      name: 'Phone',
      price: 500,
      image: 'https://m.media-amazon.com/images/I/71pVT1qpsVL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      id: 3,
      name: 'Headphones',
      price: 100,
      image: 'https://m.media-amazon.com/images/I/61M5noXbfgL._AC_UF1000,1000_QL80_.jpg',
    },
  ]);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id} style={{ margin: '20px', textAlign: 'center' }}>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <img src={product.image} alt={product.name} style={{ width: '200px', height: 'auto' }} />
        </div>
      ))}
    </div>
  );
};

export default Shopping;
