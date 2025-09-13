const Button = ({ onClickHandler, title, value, isActive }) => {
  return (
    <button
      onClick={() => onClickHandler(value)}
      className={`btns ${isActive ? "active" : ""}`}
      value={value}
      name="company"
    >
      {title}
    </button>
  );
};

export default Button;
