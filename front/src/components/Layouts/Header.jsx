import React from 'react';
import PropTypes from 'prop-types';

function Header({ children }) {
  return <header className="header-layout">{children}</header>;
}
Header.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Header;
