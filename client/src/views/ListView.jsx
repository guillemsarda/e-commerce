import React, { useState, useEffect } from 'react';
import './ListView.css';

import { getProducts } from '../ApiService';
import Item from '../components/Item';
import SearchBar from '../components/SearchBar';

function ListView() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts(setProducts, setError, setLoading);
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  return (
    <main>
      <SearchBar />
      {products.map((product) => (
        <Item product={product} key={product.id} />
      ))}
    </main>
  );
}

export default ListView;
