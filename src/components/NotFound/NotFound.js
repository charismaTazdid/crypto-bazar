import React from 'react';
import useStyles from "./styles";


const NotFound = () => {

    const classes = useStyles();

    return (
        <div className={classes.notFound}>
            Nothing Found
        </div>
    );
};

export default NotFound;