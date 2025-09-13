const Input = ({ handleChange, value, title, name, color, border, className }) => {
  return (
    <label className="sidebar-label-container">
      <input onChange={handleChange} type="radio" value={value} name={name} />
      <span
        className={`checkmark ${className}`}
        style={{
          border: `${border ? `2px solid ${border}` : ""}`,
          backgroundColor: color,
        }}
      ></span>
      {title}
    </label>
  );
};

export default Input;
