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
import React, {useState} from "react";
import MenuIcon from "@material-ui/icons/Menu";
import {SideBar} from "./SideBar";
import AddIcon from "@material-ui/icons/Add";

// Styles
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

// Props taken
interface headerPropsInterface {
    displayText: string;
    loggedIn: boolean;
}

// Header component
function Header() {
    // Sidebar
    const [sideBar, setSideBar] = useState(false);
    const toggleSideBar = () => {
        setSideBar(!sideBar);
    };

    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline/>
            <AppBar position="relative">
                <Toolbar>
                    {/*SIDEBAR*/}
                    <IconButton
                        edge="start"
                        color="inherit"
                        className={classes.menuButton}
                        arai-label="menu"
                        onClick={toggleSideBar}
                    >
                        <MenuIcon/>
                        <Drawer anchor="left" open={sideBar} onClose={toggleSideBar}>
                            <SideBar/>
                        </Drawer>
                    </IconButton>

                    {/*HEADER TITLE*/}
                    <Typography variant="h6" className={classes.title}>
                        MyNoteKeeper
                    </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default Header;
