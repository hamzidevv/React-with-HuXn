import Input from "../../components/Input";
import "./Colors.css";

const Colors = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title color-title">Color</h2>
      <Input handleChange={handleChange} className="all" value="" name="color" title="All" />
      <Input
        handleChange={handleChange}
        value="black"
        name="color"
        title="Black"
        color="black"
      />
      <Input
        handleChange={handleChange}
        value="blue"
        name="color"
        title="Blue"
        color="blue"
      />
      <Input
        handleChange={handleChange}
        value="red"
        name="color"
        title="Red"
        color="red"
      />
      <Input
        handleChange={handleChange}
        value="green"
        name="color"
        title="Green"
        color="green"
      />
      <Input
        handleChange={handleChange}
        value="white"
        name="color"
        title="White"
        color="white"
        border="black"
        className="white-color"
      />
    </div>
  );
};

export default Colors;
