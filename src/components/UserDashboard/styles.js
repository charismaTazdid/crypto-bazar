import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    avatar: {
        height: 38,
        width: 38,
        cursor: "pointer",
        backgroundColor: "#EEBC1D"
    },
    container: {
        width: 350,
        padding: 25,
        height: "100%",
        display: 'flex',
        flexDirection: "column",
        fontFamily: "monospace"
    },
    profile: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: '20px',
        height: "92%"
    },
    profilePic: {
        width: 200,
        height: 200,
        cursor: 'pointer',
        backgroundColor: '#EEBC1D',
        objectFit: "contain"
    },
    userName: {
        width: '100%',
        fontSize: 25,
        textAlign: "center",
        fontWeight: "bold",
        wordWrap: "break-word"
    },
    watchList: {
        flex: 1,
        width: "100%",
        backgroundColor: "gray",
        padding: 10,
        borderRadius: 10,
        paddingTop: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 12,
        overflow: "scroll"

    },
    logout: {
        height: "6%",
        width: "100%",
        marginTop: 20,
        backgroundColor: "#EEBC1D",
        fontWeight: "bold"
    },
    coin: {
        padding: 10,
        borderRadius: 5,
        color: "black",
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#EEBC1D",
        boxShadow: "0 0 5px black"
    }
}))