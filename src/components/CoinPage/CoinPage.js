import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { SingleCoin } from '../../config/api';
import useStyles from "./styles";
import CoinChart from './CoinChart/CoinChart';
import { CircularProgress, } from '@material-ui/core';
import SideBar from './SideBar/SideBar';

const CoinPage = () => {
    const { id } = useParams();
    const [coin, setCoin] = useState();
    const classes = useStyles();

    const fetchCoin = async () => {
        const { data } = await axios.get(SingleCoin(id));
        setCoin(data)
    };

    useEffect(() => {
        fetchCoin();
    }, [id]);

    if (!coin) return <CircularProgress size={200} style={{ color: "orange" }} />

    return (
        <div className={classes.container}>
            <SideBar coin={coin} />
            <CoinChart coin={coin} />
        </div>
    );
};

export default CoinPage;