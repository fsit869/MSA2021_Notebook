import {
    Box,
    Button,
    Card,
    CardContent,
    createStyles,
    Fab,
    Grid,
    makeStyles,
    Theme,
    Typography,
} from "@material-ui/core";
import React, {useEffect} from "react";

import Header from "../components/Header";
import {TaskComponent} from "../components/task/TaskComponent";
import AddIcon from "@material-ui/icons/Add";
import NewTask from "../components/task/NewTask";
import {useQuery} from "@apollo/client";
import {GET_ALL_NOTES} from "../api/queries";
import NoteInterface from "../api/NoteInterface";

const useStyles = makeStyles<Theme>((theme) =>
    createStyles({
        root: {
            minHeight: '100vh',
            backgroundImage: `url(${process.env.PUBLIC_URL + "/images/blueback.jpg"})`
        },
        fabStyle: {
            margin: 0,
            top: "auto",
            right: 30,
            bottom: 30,
            left: "auto",
            position: "fixed",
        },
    })
);

function MainContent() {
    const classes = useStyles();
    // {pollInterval:1000}
    const { loading, error, data } = useQuery(GET_ALL_NOTES, );
    if (loading) return <Typography>Loading data</Typography>;
    if (error) return <Typography color="error">Error Loading Data</Typography>;
    console.log(data.getAllNotes[0]);

    const deleteTask = () => {
    };

    // Create new task
    const newTask = () => {
    };

    // Loads tasks from graphQL
    const loadTasks = () => {
    };

    return (
        <div className={classes.root}>
            <Box
                p={3}>
                <Grid container spacing={2} justify="center">
                    {data.getAllNotes.map((currentNote:NoteInterface) =>
                        (
                            <Grid item>
                                <TaskComponent
                                    title={currentNote.title}
                                    description={currentNote.description}
                                    severity={currentNote.severity}
                                />
                            </Grid>
                        ))}
                    {/*<Grid item>*/}
                    {/*    <TaskComponent*/}
                    {/*        title="One"*/}
                    {/*        description="This is text that i have wrirten and it is intentionally very loing so it spans over multiple lines and yep. I actually hate using javsrirpt sand typescripoytrydrt i prefer java. I hate fronte end deveoplentewte"*/}
                    {/*        severity={0}*/}
                    {/*    ></TaskComponent>*/}
                    {/*</Grid>*/}
                    {/*<Grid item>*/}
                    {/*    <TaskComponent*/}
                    {/*        title="One"*/}
                    {/*        description="This is text that i have wrirten and it is intentionally very loing so it spans over multiple lines and yep. I actually hate using javsrirpt sand typescripoytrydrt i prefer java. I hate fronte end deveoplentewte"*/}
                    {/*        severity={0}*/}
                    {/*    ></TaskComponent>*/}
                    {/*</Grid>*/}

                </Grid>

                {/* New task FAB */}
                <NewTask></NewTask>

            </Box>
        </div>
    );
}

export default MainContent;
