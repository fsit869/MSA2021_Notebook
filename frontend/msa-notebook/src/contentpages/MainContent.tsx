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
import React from "react";

import Header from "../components/Header";
import { TaskComponent } from "../components/task/TaskComponent";
import AddIcon from "@material-ui/icons/Add";
import NewTask from "../components/task/NewTask";

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
  })
);

function MainContent() {
  const classes = useStyles();

  // Delete tasks !!!! CONSIDER MOVING THIS TO A MODEL LAYER
  const deleteTask = () => {
  };
  
  // Create new task
  const newTask = () => {
  };

  // Loads tasks from graphQL 
  const loadTasks = () => {
  };

  return (
    <React.Fragment>
      <Box m={3}>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <TaskComponent
              title="One"
              description="This is text that i have wrirten and it is intentionally very loing so it spans over multiple lines and yep. I actually hate using javsrirpt sand typescripoytrydrt i prefer java. I hate fronte end deveoplentewte"
              severity={0}
            ></TaskComponent>
          </Grid>
          <Grid item>
            <TaskComponent
              title="One"
              description="This is text that i have wrirten and it is intentionally very loing so it spans over multiple lines and yep. I actually hate using javsrirpt sand typescripoytrydrt i prefer java. I hate fronte end deveoplentewte"
              severity={0}
            ></TaskComponent>
          </Grid>

        </Grid>

        {/* New task FAB */}
        <NewTask></NewTask>

      </Box>
    </React.Fragment>
  );
}

export default MainContent;
