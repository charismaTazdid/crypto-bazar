import React, { useEffect } from 'react';
import axios from 'axios';
import { TrendingCoins } from '../../config/api';
import useStyles from './styles';
import { CryptoState } from "../../context/CryptoContext";
import { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';

const Carousel = () => {

    const [trendingCoins, setTrendingCoins] = useState([]);
    const classes = useStyles();
    const { currency, symbol } = CryptoState();

    const fetchTrendingCoin = async () => {
        const { data } = await axios.get(TrendingCoins(currency));
        setTrendingCoins(data)
    };

    useEffect(() => {
        fetchTrendingCoin()
    }, [currency]);



    const Items = trendingCoins.map((coin) => {
        let profit = coin?.price_change_percentage_24h >= 0;
        const numberWithCommas = (x) => {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        };

        return (
            <Link className={classes.carouselItem} to={`/coins/${coin.id}`}>
                <img src={coin?.image} alt={coin.name} height="85" style={{ marginBottom: 10 }} />

                <span>{coin?.symbol} {` `}
                    
                    <span style={{color: profit> 0 ? "greenyellow" : "#ef4646", fontWeight: 'bold'}} >
                        {profit && "+"}{coin?.price_change_percentage_24h?.toFixed(2)}%
                    </span>
                </span>



                <span style={{ fontSize: 20, fontWeight: 500 }}>

                    <span style={{ fontSize: 22, fontWeight: 800 }}>{symbol}</span> {` `}

                    {numberWithCommas(coin?.current_price.toFixed(2))}

                </span>
            </Link>
        )
    });

    return (
        <div className={classes.carousel}>
            <AliceCarousel
                mouseTracking
                infinite
                autoPlayInterval={100}
                animationDuration={3000}
                disableButtonsControls
                disableDotsControls
                responsive={{ 0: { items: 2 }, 512: { items: 5 } }}
                autoPlay
                items={Items}
            />
        </div>
    );
};

export default Carousel;