import React, { useEffect, useState } from 'react';
import { CircularProgress, createTheme, ThemeProvider } from '@material-ui/core';
import axios from 'axios';
import { HistoricalChart } from '../../../config/api';
import { CryptoState } from '../../../context/CryptoContext';
import useStyles from "./styles";
import { chartDays } from '../../../config/data';
import SelectBtn from '../SelectBtn/SelectBtn';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'


const CoinChart = ({ coin }) => {
    const [historicalData, setHistoricalData] = useState();
    const [days, setDays] = useState(1);
    const { currency } = CryptoState();
    const classes = useStyles();

    const fetchHistoricalData = async () => {
        const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
        setHistoricalData(data.prices)
    };


    useEffect(() => {
        fetchHistoricalData()

    }, [currency, days, coin]);

    const darkTheme = createTheme({
        palette: {
            primary: { main: "#fff" },
            type: "dark"
        }
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <div className={classes.chartContainer}>
                {
                    !historicalData ? (
                        <CircularProgress size={250} thickness={1} style={{ color: "orange" }} />
                    )
                        :
                        (
                            <>
                                {/* Line Chart here */}
                                <h3>Got Total {historicalData.length} Data</h3>

                                <Line
                                    data={{

                                        labels: historicalData.map((item) => {

                                            let date = new Date(item[0]);
                                            let time = date.getHours() > 12 ?
                                                `${date.getHours() - 12}:${date.getMinutes()} PM`
                                                :
                                                `${date.getHours()}:${date.getMinutes()} AM`;
                                            return days === 1 ? time : date.toLocaleDateString()
                                        }),

                                        datasets: [{
                                            data: historicalData.map((item) => item[1].toFixed(2)),
                                            label: `Price (Past ${days} Days) in ${currency}`,
                                            borderColor: "goldenrod",
                                            backgroundColor: "gold"
                                        }],

                                    }}
                                    options={{
                                        elements: {
                                            point: {
                                                radius: 4,
                                                backgroundColor: "gold",
                                                pointStyle: "triangle",
                                                pointHoverBackgroundColor: "lightblue",
                                                pointBorderColor: "blue",
                                                hoverRadius: 10
                                            },

                                        },

                                    }}
                                />


                                {/* filter by days button */}
                                <div className={classes.btnDiv}>
                                    {chartDays.map((data) => (
                                        <SelectBtn
                                            key={data.label}
                                            handleClick={() => setDays(data.value)}
                                            selcted={data.value === days}
                                        >
                                            {data.label}
                                        </SelectBtn>
                                    ))}
                                </div>
                            </>
                        )
                }
            </div>
        </ThemeProvider>
    );
};

export default CoinChart;