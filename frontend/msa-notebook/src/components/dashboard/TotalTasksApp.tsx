import {
    createStyles,
    makeStyles,
    Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    Theme,
    Typography,
} from "@material-ui/core";
import {useQuery} from "@apollo/client";
import {GET_ALL_NOTE_SEVERITIES} from "../../api/queries";
import React from "react";
import NoteInterface from "../../api/NoteInterface";

// Styling
const useStyles = makeStyles<Theme, Props>((theme) =>
    createStyles({
        root: {
            flewGrow: 1,
            minHeight:'120px'
        },
        headerCell:{
            backgroundColor:"lightgrey",
        },
        highPriorityCell: {
            color:"#f2594d",
            backgroundColor:"#f7f7f7"
        },
        mediumPriorityCell: {
            color:"orange",
            backgroundColor:"#f7f7f7"
        },
        lowPriorityCell: {
            color:"green",
            backgroundColor:"#f7f7f7"
        },
        noPriorityCell: {
            color:"blue",
            backgroundColor:"#f7f7f7"
        }
    })
);

// No props taken
interface Props {
}

/**
 * Component that displays total tasks from API
 * @param props
 * @constructor
 */
export const TotalTaskApp: React.FC<Props> = (props: Props) => {
    const classes = useStyles(props);
    // Counters
    let lowTotal=0;
    let medTotal=0;
    let highTotal=0
    let unrankedTotal=0;

    // fetch data from API
    const { loading, error, data } = useQuery(GET_ALL_NOTE_SEVERITIES, );
    if (loading) return <Typography>Loading data</Typography>;
    if (error) return <Typography color="error">Error Loading Data</Typography>;

    // Count total notes
    data.getAllNotes.map((currentNote:NoteInterface) => {
        if (currentNote.severity==3) {
            highTotal += 1;
        } else if (currentNote.severity==2) {
            medTotal += 1;
        } else if (currentNote.severity==1) {
            lowTotal += 1;
        } else {
            unrankedTotal +=1;
        }
    });

    // Return Component
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead className={classes.headerCell} >
                    <TableCell>Priority</TableCell>
                    <TableCell align="center">Total</TableCell>
                </TableHead>

                <TableBody>
                    <TableRow key="noPriorityRow" >
                        <TableCell className={classes.noPriorityCell} scope="row">Unranked</TableCell>
                        <TableCell align="center">{unrankedTotal}</TableCell>
                    </TableRow>
                    <TableRow key="lowPriorityRow">
                        <TableCell  className={classes.lowPriorityCell} scope="row">Low</TableCell>
                        <TableCell align="center">{lowTotal}</TableCell>
                    </TableRow>
                    <TableRow key="medPriorityRow" >
                        <TableCell className={classes.mediumPriorityCell} scope="row">Medium</TableCell>
                        <TableCell align="center">{medTotal}</TableCell>
                    </TableRow>
                    <TableRow key="highPriorityRow" >
                        <TableCell className={classes.highPriorityCell} scope="row">High</TableCell>
                        <TableCell align="center">{highTotal}</TableCell>
                    </TableRow>
                </TableBody>

                <caption className={classes.headerCell}>You have {unrankedTotal+lowTotal+medTotal+highTotal} notes</caption>
            </Table>
        </TableContainer>
    );
};
