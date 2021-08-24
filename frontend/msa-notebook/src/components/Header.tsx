/* Header.tsx

Contains the header component

@Author Frank Situ


*/
import {
  AppBar,
  Button,
  createStyles,
  CssBaseline,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
  Drawer,
} from "@material-ui/core";
import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { SideBar } from "./SideBar";
import AddIcon from "@material-ui/icons/Add";

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
  })
);

interface headerPropsInterface {
  displayText: string;
  loggedIn: boolean;
}

function Header() {
  // Sidebar
  const [sideBar, setSideBar] = useState(false);
  const toggleSideBar = () => {
    setSideBar(!sideBar);
  };

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            className={classes.menuButton}
            arai-label="menu"
            onClick={toggleSideBar}
          >
            <MenuIcon />
            <Drawer anchor="left" open={sideBar} onClose={toggleSideBar}>
              <SideBar />
            </Drawer>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Tasks to do
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;
