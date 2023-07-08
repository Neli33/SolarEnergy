import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Select.css";

export default function Select({ name, id, value, onChange, options }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (optionValue) => {
    onChange({ target: { value: optionValue } });
    setIsOpen(false);
  };

  return (
    <div className="select-container">
      <div
        className={`select-header ${isOpen ? "open" : ""}`}
        onClick={handleToggleOptions}
      >
        <div className="select-value">{value}</div>
        <div className="select-arrow">&#9660;</div>
      </div>
      {isOpen && (
        <ul className="select-options">
          {options.map((option) => (
            <li
              key={option.value}
              className={`select-option ${
                option.label === value ? "selected" : ""
              }`}
              onClick={() => handleSelectOption(option.value, option.label)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};
