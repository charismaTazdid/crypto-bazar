import React, { useState } from 'react';
import { Box, Button, TextField } from '@material-ui/core';
import useStyles from "./styles";
import { CryptoState } from '../../../context/CryptoContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';

const Login = ({ handleModalClose }) => {

    const classes = useStyles();
    const { setAlert } = CryptoState();

    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        const { email, password } = formData;

        if (!email || !password) {
            setAlert({
                open: true,
                message: "Please Fill both fields",
                type: "error"
            });
            return;
        };

        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            setAlert({
                open: true,
                message: `SignIn successfull. Welcome ${result.user.email}`,
                type: "success"
            });
            handleModalClose();

        } catch (err) {
            setAlert({
                open: true,
                message: err.message,
                type: "error"
            });
        }
    };


    return (
        <Box className={classes.container}>
            <TextField
                variant='outlined'
                type="email"
                label="Your Email"
                name='email'
                value={formData.email}
                onChange={handleChange}
            />
            <TextField
                variant='outlined'
                type="password"
                label="Password "
                placeholder='Type your password'
                name='password'
                value={formData.password}
                onChange={handleChange}
            />

            <Button size='large'
                variant='contained'
                className={classes.loginBtn}
                onClick={handleSubmit} >
                LogIn
            </Button>
        </Box>
    );
};

export default Login;