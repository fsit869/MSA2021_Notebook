/* Sidebar.tsx

Component containing sidebar


@author Frank Situ

*/

import React from "react";
import {
  Divider,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import AddBoxIcon from "@material-ui/icons/AddBox";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  listText: {
    color: "black",
  },
  fullList: {
    width: "auto",
  },
});

export const SideBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.list}>
      <List>
        <ListItem button onClick={e => window.location.href = "/dashboard"}>
          <ListItemIcon>
            <ArrowUpwardIcon />
          </ListItemIcon>
          <ListItemText className={classes.listText} primary="Dashboard" />
        </ListItem>

        <ListItem button onClick={e => window.location.href = "/home"}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText className={classes.listText} primary="Tasks" />
        </ListItem>
      </List>


      <Divider />


    
      <List>
        <ListItem button>
          <ListItemIcon>
            <AddBoxIcon />
          </ListItemIcon>
          <ListItemText className={classes.listText} primary="Delete All" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <AddBoxIcon />
          </ListItemIcon>
          <ListItemText className={classes.listText} primary="About" />
        </ListItem>
      </List>
    </div>
  );
};
