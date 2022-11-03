import React, { useEffect, useState, useContext, createContext } from 'react';
import axios from 'axios';
import { CoinList } from '../config/api';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, onSnapshot } from 'firebase/firestore';

const Context = createContext();

const CryptoContext = ({ children }) => {

    const [currency, setCurrency] = useState("BDT");
    const [symbol, setSymbol] = useState("৳");

    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [alert, setAlert] = useState({ open: false, message: "", type: "" });
    const [wishList, setWishList] = useState([]);


    const fetchCoins = async () => {
        setLoading(true);
        const { data } = await axios.get(CoinList(currency));
        setCoins(data)
        setLoading(false);
    };

    useEffect(() => {
        if (currency === "BDT") {
            setSymbol("৳")
        } else if (currency === "USD") {
            setSymbol("$")
        } else if (currency === "GBP") {
            setSymbol("£")
        }
        else if (currency === "CNY") {
            setSymbol("¥")
        }
        else if (currency === "EUR") {
            setSymbol("€")
        }

    }, [currency]);

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) setUser(user)
            else setUser(null)
        })
    }, []);

    useEffect(() => {
        if (user) {
            const coinRef = doc(db, "wishlist", user.uid);
            var unsubscribe = onSnapshot(coinRef, result => {
                if (result.exists()) {
                    setWishList(result.data().coins)
                }
                else {
                    console.log("NO ITEM IN WISHLIST");
                }
            });
            return () => {
                unsubscribe()
            }
        }


    }, [user]);

    return (
        <Context.Provider value={{ currency, symbol, setCurrency, coins, loading, fetchCoins, alert, setAlert, user, setUser, wishList, setWishList }}>
            {children}
        </Context.Provider>
    );
};

export default CryptoContext;


export const CryptoState = () => {
    return useContext(Context)
}