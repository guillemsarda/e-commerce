import React, { useState, useEffect } from 'react';
import './ListView.css';

import { getProducts } from '../ApiService';
import Item from '../components/Item';
import SearchBar from '../components/SearchBar';

function ListView() {
  const [products, setProducts] = useState([]); // Just used once
  const [searchProducts, setSearchProducts] = useState([]);
  const [unmatched, setUnmatched] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts(setProducts, setError, setLoading);
  }, []);

  function setView() {
    if (unmatched) return <h1>No phone was matched</h1>;
    if (searchProducts.length) {
      return searchProducts.map((product) => <Item product={product} key={product.id} />);
    }
    return products.map((product) => <Item product={product} key={product.id} />);
  }

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  return (
    <main>
      <SearchBar
        products={products}
        setSearchProducts={setSearchProducts}
        setUnmatched={setUnmatched}
      />
      <ul className="products-list">{setView()}</ul>
    </main>
  );
}

export default ListView;
