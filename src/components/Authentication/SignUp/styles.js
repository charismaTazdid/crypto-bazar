import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        margin: '10px 15px'
    },
    signupBtn: {
        backgroundColor: "#EEBC1D",
        color: "black",
        fontWeight: 'bold'
    }
}));