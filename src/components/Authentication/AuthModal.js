import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { AppBar, Box, Button, Tab, Tabs } from '@material-ui/core';
import useStyles from "./styles";
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import GoogleButton from 'react-google-button';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase';
import { CryptoState } from '../../context/CryptoContext';

const AuthModal = () => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(0);
    const { setAlert } = CryptoState();


    const handleChange = (e, newValue) => {
        setValue(newValue)
    };

    const handleModalClose = () => {
        setOpen(false);
    };


    const ggleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        signInWithPopup(auth, ggleProvider)
            .then(res => {
                setAlert({
                    open: true,
                    message: `SignIn Successfull. Welcome ${res.user.email}`,
                    type: "success"
                });
                handleModalClose();
            })
            .catch(err => {
                setAlert({
                    open: true,
                    message: err.message,
                    type: "error"
                })
                return;
            })
    };

    return (
        <div>
            <Button variant='contained' className={classes.loginBtn} onClick={() => setOpen(true)}> Login </Button>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleModalClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <AppBar position='static' className={classes.appBar}>

                            <Tabs value={value} onChange={handleChange} variant="fullWidth" style={{ borderRadius: 10 }}>
                                <Tab label="Login"></Tab>
                                <Tab label="Sign Up"></Tab>

                            </Tabs>
                        </AppBar>
                        {value === 0 && <Login handleModalClose={handleModalClose} />}
                        {value === 1 && <SignUp handleModalClose={handleModalClose} />}

                        <Box className={classes.googleLogin}>
                            <span>OR</span>
                            <GoogleButton onClick={signInWithGoogle} style={{ width: "100%", outline: "none" }} />
                        </Box>

                    </div>
                </Fade>
            </Modal>
        </div>
    );
}

export default AuthModal;