import React from 'react';

function SearchBar({ setSearchProducts, products, setUnmatched }) {
  return (
    <input
      type="text"
      onChange={(e) => {
        const name = e.target.value.toLowerCase();
        const filteredProducts = products.filter(
          (product) =>
            product.brand.toLowerCase().includes(name) || product.model.toLowerCase().includes(name)
        );
        if (!filteredProducts.length && e.target.value !== '') setUnmatched(true);
        else setUnmatched(false);
        setSearchProducts(filteredProducts);
      }}
    />
  );
}

export default SearchBar;
