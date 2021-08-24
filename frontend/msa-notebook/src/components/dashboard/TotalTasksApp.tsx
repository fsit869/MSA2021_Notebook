import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  createStyles,
  IconButton,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles<Theme, Props>((theme) =>
  createStyles({
    root: {
      minHeight: 200,
      minWidth: 250,
      maxHeight: 200,
      // maxWidth:250,
      flewGrow: 1,
      borderRadius: 25,
      backgroundColor: "orange",
    },
    highPriority: {},
    mediumPriority: {},
    lowPriority: {},
    noRank: {},
  })
);

interface Props {}

export const TotalTaskApp: React.FC<Props> = (props: Props) => {
  const classes = useStyles(props);
  return (
    <Paper className={classes.root} square={false} variant="outlined">
      <Box mt={3}>
        <Typography color="primary" align="center">
          Critical
        </Typography>
        <Box>
          <Typography color="primary" align="center">
            15
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};
