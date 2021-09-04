import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    createStyles,
    IconButton,
    makeStyles,
    Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    Theme,
    Typography,
} from "@material-ui/core";
import {blue} from "@material-ui/core/colors";
import DeleteIcon from "@material-ui/icons/Delete";
import {useQuery} from "@apollo/client";
import {GET_ALL_NOTE_SEVERITIES} from "../../api/queries";
import React from "react";
import NoteInterface from "../../api/NoteInterface";

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

interface Props {
}

export const TotalTaskApp: React.FC<Props> = (props: Props) => {
    const classes = useStyles(props);
    let lowTotal=0;
    let medTotal=0;
    let highTotal=0
    let unrankedTotal=0;

    const { loading, error, data } = useQuery(GET_ALL_NOTE_SEVERITIES, );
    if (loading) return <Typography>Loading data</Typography>;
    if (error) return <Typography color="error">Error Loading Data</Typography>;
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
