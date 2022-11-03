import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    coinsContainer: {
        textAlign: 'center'
    },
    title: {
        margin: 18,
        fontFamily: "Montserrat"
    },
    search: {
        marginBottom: 20,
        width: "100%"
    },

    //style for coin table 
    tableTitle: {
        backgroundColor: 'orange'
    },
    row: {
        backgroundColor: "#16171a",
        cursor: 'pointer',
        "&:hover": {
            backgroundColor: "#131111"
        },
        fontFamily: "Montserrat"
    },

    //style for coin table 
    pagination: {
        padding: 30,
        width: '100%',
        display: ' flex',
        justifyContent: 'center',

        "& .MuiPaginationItem-root": {
            color: "#ffbf00",
            fontWeight: "bold",
            fontSize: 18
        }
    },


}))