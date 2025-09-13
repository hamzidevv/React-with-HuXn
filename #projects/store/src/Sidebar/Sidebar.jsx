import Category from "./Category/Category";
import Colors from "./Color/Colors";
import Price from "./Price/Price";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <section className="sidebar">
      <div className="logo-container">
        <h1 className="sidebar-logo">🛒</h1>
      </div>
      <div className="sidebar-filter-container">
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </div>
    </section>
  );
};

export default Sidebar;
