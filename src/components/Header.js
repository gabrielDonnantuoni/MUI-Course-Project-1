import React from 'react';
// import PropTypes from 'prop-types';
import { AppBar, Toolbar } from './ui-imports';

const Header = () => {
  const name = 'Arc Development';
  return (
    <AppBar position="fixed">
      <Toolbar>
        { name }
      </Toolbar>
    </AppBar>
  );
};

// Header.propTypes = {

// };

export default Header;
