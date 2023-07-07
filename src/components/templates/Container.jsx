import PropTypes from "prop-types";
import Navbar from "../molecules/Navbar/Navbar";
import "./Container.css";

export default function Container({ children, title }) {
  return (
    <div className="Container">
      <Navbar />

      <header>
        <h1 className="title">{title}</h1>
      </header>

      <main>{children}</main>
    </div>
  );
}
Container.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
