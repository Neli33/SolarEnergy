import PropTypes from "prop-types";
import "./Button.css";

export default function Button({ children, classStyle, ...props }) {
  return (
    <button className={`button ${classStyle}`} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  classStyle: PropTypes.string,
};
