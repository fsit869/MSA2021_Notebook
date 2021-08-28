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
    const [wordCounter, setWordCounter] = React.useState(0); // Word counter state for comments
    const classes = useStyles();

    // Called if FAB clicked
    const handleClickOpen = () => {
        setOpen(true);
    };

    // Called if closing dialogue
    const handleClose = () => {
        setOpen(false);
    };

    // Handle changing of priority switch
    const handleServerityChange = (
        event: React.ChangeEvent<{ value: unknown }>
    ) => {
        setSeverity(event.target.value as number);
    };

    // Handle finish creating new note
    const createNote = () => {

        handleClose()
    };


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
                            id="title1"
                            label="Title"
                            type="title"
                            variant="outlined"
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
                            inputProps={{maxLength: 10}}
                            // helperText={wordCounter}+"/20"
                            // error
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
                            onChange={handleServerityChange}
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
