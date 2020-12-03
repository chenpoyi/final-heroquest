import React, { useEffect } from 'react';
import { Grid } from "@material-ui/core";

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import LeftDrawer from './LeftDrawer';

import axios from 'axios';
import { Redirect, Route } from 'react-router-dom'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,

    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
  
    },
    navbar: {
    },
    logo: {
      maxHeight: 50,
      position: 'absolute',
      left: '50%',
      marginLeft: '-75px',
      top: '0'

    }



  }),
);

type NavBarProps = {
  loggedInStatus: boolean;
  handleSuccessfulLogout: any
  user: any
}



export default function NavBar({ loggedInStatus, handleSuccessfulLogout, user }: NavBarProps) {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);

    axios
      .get("/api/logout")// You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        handleSuccessfulLogout();
        return <Redirect to='/' />

        // return <Route path="/" render={TitleCard} />
      });

  }



  return (
    <div className={classes.root}>


      <AppBar >
        <Toolbar className={classes.navbar}>
          <LeftDrawer />
          <Typography variant="h6" className={classes.title}>
            <img className={classes.logo} src="https://upload.wikimedia.org/wikipedia/de/9/92/Heroquest_logo.png" />

          </Typography>
 

          {loggedInStatus && user && (
           <>
              
              <IconButton
               
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Typography variant="body1" className={classes.title}>
                Logged in as: {user.email}

              </Typography>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>{user.email}</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
              </>
          )}
        </Toolbar>
      </AppBar>

    </div>
  );
}