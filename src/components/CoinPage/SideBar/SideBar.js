import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { numberWithCommas } from '../../CoinsTable/CoinTable';
import { CryptoState } from '../../../context/CryptoContext';
import parse from 'html-react-parser';
import useStyles from "./styles";
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../../firebase';

const SideBar = ({ coin }) => {

    const { currency, symbol, user, wishList, setAlert } = CryptoState();
    const classes = useStyles();

    const isAllreadyInList = wishList.includes(coin?.id);

    //wish list oparation
    const addToWishList = async () => {
        const coinRef = doc(db, "wishlist", user.uid);

        try {
            await setDoc(coinRef, { coins: wishList ? [...wishList, coin.id] : [coin.id] });
            setAlert({
                open: true,
                message: `${coin.name} Added to your Wish List.`,
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

    const removeFromWishtList = async () => {
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
        <div className={classes.sidebar}>

            <img src={coin?.image?.large} alt={coin?.name} height="200" style={{ marginBottom: 20 }} />
            <Typography variant='h3' className={classes.heading}> {coin?.name} </Typography>
            <Typography variant='subtitle1' className={classes.description}>

                {parse(`${coin?.description?.en.split(". ")[0]}`)}

            </Typography>

            <div className={classes.marketData}>
                <div style={{ display: 'flex' }}>
                    <Typography className={classes.heading} variant="h5"> Rank: </Typography>
                    <Typography style={{ fontFamily: "Montserrat", marginLeft: '10px' }} variant="h5">  {coin?.market_cap_rank} </Typography>
                </div>

                <div style={{ display: 'flex' }}>
                    <Typography className={classes.heading} variant="h5"> Current Price: </Typography>
                    <Typography style={{ fontFamily: "Montserrat", marginLeft: '10px' }} variant="h5"> {symbol} {numberWithCommas(coin?.market_data.current_price[currency.toLowerCase()])}   </Typography>
                </div>

                <div style={{ display: 'flex' }}>
                    <Typography className={classes.heading} variant="h5"> Market Cap:  </Typography>
                    <Typography style={{ fontFamily: "Montserrat", marginLeft: '10px' }} variant="h5"> {symbol} {numberWithCommas(coin?.market_data.market_cap[currency.toLowerCase()].toString().slice(0, -6))}  M </Typography>
                </div>

                <Button disabled={!user} className={classes.wishListBtn} variant='outlined' onClick={isAllreadyInList ? removeFromWishtList : addToWishList} style={{ backgroundColor: isAllreadyInList && "red" }}>
                    {
                        isAllreadyInList ? "Remove From WishList" : "ADD to WishList"
                    }
                </Button>


            </div>

        </div>
    );
};

export default SideBar;