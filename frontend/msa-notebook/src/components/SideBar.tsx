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
import {useMutation} from "@apollo/client";
import {DELETE_ALL_NOTES} from "../api/mutations";
import {ListItemLink} from "./ListItemLink";

// Styles
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


/**
 * Contains sidebar component
 */
export const SideBar = () => {
    const classes = useStyles();
    // Delete all mutation
    const [deleteAllNotes, { data, loading, error }] = useMutation(DELETE_ALL_NOTES);

    return (
        <div className={classes.list}>
            {/*Main links*/}
            <List>
                <ListItemLink to="/dashboard" primary="Dashboard" icon={<HomeIcon/>}/>
                <ListItemLink to="/tasks" primary="Tasks" icon={<ArrowUpwardIcon/>}/>
            </List>

            <Divider/>

            {/*Delete all button*/}
            <List>
                <ListItem button onClick={e => deleteAllNotes()}>
                    <ListItemIcon>
                        <DeleteIcon></DeleteIcon>
                    </ListItemIcon>
                    <ListItemText className={classes.listText} primary="Delete All Notes"/>
                </ListItem>
            </List>
        </div>
    );
};
