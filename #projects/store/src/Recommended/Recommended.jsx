import React, { useState } from "react";
import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (value) => {
    setActiveButton(value);
    handleClick(value);
  };

  return (
    <div>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        <Button
          onClickHandler={handleButtonClick}
          title="All Products"
          value=""
          isActive={activeButton === ""}
        />
        <Button
          onClickHandler={handleButtonClick}
          title="Nike"
          value="Nike"
          isActive={activeButton === "Nike"}
        />
        <Button
          onClickHandler={handleButtonClick}
          title="Adidas"
          value="Adidas"
          isActive={activeButton === "Adidas"}
        />
        <Button
          onClickHandler={handleButtonClick}
          title="Puma"
          value="Puma"
          isActive={activeButton === "Puma"}
        />
        <Button
          onClickHandler={handleButtonClick}
          title="Vans"
          value="Vans"
          isActive={activeButton === "Vans"}
        />
      </div>
    </div>
  );
};

export default Recommended;
