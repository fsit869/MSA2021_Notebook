/* Clock.tsx

Component that displays current Date and time.

Author: Frank Situ
 */
import {
    createStyles,
    makeStyles,
    Paper,
    Theme,
    Typography,
} from "@material-ui/core";
import {useEffect, useState} from "react";

// Themes
const useStyles = makeStyles<Theme, Props>((theme) =>
    createStyles({
        root: {
            flewGrow: 1,
            backgroundColor: "#fcfbfb"
        },
    })
);

// No Props taken
interface Props {
}

/**
 * Clock component that displays current time
 * @param props None taken
 * @constructor
 */
export const Clock: React.FC<Props> = (props: Props) => {
    const classes = useStyles(props);
    const [currentDate, setCurrentDate] = useState(new Date().toLocaleString()); // Timer state

    // Update clock every second
    useEffect(() => {
        let secTimer = setInterval(() => {
            setCurrentDate(new Date().toLocaleString())
        }, 1000)

        return () => clearInterval(secTimer);
    }, []);

    // Return clock component
    return (
        <Paper className={classes.root} square={false} variant="outlined">
            <Typography variant="h4" align="center" color="textPrimary">
                {currentDate}
            </Typography>
        </Paper>
    );
};
