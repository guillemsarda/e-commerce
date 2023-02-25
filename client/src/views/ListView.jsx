import React, { useState, useEffect } from 'react';
import './ListView.css';

import { Player } from '@lottiefiles/react-lottie-player';
import { getProducts } from '../ApiService';
import Item from '../components/Item';
import SearchBar from '../components/SearchBar';
import Fallback from '../components/Fallback';

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
    if (error) {
      return <Fallback text={error} />;
    }
    if (unmatched) {
      return <Fallback text="No phone was matched." />;
    }
    if (searchProducts.length) {
      return searchProducts.map((product) => <Item product={product} key={product.id} />);
    }
    return products.map((product) => <Item product={product} key={product.id} />);
  }

  if (loading) {
    return (
      <main className="list-view">
        <Player
          autoplay
          loop
          src="https://assets3.lottiefiles.com/packages/lf20_0xt1vcey.json"
          style={{ height: '300px', width: '300px' }}
        />
      </main>
    );
  }

  return (
    <main className="list-view">
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
