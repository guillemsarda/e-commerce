import React from 'react';

function Cart({ cart }) {
  return cart.map((product) => (
    <section>
      <h1>{product.imgUrl}</h1>
      <h1>{product.model}</h1>
      <h1>{product.brand}</h1>
      <h1>{product.colorCode}</h1>
      <h1>{product.storageCode}</h1>
    </section>
  ));
}

export default Cart;
