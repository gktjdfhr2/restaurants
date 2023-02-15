import React from 'react';
import PropTypes from 'prop-types';

function Footer({ children }) {
  return <footer className="footer-layout">{children}</footer>;
}
Footer.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Footer;
