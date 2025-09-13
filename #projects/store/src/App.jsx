import { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";

// Database
import productsData from "./db/data";

const App = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ------- Input Filter -------
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "color":
        setSelectedColor(value);
        break;
      case "price":
        setSelectedPrice(value);
        break;
      case "category":
        setSelectedCategory(value);
        break;
      default:
        break;
    }
  };

  const handleClick = (value) => {
    setSelectedCompany(value);
  };

  function filteredData(products, query, color, company, price, category) {
    return products
      .filter((product) => {
        if (
          query &&
          !product.title.toLowerCase().includes(query.toLowerCase())
        ) {
          return false;
        }

        if (color && product.color.toLowerCase() !== color.toLowerCase()) {
          return false;
        }

        if (
          category &&
          product.category.toLowerCase() !== category.toLowerCase()
        ) {
          return false;
        }

        if (
          company &&
          product.company.toLowerCase() !== company.toLowerCase()
        ) {
          return false;
        }

        if (price && product.newPrice.toString() !== price.toString()) {
          return false;
        }

        return true;
      })
      .map(({ id, img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={id}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      ));
  }

  const products = filteredData(
    productsData,
    query,
    selectedColor,
    selectedCompany,
    selectedPrice,
    selectedCategory
  );

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products
        products={
          products.length > 0 ? (
            products
          ) : (
            <p className="no-products">
              No products found. Try changing the filters.
            </p>
          )
        }
      />
    </>
  );
};

export default App;
