import { Link } from "react-router-dom";

const LinkButton = ({ to, text }) => (
  <Link to={`/${to}`}>
    <button>{text}</button>
  </Link>
);

export default LinkButton;