/* eslint-disable react/destructuring-assignment */
import React, { useState, memo, useCallback } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  Toolbar, AppBar, Typography, Hidden, Button, IconButton, Menu, MenuItem,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { orange, green } from '@material-ui/core/colors';
import MenuIcon from '@material-ui/icons/Menu';
// import { Auth } from 'aws-amplify';

import { HOME_PAGE_URL } from '../config';

/* istanbul ignore next */
const useStyles = makeStyles((theme) => ({
  link: {
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
  },
  menuLink: {
    textDecoration: 'none',
  },
  flex1: {
    flex: 1,
  },
  appbar: {
    maxHeight: 55,
    position: 'sticky',
    top: 0,
    zIndex: theme.zIndex.drawer + 1,
  },
  avatar: {
    width: 26,
    height: 26,
    marginRight: 8,
    color: '#fff',
    backgroundColor: orange[800],
  },
  switchBase: {
    color: 'white',
    '&$checked': {
      color: green[400],
    },
    '&$checked + $track': {
      backgroundColor: green[400],
    },
  },
  checked: {},
  track: {},
}));

/** Navbar component */
export const Navbar = () => {
  const classes = useStyles({});
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuIconClick = useCallback(({ currentTarget }) => {
    setAnchorEl((state) => state ? null : currentTarget);
  }, []);

  return (
    <>
      <AppBar position="static" className={classes.appbar} data-testid="navbar">
        <Toolbar>
          <Link to={HOME_PAGE_URL} className={`${classes.link} ${classes.flex1}`} data-testid="titleLink">
            <Typography variant="h6" color="inherit">App Name</Typography>
          </Link>
          {/* <Hidden only="xs">
            <Button color="inherit" data-testid="loginButton">
              Test Button
            </Button>
          </Hidden>
          <Hidden only={['xl', 'lg', 'md', 'sm']}>
            <IconButton
              color="inherit"
              aria-label="Menu"
              onClick={handleMenuIconClick}
              aria-owns={anchorEl ? 'simple-menu' : null}
              aria-haspopup="true"
              data-testid="navbarDropMenuButton"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuIconClick}
              data-testid="dropDownMenu"
            >
              <MenuItem data-testid="loginMenu">
                Test Button
              </MenuItem>
            </Menu>
          </Hidden> */}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default withRouter(memo(Navbar));
