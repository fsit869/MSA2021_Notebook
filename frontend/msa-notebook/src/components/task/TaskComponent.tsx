/* TaskComponent.tsx

  Component which represents a task.

  @author Frank Situ
*/


import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    createStyles,
    IconButton,
    makeStyles,
    Theme,
    Typography,
} from "@material-ui/core";
import {blue} from "@material-ui/core/colors";
import DeleteIcon from "@material-ui/icons/Delete";
import {useState} from "react";

// Themes
const useStyles = makeStyles<Theme, Props>((theme) =>
    createStyles({
        root: {
            maxWidth: 260,
            minWidth: 260,
            maxHeight: 300,
            minHeight: 300,
        },
        cardHeader: {
            maxHeight: 80,
            backgroundColor: "lightyellow",
            paddingBottom: 10,
            textAlign: "left",
        },
        cardContent: {
            paddingTop: 0,
            minHeight: "160px",
            backgroundColor: "lightyellow",
        },
        actionArea: {
            backgroundColor: (props) => getServerityColours(props.severity),
        },
    })
);


interface Props {
    title: string;
    description: string;
    severity: number; // 0-3  None->Severe
}

// Set severity colours 
function getServerityColours(severity: number): string {
    if (severity === 0) {
        return "#fff9c4";
    } else if (severity === 1) {
        return "lightgreen";
    } else if (severity === 2) {
        return "orange";
    } else if (severity === 3) {
        return "#f2594d";
    } else {
        return "yellow";
    }
}

// Set serverity texts
function getServerityText(severity: number): string {
    if (severity === 0) {
        return "Unranked";
    } else if (severity === 1) {
        return "Low priority";
    } else if (severity === 2) {
        return "Medium priority";
    } else if (severity === 3) {
        return "High priority";
    } else {
        return "ERR HANDLING PRIORITY";
    }
}

export const TaskComponent: React.FC<Props> = (props: Props) => {
    const classes = useStyles(props);
    const [rendered, setRendered] = useState(true); // State determining if component is rendered.

    // Handle delete requests
    const handleDelete = () => {
        console.log("Deleted lol");
        setRendered(false);
    };

    // Unmount component
    if (rendered === false) {
        return null;
        // Also need callback to api to delete this
        // Actually could just call api delete this, then rerender all notes.
    }

    return (
        <Card className={classes.root}>
            {/* Title */}
            <CardHeader
                title={props.title}
                subheader="Date Created: 01/02/2021"
                subheaderTypographyProps={{variant: "subtitle2"}}
                className={classes.cardHeader}
            ></CardHeader>

            {/* Comments */}
            <CardContent className={classes.cardContent}>
                <Typography variant="body2" component="p">
                    {props.description}
                </Typography>
            </CardContent>

            {/* Action area */}
            <CardActions className={classes.actionArea}>

                {/* Delete button */}
                <IconButton aria-label="Delete Task" onClick={handleDelete}>
                    <DeleteIcon></DeleteIcon>
                </IconButton>

                {/* Serverity text */}
                <Typography variant="body2" align="left" component="p">
                    {getServerityText(props.severity)}
                </Typography>
            </CardActions>
        </Card>
    );
};
