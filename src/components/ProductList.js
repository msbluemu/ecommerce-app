import { React, useState} from "react";
import ProductItem from "./ProductItem";

function ProductList({ products, onAddToCart }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
 
  
  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  const filteredList = products.filter((product) => {
    const titleMatch =
      product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const categoryMatch =
      selectedCategory === "all" || product.category === selectedCategory;
    return titleMatch && categoryMatch;
  });

  const isProductFound = filteredList.length > 0;

  return (
    <div>
      <div className="searchbar">
        <label htmlFor="search"></label>
        <input
          className="search"
          type="text"
          id="search"
          placeholder="Search a product..."
          value={searchTerm}
          onChange={handleChange}
        />
        <label htmlFor="categories"></label>
        <select name="categories" id="categories" className="categories" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="all">All products</option>
          <option value="smartphones">Smartphones</option>
          <option value="laptops">Laptops</option>
          <option value="headphones">Headphones</option>
        </select>
      </div>
      <ul className="products">
      {
        isProductFound ? (
          filteredList.map((product) => (
            <ProductItem key={product.id} product={product} onAddToCart={onAddToCart} />
          ))
        ) : (
          <p className="no-product-found">No product found</p>
        )
       }
      </ul>
    </div>
  );
}

export default ProductList;
