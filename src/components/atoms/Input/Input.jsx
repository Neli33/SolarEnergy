import PropTypes from "prop-types";

export default function Input({ icon, ...props }) {
  return (
    <div className="input-container">
      {icon && <img src={icon} alt="Ícone" />}
      <input className={`input ${icon ? "input-with-icon" : ""}`} {...props} />
    </div>
  );
}
Input.propTypes = {
  icon: PropTypes.string,
};
