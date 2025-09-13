import Input from "../../components/Input";
import "./Category.css";

const Category = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        {/* <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            name="category"
            value=""
            id=""
          />
          <span className="checkmark"></span>All
        </label> */}
        <Input
          handleChange={handleChange}
          value=""
          name="category"
          title="All"
        />
        <Input
          handleChange={handleChange}
          value="sneakers"
          name="category"
          title="Sneakers"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          name="category"
          title="Flats"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          name="category"
          title="Sandals"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          name="category"
          title="Heels"
        />
      </div>
    </div>
  );
};

export default Category;
