import React from 'react';
import { Link } from 'react-router-dom';

function Item({ product }) {
  return (
    <li className="item">
      <Link to={`product/${product.id}`}>
        <article>
          <h1>{product.brand}</h1>
          <h1>{product.model}</h1>
          <h3>{product.price}</h3>
          <img src={product.imgUrl} alt={`${product.brand}'s ${product.model} phone`} />
        </article>
      </Link>
    </li>
  );
}

export default Item;
