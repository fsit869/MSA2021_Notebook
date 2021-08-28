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
import DeleteIcon from "@material-ui/icons/Delete";

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
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText className={classes.listText} primary="Dashboard"/>
                </ListItem>

                <ListItem button onClick={e => window.location.href = "/tasks"}>
                    <ListItemIcon>
                        <ArrowUpwardIcon/>
                    </ListItemIcon>
                    <ListItemText className={classes.listText} primary="Tasks"/>
                </ListItem>
            </List>


            <Divider/>


            <List>
                <ListItem button>
                    <ListItemIcon>
                        <DeleteIcon></DeleteIcon>
                    </ListItemIcon>
                    <ListItemText className={classes.listText} primary="Delete All Notes"/>
                </ListItem>

            </List>
        </div>
    );
};
