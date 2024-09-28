import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function NavBar({ children }) {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="create-user">Register</Link>
        <Link to="/login">Login</Link>
        {children}
      </nav>
    </div>
  )
}

NavBar.propTypes = {
  children: PropTypes.node.isRequired,
};

