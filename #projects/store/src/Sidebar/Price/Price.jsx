import Input from "../../components/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      {/* <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            name="price"
            value=""
            id=""
          />
          <span className="checkmark"></span>All
        </label> */}
      <Input handleChange={handleChange} value="" name="price" title="All" />
      <Input
        handleChange={handleChange}
        value={50}
        name="price"
        title="0 - $50"
      />
      <Input
        handleChange={handleChange}
        value={100}
        name="price"
        title="$50 - $100"
      />
      <Input
        handleChange={handleChange}
        value={150}
        name="price"
        title="$100 - $150"
      />
      <Input
        handleChange={handleChange}
        value={200}
        name="price"
        title="Over $150"
      />
    </div>
  );
};

export default Price;
