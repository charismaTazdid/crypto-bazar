import React, { useEffect, useState } from 'react';
import { CryptoState } from '../../context/CryptoContext';
import { Container, createTheme, LinearProgress, TableContainer, TextField, ThemeProvider, Typography } from '@material-ui/core';
import useStyles from "./styles";
import CoinTable from './CoinTable';
import { Pagination } from '@material-ui/lab';

const CoinsTable = () => {

    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);

    const { currency, symbol, coins, loading, fetchCoins } = CryptoState();
    const classes = useStyles();

    useEffect(() => {
        fetchCoins()
    }, [currency]);

    const handleSearch = () => {
        return coins.filter((coin) => (
            coin.name.toLowerCase().includes(search) || coin.symbol.toLowerCase().includes(search)
        ));
    };

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#fff'
            },
            type: 'dark'
        }
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <Container className={classes.coinsContainer}>
                <Typography variant='h4' className={classes.title}>
                    Crytocurrency Prices By Market Cap
                </Typography>

                <TextField label="Search For a Crypto Currency" variant='outlined' className={classes.search} onChange={(e) => setSearch(e.target.value)} />

                <TableContainer>
                    {
                        loading ? (
                            <LinearProgress style={{ backgroundColor: "orange" }} />
                        ) :
                            (
                                <CoinTable handleSearch={handleSearch} symbol={symbol} page={page} />
                            )
                    }
                </TableContainer>

                {/* pagination, per page 12 item and total page(count) might be 100/12 */}
                <Pagination
                    count={Math.round(handleSearch()?.length / 12)}
                    className={classes.pagination}
                    onChange={(_, value) => {
                        setPage(value);
                        window.scroll(0, 450)
                    }}
                />

            </Container>
        </ThemeProvider>
    );
};

export default CoinsTable;