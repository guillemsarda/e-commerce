import React from 'react';
import { Link } from 'react-router-dom';

function Item({ product }) {
  return (
    <li>
      <Link to={`product/${product.id}`}>
        <h1>{product.model}</h1>
      </Link>
    </li>
  );
}

export default Item;
