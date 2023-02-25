import React from 'react';

function SearchBar({ setSearchProducts, products, setUnmatched }) {
  function handleChange(e) {
    const name = e.target.value.toLowerCase();
    const filteredProducts = products.filter(
      (product) =>
        product.brand.toLowerCase().includes(name) || product.model.toLowerCase().includes(name)
    );
    if (!filteredProducts.length && e.target.value !== '') setUnmatched(true);
    else setUnmatched(false);
    setSearchProducts(filteredProducts);
  }
  return (
    <div className="search-bar">
      <input type="text" onChange={handleChange} placeholder="Search by name or brand" />
    </div>
  );
}

export default SearchBar;
