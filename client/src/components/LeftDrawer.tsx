import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuLink: {
    textDecoration: 'none',
    color: "#FFFFFF"
  },
});

type Anchor = 'top' | 'left' | 'bottom' | 'right';

type drawerList = {
  drawerList: string[]
}

export default function LeftDrawer( ) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      

      <List>
      <Link className={classes.menuLink} to="/">
          <ListItem button key={"Home"}>
            <ListItemText primary={"Home"} />
          </ListItem>
        </Link>
        <Link className={classes.menuLink} to="/armory">
          <ListItem button key={"Armory"}>
            <ListItemText primary={"Armory"}  />
          </ListItem>
        </Link>
        <Link className={classes.menuLink} to="/">
          <ListItem button key={"Characters"}>
            <ListItemText primary={"Characters"} />
          </ListItem>
        </Link>
      </List>

    </div>
  );
  // className={classes.menuButton}
  return (
    <div>
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer('left', true)}>
            <MenuIcon />
          </IconButton>
     
        <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
          {list('left')}
        </Drawer>
    </div>
  );
}
{/* <Link className={classes.menuLink} to="/login">
            <Button variant="contained" size="small" color="primary">
              Login
            </Button>
          </Link> */}