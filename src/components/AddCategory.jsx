import React, { useState } from "react";
import PropTypes from "prop-types";

function AddCategory({ setCategories }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((category) => [inputValue, ...category]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleInputChange} type="text" value={inputValue} />
    </form>
  );
}

//To mark as a necessary the prop passing from the parent.
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
