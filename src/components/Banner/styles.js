import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    banner: {
        backgroundImage: "url(./homeBanner.png)",
        backgroundSize: "cover",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    },
    bannerContainer: {
        height: 400,
        display: "flex",
        flexDirection: 'column',
        paddingTop: 20,
        justifyContent: 'space-around'
    },

    tagline: {
        display: "flex",
        height: '40%',
        flexDirection: 'column',
        justifyContent: "center",
        textAlign: 'center'
    },

    title: {
        fontWeight: 'bold',
        marginBottom: 15,
        fontFamily: "Montserrat"
    },
    subtitle: {
        color: 'darkgray',
        textTransform: "capitalize",
        fontFamily: "Montserrat"
    },

    //carousel component style
    carousel: {
        height: '50%',
        display: 'flex',
        alignItems: 'center'
    },
    carouselItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        cursor: "pointer",
        textTransform: 'uppercase',
        color: 'white'
    },
}));