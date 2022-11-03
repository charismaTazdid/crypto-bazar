import React, { useState } from 'react';
import { Box, Button, TextField } from '@material-ui/core';
import useStyles from "./styles"
import { CryptoState } from '../../../context/CryptoContext';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../../../firebase';

const SignUp = ({ handleModalClose }) => {
    const classes = useStyles();
    const [formData, setFormData] = useState({ fullName: "", email: '', password: '', confirmPassword: '' });
    const { setAlert } = CryptoState();


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        const { fullName, email, password, confirmPassword, } = formData;

        if (password.length >= 8 && password === confirmPassword) {
            try {
                const result = await createUserWithEmailAndPassword(auth, email, password);
                setAlert({ open: true, message: `SignUp Successfull! welcome  ${result.user.email}!`, type: "success" });
                updateProfile(auth.currentUser, {
                    displayName: fullName,
                })
                    .then(() => { })
                    .catch((error) => {

                    });
                handleModalClose();

            } catch (error) {
                setAlert({
                    open: true,
                    message: error.message,
                    type: "error"
                })
            }
        };

        if (password.length < 8) {
            setAlert({ open: true, message: "Password Must have atleast 8 Character.", type: "error" });
            return;
        }
        if (password !== confirmPassword) {
            setAlert({ open: true, message: "Password Doesn't Match!", type: "error" });
            return;
        }

    };

    return (
        <Box className={classes.container}>
            <TextField
                variant='outlined'
                type="name"
                label="Full Name"
                name='fullName'
                value={formData.fullName}
                onChange={handleChange}
            />


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
                placeholder='8+ character'
                name='password'
                value={formData.password}
                onChange={handleChange}
            />
            <TextField
                variant='outlined'
                type="password"
                label="Confirm Password"
                name='confirmPassword'
                value={formData.confirmPassword}
                onChange={handleChange}
            />

            <Button size='large'
                variant='contained'
                className={classes.signupBtn}
                onClick={handleSubmit} >
                Sign Up
            </Button>
        </Box>
    );
};

export default SignUp;