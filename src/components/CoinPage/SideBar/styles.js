import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
    sidebar: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 25,
        borderRight: "2px solid gray",
        width: '30%',
        [theme.breakpoints.down("md")]: {
            width: "100%",
            borderRight: 'none'
        },
    },

    heading: {
        fontWeight: 'bold',
        marginBottom: 20,
        fontFamily: "Montserrat"
    },
    description: {
        width: '100%',
        fontFamily: "Montserrat",
        padding: 25,
        paddingBottom: 15,
        paddingTop: 0,
        textAlign: "justify",
    },

    marketData: {
        alignSelf: 'start',
        padding: 25,
        paddingTop: 10,
        width: "100%",
        [theme.breakpoints.down("md")]: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        [theme.breakpoints.down("sm")]: {
            flexDirection: 'column',
            alignItems: 'center'
        },
        [theme.breakpoints.down("xs")]: {
            alignItems: 'start',
        }
    },

    wishListBtn: {
        width: "100%",
        height: 40,
        backgroundColor: "orange",
        fontWeight: "bold",
        color: "white",
        "&:hover": {
            backgroundColor: "gray",
            color: "white",
        }
    }
}))