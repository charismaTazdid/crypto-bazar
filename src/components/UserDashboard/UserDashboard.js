import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { CryptoState } from '../../context/CryptoContext';
import { Avatar, Button, Typography } from '@material-ui/core';
import { signOut } from 'firebase/auth';
import { auth, db } from '../../firebase';
import useStyles from "./styles";
import { numberWithCommas } from '../CoinsTable/CoinTable';
import DeleteIcon from '@material-ui/icons/Delete';
import { doc, setDoc } from 'firebase/firestore';


const UserDashboard = () => {
    const classes = useStyles();
    const [state, setState] = useState({ right: false });

    const { user, setAlert, wishList, coins, symbol } = CryptoState();

 
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const logOUt = () => {
        signOut(auth);
        setAlert({
            open: true,
            type: "success",
            message: "Logout Successfull."
        });
        toggleDrawer();
    };

    const removeFromList = async (coin) => {
        const coinRef = doc(db, "wishlist", user.uid);

        try {
            await setDoc(coinRef,
                { coins: wishList.filter((item) => item !== coin?.id) }, { merge: "true" }
            );

            setAlert({
                open: true,
                message: `${coin.name} Removed From Your Wish List.`,
                type: "success"
            });
        }
        catch (error) {
            setAlert({
                open: true,
                message: error.message,
                type: "error"
            });
        }
    };

    return (

        <div>
            <Avatar onClick={toggleDrawer("right", true)} className={classes.avatar} src={user?.photoURL} alt={user.displayName || user.email} />
            <Drawer anchor="right" open={state["right"]} onClose={toggleDrawer("right", false)}>

                <div className={classes.container}>
                    <div className={classes.profile}>
                        <Avatar className={classes.profilePic} src={user.photoURL} alt={user.displayName || user.email} />

                        <span className={classes.userName}>
                            {user.displayName || user.email}
                        </span>

                        <div className={classes.watchList}>
                            <span style={{ fontSize: 14, textShadow: "0 0 5px black", fontWight: "bold" }}>
                                My WishList
                            </span>

                            {
                                wishList.map((item) => {

                                    let coin = coins.find((c) => c.id === item);

                                    return <div className={classes.coin}>
                                        <Typography>{coin?.name}  </Typography>

                                        <Typography > {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
                                        </Typography>
                                        <Typography>
                                            <DeleteIcon onClick={() => removeFromList(coin)} style={{ cursor: 'pointer', fontSize: "20px", color: "#a40000" }} />
                                        </Typography>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <Button className={classes.logout} onClick={logOUt} variant="contained" >
                        LOG OUT
                    </Button>
                </div>
            </Drawer>
        </div>

    );
}

export default UserDashboard;