import React from 'react';
import { AppBar, Container, createTheme, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@material-ui/core';
import useStyle from './styles';
import { Link } from 'react-router-dom';
import { CryptoState } from '../../context/CryptoContext';
import AuthModal from '../Authentication/AuthModal';
import UserDashboard from '../UserDashboard/UserDashboard';

const Header = () => {

    const { currency, setCurrency, user } = CryptoState()

    const classes = useStyle();

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
            <AppBar color='transparent' position='static'>
                <Container>
                    <Toolbar>

                        <Link to='/' style={{ flex: '1' }} >
                            <Typography className={classes.title} variant="h5"> Crypto Bazaar </Typography>
                        </Link>

                        <Select variant='outlined'
                            style={{ width: 100, height: 40, marginRight: 15 }}
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                        >

                            <MenuItem value={'BDT'}>BDT</MenuItem>
                            <MenuItem value={'USD'} >USD</MenuItem>
                            <MenuItem value={'EUR'}>EUR</MenuItem>
                            <MenuItem value={'GBP'}>GBP</MenuItem>
                            <MenuItem value={'CNY'}>CNY</MenuItem>
                        </Select>
                        {
                            user ? <UserDashboard/> : <AuthModal />
                        }
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
};

export default Header;