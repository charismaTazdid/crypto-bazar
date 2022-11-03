import React from 'react';
import useStyles from "./styles";


const SelectBtn = ({ children, selcted, handleClick }) => {

    const classes = useStyles();

    return (
        <span className={classes.selectBtn}
            onClick={handleClick}
            style={{ backgroundColor: `${selcted ? "orange" : ""}`, color: selcted ? "black" : "", fontWeight: selcted ? "bold" : "500" }}
        >

            {children}

        </span>
    );
};

export default SelectBtn;