import { React, useState } from "react";
import ProductItem from "./ProductItem";
import { useNavigate } from "react-router-dom";

function Search({ products, setProducts, onAddToCart }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterList, setFilterList] = useState([]);
  const navigate = useNavigate();

  function handleChange(e) {
    const query = e.target.value;
    setSearchTerm(query);
    filterProducts(query);
  }

  function filterProducts(query) {
    const filteredProducts = products.filter(
      (product) => product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilterList(filteredProducts);
  }

  return (
    <div>
      <div className="searchbar">
        <label htmlFor="search">Search a product:</label>
        <input
          type="text"
          id="search"
          placeholder="Type a name to search..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <ul className="products">
        {filterList.map((product) => (
          <ProductItem key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </ul>
    </div>
  );
}

export default Search;
