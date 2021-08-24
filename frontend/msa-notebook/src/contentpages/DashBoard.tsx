// material
import { Box, Grid, Container, Typography, Paper } from "@material-ui/core";
import { TotalTaskApp } from "../components/dashboard/TotalTasksApp";
// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Box p={5} pt={5}>
      <Grid container spacing={5} justify="center">
        <Grid item lg={12}>
          <TotalTaskApp></TotalTaskApp>
        </Grid>
        <Grid item lg={3}>
          <TotalTaskApp></TotalTaskApp>
        </Grid>
        <Grid item lg={3}>
          <TotalTaskApp></TotalTaskApp>
        </Grid>
        <Grid item lg={3}>
          <TotalTaskApp></TotalTaskApp>
        </Grid>
        <Grid item lg={3}>
          <TotalTaskApp></TotalTaskApp>
        </Grid>
      </Grid>
    </Box>
  );
}
