import "./Products.css";

const Products = ({products}) => {
  return (
    <section className="card-container">
      {products}
    </section>
  );
};

export default Products;
