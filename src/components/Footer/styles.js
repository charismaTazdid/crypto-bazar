import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    footerContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'gray'
    },
    social: {
        display: "flex",

        margin: "0 20px",
        padding: "15px 50px",
        borderRadius: 5,
        color: "white",
        "&:hover": {
            backgroundColor: "orange",
            color: "black"
        },
    },
    iconBtn: {
        marginRight: '10px'
    }
}));