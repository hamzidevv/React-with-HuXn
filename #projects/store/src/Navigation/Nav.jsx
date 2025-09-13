import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

import "./Nav.css";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter your search shoes."
          onChange={handleInputChange}
        />
      </div>

      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icon" />
        </a>

        <a href="#">
          <AiOutlineShoppingCart className="nav-icon" />
        </a>

        <a href="#">
          <AiOutlineUserAdd className="nav-icon" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
