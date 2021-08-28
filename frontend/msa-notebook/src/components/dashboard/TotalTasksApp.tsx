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
            color:"red",
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
    severity: number; // Severity 0=None, 1=Low, 2=Med, 3=High
    totalUnrankedTasks: number;
    totalLowRankTasks: number;
    totalMedRankTasks: number;
    totalHighRankTasks: number;
}

export const TotalTaskApp: React.FC<Props> = (props: Props) => {
    const classes = useStyles(props);
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
                        <TableCell align="center">{props.totalUnrankedTasks}</TableCell>
                    </TableRow>
                    <TableRow key="lowPriorityRow">
                        <TableCell  className={classes.lowPriorityCell} scope="row">Low</TableCell>
                        <TableCell align="center">{props.totalLowRankTasks}</TableCell>
                    </TableRow>
                    <TableRow key="medPriorityRow" >
                        <TableCell className={classes.mediumPriorityCell} scope="row">Medium</TableCell>
                        <TableCell align="center">{props.totalMedRankTasks}</TableCell>
                    </TableRow>
                    <TableRow key="highPriorityRow" >
                        <TableCell className={classes.highPriorityCell} scope="row">High</TableCell>
                        <TableCell align="center">{props.totalHighRankTasks}</TableCell>
                    </TableRow>
                </TableBody>

                <caption className={classes.headerCell}>You have {props.totalLowRankTasks+props.totalLowRankTasks+props.totalMedRankTasks+props.totalHighRankTasks} notes</caption>
            </Table>
        </TableContainer>
    );
};
