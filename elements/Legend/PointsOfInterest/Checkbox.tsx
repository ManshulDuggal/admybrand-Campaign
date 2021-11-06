import React, { useState } from "react";

const Checkbox = ({ index, value, handleChange }) => {
  const [isChecked, setIsChecked] = useState(false);
  const toggleHandler = () => {
    setIsChecked((prevState) => !prevState);
    handleChange(index);
  };
  return (
    <div>
      <label>
        <input
          type="checkbox"
          value={value}
          checked={isChecked}
          onChange={toggleHandler}
        />
        {value}
      </label>
    </div>
  );
};

export default Checkbox;
