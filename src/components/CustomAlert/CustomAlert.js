import React from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert from "@material-ui/lab/Alert";
import { CryptoState } from '../../context/CryptoContext';

const CustomAlert = () => {

    const { alert, setAlert } = CryptoState();

    const handleClose = (e, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setAlert({ open: false })
    };

    return (
        <Snackbar open={alert?.open} autoHideDuration={3000} onClose={handleClose}>
            <MuiAlert
                onClose={handleClose}
                // elevation={10}
                variant="filled"
                severity={alert?.type}
            >
                {alert?.message}
            </MuiAlert>
        </Snackbar>
    );
};

export default CustomAlert;