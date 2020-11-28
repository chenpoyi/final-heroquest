import React, {useEffect} from 'react';
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
import  { Redirect, Route } from 'react-router-dom'


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
    
    
    
  }),
);

type NavBarProps = {
  loggedInStatus: boolean;
  handleSuccessfulLogout :any
  user :any
}



export default function NavBar({loggedInStatus, handleSuccessfulLogout, user}: NavBarProps) {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  

  // useEffect(() => {
  //   if(localStorage.getItem('email')){
  //     console.log('here')
  //     setAuth(true)
  //     setEmail(localStorage.getItem('email'))
  //   }
  //   else {
  //     setAuth(false)
  //     setEmail(null)
  //   }
  // });

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
        return <Redirect to='/'  />

        // return <Route path="/" render={TitleCard} />
      });

  }

  

  return (
    <div className={classes.root}>
     

      <AppBar >
        <Toolbar>
          <LeftDrawer />
          <Typography variant="h6" className={classes.title}>
            HeroQuest
          </Typography>

          {loggedInStatus && user && (
            <div>
            
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
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
            </div>
          )}
        </Toolbar>
      </AppBar>
     
    </div>
  );
}