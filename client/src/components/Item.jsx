import React from 'react';
import { Link } from 'react-router-dom';

function Item({ product }) {
  return (
    <li className="item">
      <Link to={`product/${product.id}`} className="link">
        <article className="item-info">
          <span className="img-wrapper">
            <img src={product.imgUrl} alt={`${product.brand}'s ${product.model} phone`} />
          </span>
          <span className="item-name">
            <h2>Brand:</h2>
            &nbsp;
            <h1>{product.brand}</h1>
          </span>
          <span className="item-name">
            <h2>Model:</h2>
            &nbsp;
            <h1>{product.model}</h1>
          </span>
          <h3>{product.price ? `${product.price}€` : '-'}</h3>
        </article>
      </Link>
    </li>
  );
}

export default Item;
