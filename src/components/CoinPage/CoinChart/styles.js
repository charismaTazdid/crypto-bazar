import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    chartContainer: {
        width: "75%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25,
        padding: 40,
        [theme.breakpoints.down("md")]: {
            width: '100%',
            marginTop: 0,
            padding: 20,
            paddingTop: 0,
        }
    },
    btnDiv: {
        display: 'flex',
        marginTop: 20,
        justifyContent: "space-around",
        width: '100%'
    },


}))