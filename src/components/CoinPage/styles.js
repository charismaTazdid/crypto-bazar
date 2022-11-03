import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    container: {
        display: 'flex',
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
        }
    },
}));