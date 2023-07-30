import { React, useState } from "react";
import ProductItem from "./ProductItem";
import { useNavigate } from "react-router-dom";

function ProductList({ products, setProducts, onAddToCart }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterList, setFilterList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("")

  function handleChange(e) {
    const query = e.target.value;
    setSearchTerm(query);
    filterProducts(query);
  }

  function handleCategoryChange(e){
     const selectValue = e.target.value;
     setSelectedCategory(selectValue)
     filterCategories(selectValue)
  }

  function filterProducts(query) {
    const filteredProducts = products.filter(
      (product) => product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilterList(filteredProducts);
  }

  function filterCategories(selectValue){
      const filteredCategory = products.filter(
        (product) => product.category === selectValue
      );
      setFilterList(filteredCategory);
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
      <label htmlFor="categories">Choose a category</label>
          <select name="categories" id="categories" onChange={handleCategoryChange}>
              <option value="smartphones">Smartphones</option>
              <option value="laptops">laptops</option>
              <option value="skincare">Skincare</option>
          </select>
      <ul className="products">
        {/* Use filterList when searchTerm is not empty, otherwise use products */}
        {searchTerm === "" && selectedCategory === "" ? (
          products.map((product) => (
            <ProductItem key={product.id} product={product} onAddToCart={onAddToCart} />
          ))
        ) : (
          filterList.map((product) => (
            <ProductItem key={product.id} product={product} onAddToCart={onAddToCart} />
          ))
        )}
      </ul>
    </div>
  );
}

export default ProductList;
