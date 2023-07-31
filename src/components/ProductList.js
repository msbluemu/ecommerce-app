import { React, useState } from "react";
import ProductItem from "./ProductItem";
import { useNavigate } from "react-router-dom";

function ProductList({ products, setProducts, onAddToCart}) {
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
          <label htmlFor="search"></label>
          <input className="search"
            type="text"
            id="search"
            placeholder="Search a product..."
            value={searchTerm}
            onChange={handleChange}
          />
        <label htmlFor="categories" ></label>
            <select name="categories" id="categories" className="categories" onChange={handleCategoryChange}>
                <option value="smartphones">Smartphones</option>
                <option value="laptops">laptops</option>
                <option value="headphones">Headphones</option>
            </select>
      </div>
      <ul className="products">
        {/* Use filterList when searchTerm is not empty, otherwise use products */}
        {searchTerm === "" && selectedCategory === "" ? (
          products.map((product) => (
            <ProductItem key={product.id} product={product} onAddToCart={onAddToCart}/>
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
