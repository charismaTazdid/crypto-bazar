import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({

    selectBtn: {
        border: "1px solid gold",
        borderRadius: 4,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: "Montserrat",
        cursor: "pointer",
        width: "22%",
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center',
        "&:hover": {
            backgroundColor: "orange",
            color: "black",
        }

    }

}));