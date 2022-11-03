import { Container, Typography } from '@material-ui/core';
import React from 'react';
import Carousel from './Carousel';
import useStyles from './styles';

const Banner = () => {
    const classes = useStyles();

    return (
        <div className={classes.banner}>
            <Container className={classes.bannerContainer}>
                <div className={classes.tagline}>
                    <Typography variant='h2' className={classes.title}>
                        Crypto Bazaar
                    </Typography>
                    <Typography variant='subtitle2' className={classes.subtitle}>
                        Get All Update Regarding Your Favourite Crypto Currancy
                    </Typography>
                </div>

                {/* Custom carousel with react-alice-carousel */}
                <Carousel />


            </Container>
        </div>
    );
};

export default Banner;