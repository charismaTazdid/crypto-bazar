import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    loginBtn: {
        width: 85,
        height: 40,
        backgroundColor: "#EEBC1D",
        color: "black",
        fontWeight: 'bold'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        width: 600,
        color: 'white',
        borderRadius: 10,
        fontWeight: 'bold',
        marginLeft: 0,
        [theme.breakpoints.down("md")]: {
            width: 380,
            marginLeft: 0,
        }

    },
    appBar: {
        backgroundColor: 'transparent',
        color: 'white',

    },
    googleLogin: {
        padding: 24,
        paddingTop: 0,
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        gap: 20,
        fontSize: 20,
    }
}))