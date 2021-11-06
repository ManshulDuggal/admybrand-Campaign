import React, { useState, useEffect } from "react";
import Checkbox from "./Checkbox";
interface props {
  options: string[];
}
const Checkboxes = ({ options }: props) => {
  const [checkedOptions, setCheckedOption] = useState([]);
  const handleChange = (index) => {
    const updatedOptions = [...checkedOptions];
    if (updatedOptions.includes(options[index])) {
      updatedOptions.splice(index, 1);
      console.log("In in if ", updatedOptions);
    } else {
      updatedOptions.push(options[index]);
      console.log("In else if");
    }
    setCheckedOption(updatedOptions);
    console.log(updatedOptions);
  };
  useEffect(() => {
    setCheckedOption([]);
    return () => {
      setCheckedOption([]);
    };
  }, []);
  const checkboxes = options.map((option, index) => (
    <Checkbox
      key={index}
      index={index}
      value={option}
      handleChange={handleChange}
    />
  ));
  return <div>{checkboxes}</div>;
};

export default Checkboxes;
