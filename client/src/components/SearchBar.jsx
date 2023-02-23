import React from 'react';

function SearchBar({ setSearchProducts, products }) {
  return (
    <input
      type="text"
      onChange={(e) => {
        const name = e.target.value.toLowerCase();
        const filteredProducts = products.filter(
          (product) =>
            product.brand.toLowerCase().includes(name) || product.model.toLowerCase().includes(name)
        );
        setSearchProducts(filteredProducts);
      }}
    />
  );
}

export default SearchBar;
