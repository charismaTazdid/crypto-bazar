import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import useStyles from './styles';
import { useNavigate } from 'react-router-dom';

export const numberWithCommas = (x) => {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};


const CoinTable = ({ handleSearch, symbol, page }) => {
    const navigate = useNavigate()
    const classes = useStyles();
    let startItemFrom = (page - 1) * 12;
    let endItem = (page - 1) * 12 + 12;



    return (
        <Table>
            <TableHead className={classes.tableTitle}>
                <TableRow>
                    {
                        ["Coin", "Price", "24h Change", "Market Cap"].map((head) => (

                            <TableCell key={head} style={{ color: 'black', fontWeight: 'bold', fontFamily: 'Montserrat' }} align={head === "Coin" ? "" : "right"}>
                                {head}
                            </TableCell>
                        ))
                    }
                </TableRow>
            </TableHead>

            <TableBody>
                {
                    handleSearch().slice(startItemFrom, endItem).map((item) => {
                        let profit = item?.price_change_percentage_24h >= 0;

                        return <TableRow className={classes.row} key={item.name}>

                            <TableCell align="left" component="th" scope='row' onClick={() => navigate(`/coins/${item.id}`)} >

                                <div style={{ display: 'flex', gap: 15 }}>
                                    <img src={item.image} alt={item.name} height="55" style={{ marginBottom: 10 }} />

                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <span style={{ textTransform: 'uppercase', fontSize: 22 }}>
                                            {item.symbol}
                                        </span>
                                        <span style={{ color: 'darkgray' }}> {item.name} </span>
                                    </div>
                                </div>

                            </TableCell>
                         


                            <TableCell align="right">
                                {symbol} {` `} {numberWithCommas(item.current_price.toFixed(2))}
                            </TableCell>


                            <TableCell align="right" style={{ color: profit > 0 ? "greenyellow" : "#ef4646", fontWeight: 'bold' }}>
                                {profit && "+"}{item?.price_change_percentage_24h?.toFixed(2)}%
                            </TableCell>

                            <TableCell align="right">
                                {symbol} {` `} {numberWithCommas(item.market_cap.toString().slice(0, -6))}{` M`}
                            </TableCell>
                        </TableRow>
                    })
                }
            </TableBody>
        </Table>
    );
};

export default CoinTable;