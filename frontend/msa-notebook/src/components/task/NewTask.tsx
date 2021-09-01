/* NewTask.tsx

Component which presents a form to the user, containing all details needed
to create a  new TaskComponent.tsx


@author Frank Situ

*/

import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
    Box,
    ButtonGroup,
    Checkbox,
    createStyles,
    Fab,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    InputLabel,
    makeStyles,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    Theme,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import {useMutation, useQuery} from "@apollo/client";
import { NEW_NOTE} from "../../api/mutations";
import {GET_ALL_NOTES} from "../../api/queries";

// Styles
const useStyles = makeStyles<Theme>((theme) =>
    createStyles({
        fabStyle: {
            margin: 0,
            top: "auto",
            right: 30,
            bottom: 30,
            left: "auto",
            position: "fixed",
        },
        dialogueForm: {},
        priorityControl: {},
    })
);

export default function FormDialog() {
    const [open, setOpen] = React.useState(false); // State checking if dialogue open/Closed

    const [severity, setSeverity] = React.useState(0); // Prority state
    const [title, setTitle] = React.useState(""); // Word counter state for comments
    const [comments, setComments] = React.useState(""); // Word counter state for comments

    const [charCounter, setCharCounter] = React.useState(0);
    const [commentError, setCommentError] = React.useState(false)
    const [helperText, setHelperText] = React.useState(charCounter+"/100")

    const classes = useStyles();
    const [newNote, { data, loading, error }] = useMutation(NEW_NOTE);
    // newNote({variables: {
    //         title: "hi",
    //         date: "7/11",
    //         description: "hi",
    //         severity: 3,
    // }})


    // Called if FAB clicked
    const handleClickOpen = () => {
        setOpen(true);
    };

    // Called if closing dialogue
    const handleClose = () => {
        setComments("");
        setTitle("");
        setOpen(false);
        setCharCounter(0)
        setCommentError(false)

    };

    // Handle finish creating new note
    const createNote = () => {
        if (commentError) {
        } else {
            newNote({
                variables: {
                    title: title,
                    date: new Date().toISOString().slice(0, 10),
                    description: comments,
                    severity: severity,
                }
            })
            handleClose();
        }

    };

    const onCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        let charLength:number = event.target.value.length

        if (charLength>120) {
            setComments(event.target.value)
            setCommentError(true);
            setHelperText("Max characters reached!")
        } else{
            setComments(event.target.value)
            setCharCounter(charLength);
            setCommentError(false);
            setHelperText(event.target.value.length + "/120")
        }

    }

    return (
        <div>
            {/* FLOATING ACTION BUTTON */}
            <Fab
                color="primary"
                aria-label="add"
                variant="extended"
                className={classes.fabStyle}
                onClick={handleClickOpen}
            >
                <AddIcon/>
            </Fab>

            {/* DIALOGUE MENU */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                fullWidth={true}
            >
                <DialogTitle id="form-dialog-title">Create new task</DialogTitle>

                <DialogContent>
                    {/* Descriptor  */}
                    <DialogContentText>
                        Fill in details to create a new task.
                    </DialogContentText>

                    {/* Title textfield */}
                    <Box pb={2}>
                        <TextField
                            // autoFocus
                            required
                            margin="dense"
                            label="Title"
                            type="title"
                            variant="outlined"
                            onChange= {(e) => setTitle(e.target.value)}
                            value={title}
                            fullWidth
                            rows={1}
                        />
                    </Box>

                    {/* Comments textfield */}
                    <Box pb={2}>
                        <TextField
                            // id="outlined-multiline-static"
                            label="Comments"
                            multiline
                            rows={4}
                            variant="outlined"
                            value={comments}
                            onChange={(e) => onCommentChange(e)}
                            error={commentError}
                            helperText={helperText}
                            fullWidth
                        />
                    </Box>


                    {/* Priority switch */}
                    <FormControl className={classes.priorityControl} fullWidth={true}>
                        <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={severity}
                            onChange={(e)=>setSeverity(e.target.value as number)}
                        >
                            <MenuItem value={3}>Severe</MenuItem>
                            <MenuItem value={2}>Medium</MenuItem>
                            <MenuItem value={1}>Low</MenuItem>
                            <MenuItem value={0}>None</MenuItem>
                        </Select>
                    </FormControl>
                </DialogContent>

                {/* Action button centre */}
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={createNote} color="primary">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
