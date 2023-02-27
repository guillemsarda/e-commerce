import React from 'react';

function Cart({ cart }) {
  return cart.map((product, i) => (
    <section className={`cart-product ${i === 0 ? 'first-product' : ''}`}>
      <img src={product.imgUrl} alt={`${product.brand}'s ${product.model} phone`} />
      <div className="popup-description">
        <article>
          <h1 className="popup-description-header">{`${product.brand}'s ${product.model}`}</h1>
        </article>
        <article>
          <h2 className="popup-description-header-sm">{product.colorCode}</h2>
          <h2 className="popup-description-header-sm">{product.storageCode}</h2>
          <h2 className="popup-description-header-sm">{`${product.price}€`}</h2>
        </article>
      </div>
    </section>
  ));
}

export default Cart;
