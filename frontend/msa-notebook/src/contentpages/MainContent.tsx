import { Box, Button, Card, CardContent, createStyles, Fab, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";

import Header from "../components/Header";
import { TaskComponent } from "../components/task/TaskComponent";
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles<Theme> (theme=>
    createStyles({
          fabStyle: {
          margin: 0,
          top: 'auto',
          right: 30,
          bottom: 30,
          left: 'auto',
          position: 'fixed',
        }
  
    })
  )

function MainContent() {
    const classes = useStyles();

    return (
    <React.Fragment>
        <Box m={3}>

            <Grid container spacing={2} justify="center">
                <Grid item>
                    <TaskComponent title="One" description="This is text that i have wrirten and it is intentionally very loing so it spans over multiple lines and yep. I actually hate using javsrirpt sand typescripoytrydrt i prefer java. I hate fronte end deveoplentewte" severity={0}></TaskComponent>
                </Grid>
                <Grid item>
                    <TaskComponent title="One" description="This is text that i have wrirten and it is intentionally very loing so it spans over multiple lines and yep. I actually hate using javsrirpt sand typescripoytrydrt i prefer java. I hate fronte end deveoplentewte" severity={0}></TaskComponent>
                </Grid>
                <Grid item>
                    <TaskComponent title="One" description="This is text that i have wrirten and it is intentionally very loing so it spans over multiple lines and yep. I actually hate using javsrirpt sand typescripoytrydrt i prefer java. I hate fronte end deveoplentewte" severity={0}></TaskComponent>
                </Grid>
                <Grid item>
                    <TaskComponent title="One" description="This is text that i have wrirten and it is intentionally very loing so it spans over multiple lines and yep. I actually hate using javsrirpt sand typescripoytrydrt i prefer java. I hate fronte end deveoplentewte" severity={0}></TaskComponent>
                </Grid>
                <Grid item>
                    <TaskComponent title="One" description="This is text that i have wrirten and it is intentionally very loing so it spans over multiple lines and yep. I actually hate using javsrirpt sand typescripoytrydrt i prefer java. I hate fronte end deveoplentewte" severity={0}></TaskComponent>
                </Grid>
                <Grid item>
                    <TaskComponent title="One" description="This is text that i have wrirten and it is intentionally very loing so it spans over multiple lines and yep. I actually hate using javsrirpt sand typescripoytrydrt i prefer java. I hate fronte end deveoplentewte" severity={1}></TaskComponent>
                </Grid>
                <Grid item>
                    <TaskComponent title="One" description="This is text that i have wrirten and it is intentionally very loing so it spans over multiple lines and yep. I actually hate using javsrirpt sand typescripoytrydrt i prefer java. I hate fronte end deveoplentewte" severity={2}></TaskComponent>
                </Grid>
                <Grid item>
                    <TaskComponent title="One" description="This is text that i have wrirten and it is intentionally very loing so it spans over multiple lines and yep. I actually hate using javsrirpt sand typescripoytrydrt i prefer java. I hate fronte end deveoplentewte" severity={3}></TaskComponent>
                </Grid>
                <Grid item>
                    <TaskComponent title="One" description="This is text that i have wrirten and it is intentionally very loing so it spans over multiple lines and yep. I actually hate using javsrirpt sand typescripoytrydrt i prefer java. I hate fronte end deveoplentewte" severity={0}></TaskComponent>
                </Grid>
                <Grid item>
                    <TaskComponent title="One" description="This is text that i have wrirten and it is intentionally very loing so it spans over multiple lines and yep. I actually hate using javsrirpt sand typescripoytrydrt i prefer java. I hate fronte end deveoplentewte" severity={0}></TaskComponent>
                </Grid>
                <Grid item>
                    <TaskComponent title="One" description="This is text that i have wrirten and it is intentionally very loing so it spans over multiple lines and yep. I actually hate using javsrirpt sand typescripoytrydrt i prefer java. I hate fronte end deveoplentewte" severity={0}></TaskComponent>
                </Grid>
                <Grid item>
                    <TaskComponent title="One" description="This is text that i have wrirten and it is intentionally very loing so it spans over multiple lines and yep. I actually hate using javsrirpt sand typescripoytrydrt i prefer java. I hate fronte end deveoplentewte" severity={0}></TaskComponent>
                </Grid>
            </Grid>

            <Fab color="primary" aria-label="add" variant="extended" className={classes.fabStyle} >
              <AddIcon />
            </Fab>
        </Box>
    </React.Fragment>
    )
  }
  
  export default MainContent;