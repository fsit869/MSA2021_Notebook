import {
    Box,
    Button,
    Card,
    CardContent,
    createStyles,
    Fab,
    Grid,
    makeStyles, MenuItem, Select,
    Theme,
    Typography,
} from "@material-ui/core";
import React, {useEffect} from "react";

import {TaskComponent} from "../components/task/TaskComponent";
import {useQuery} from "@apollo/client";
import {GET_ALL_NOTES} from "../api/queries";
import NoteInterface from "../api/NoteInterface";
import {NewTask} from "../components/task/NewTask";
import {sortPriorityFromHighest, sortPriorityFromLowest, sortTitle, sortTitleRev} from "../components/task/sortMethods";

// Styles
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


/**
 * Contains component that displays all the notes
 * @constructor
 */
function MainContent() {
    const classes = useStyles();
    const [sortType, setSortType] = React.useState("SEVERITY"); // Sort type state

    /*
        Fetch notes.
        IMPORTANT: Data is refetched every 2000ms, and will update the notes. This is not ideal
        for wide scale production as it is very resource intensive. However since this is a small
        prototype, it was done for simplicity. Else a subscription model would need to be implmented
        Observer/Observee pattern
     */
    const { loading, error, data} = useQuery(GET_ALL_NOTES, {pollInterval: 2000});

    // Display loading or error
    if (loading) return <Typography>Loading data</Typography>;
    if (error) return <Typography color="error">Error Loading Data</Typography>;

    // On change of sort type
    const onSortChange = (e:React.ChangeEvent<{name?: string | undefined, value: unknown}>) => {
        setSortType(e.target.value as string)
    }

    // Display notes
    const displayData = () => {
        // Clear note arr
        let myNoteArray: NoteInterface[] = [];
        // Add data from fetch
        data.getAllNotes.map((currentNote:NoteInterface) =>
            (
                myNoteArray.push(
                    {
                        id:currentNote.id,
                        title:currentNote.title,
                        description:currentNote.description,
                        date:currentNote.date,
                        severity:currentNote.severity
                    }
                )
            )
        )
        // Sort array
        myNoteArray.sort(determineSortType())
        return myNoteArray;
    }

    // Determine what sorting mechanism is used based on state
    const determineSortType = () => {
        if (sortType === "SEVERITY") {
            return sortPriorityFromLowest;
        } else if (sortType === "SEVERITY_REV") {
            return sortPriorityFromHighest;
        } else if (sortType === "TITLE_REV") {
            return sortTitleRev;
        } else if (sortType === "TITLE") {
            return sortTitle;
        } else{
            // Defaults to priority sort
            console.log("SORT ERR!")
            return sortPriorityFromHighest;
        }
    }

    return (
        <div className={classes.root}>
            <Box p={5}>
                <Box p={2}>
                    {/*Sort dropbox*/}
                    <Select
                        value={sortType}
                        onChange={onSortChange}
                    >
                        <MenuItem value={"SEVERITY"}>Severity</MenuItem>
                        <MenuItem value={"SEVERITY_REV"}>Severity Rev</MenuItem>
                        <MenuItem value={"TITLE_REV"}>Title Rev</MenuItem>
                        <MenuItem value={"TITLE"}>Title</MenuItem>
                    </Select>
                </Box>

                {/* Grid containing components */}
                <Grid container spacing={2} justify="center">
                    {
                        displayData().map((currentNote:NoteInterface) =>
                        (
                            <Grid item>
                                <TaskComponent
                                    id={currentNote.id}
                                    title={currentNote.title}
                                    description={currentNote.description}
                                    date={currentNote.date}
                                    severity={currentNote.severity}
                                />
                            </Grid>
                        ))}
                </Grid>

                {/* New task FAB */}
                <NewTask></NewTask>
            </Box>
        </div>
    );
}

export default MainContent;
