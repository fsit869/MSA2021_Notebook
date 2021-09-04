// material
import {Box, Grid, Container, Typography, Paper, Button, makeStyles, Theme, createStyles} from "@material-ui/core";
import {TotalTaskApp} from "../components/dashboard/TotalTasksApp";
import {Clock} from "../components/dashboard/Clock";

// ----------------------------------------------------------------------
const useStyles = makeStyles<Theme>((theme) =>
    createStyles({
        root: {
            minHeight: '100vh',
            backgroundImage: `url(${process.env.PUBLIC_URL + "/images/blueback.jpg"})`
        },
        paper: {
            minHeight: 550,
            maxHeight: 550,
            flewGrow: 1,
            backgroundColor:"#fcfbfb"
        }
    })
);

interface Props {
}

export const DashBoard: React.FC<Props> = (props: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Box p={5} pt={5} >
                <Grid container spacing={2} justify="center">
                    <Grid item lg={6} md={12} sm={12} xs={12}>
                        <Paper className={classes.paper} variant="outlined" square={true}>
                            <Typography align="center" color="primary" variant="h5">Your Dashboard</Typography>
                            <Clock></Clock>
                        </Paper>
                    </Grid>

                    <Grid item lg={6} md={12} sm={12} xs={12}>
                        <Paper className={classes.paper} variant="outlined" square={true}>
                            <Typography align="center" color="primary" variant="h5">Statistics</Typography>
                            <Box p={5} pr={5} pl={5} pb={5} pt={1}>
                                <TotalTaskApp></TotalTaskApp>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

