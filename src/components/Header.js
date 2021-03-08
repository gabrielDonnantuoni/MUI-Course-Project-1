import React from 'react';
// import PropTypes from 'prop-types';
import { AppBar, Toolbar, makeStyles } from './ui-imports';
import logo from '../assets/logo.svg';

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
  },
  logo: {
    height: '7em',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed">
        <Toolbar disableGutters>
          <img alt="company logo" src={ logo } className={ classes.logo } />
        </Toolbar>
      </AppBar>
      <div className={ classes.toolbarMargin } />
    </>
  );
};

// Header.propTypes = {

// };

export default Header;
