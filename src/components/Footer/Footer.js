import React from 'react';
import useStyles from "./styles";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {

    const classes = useStyles();

    return (
        <div className={classes.footerContainer}>
            <div>
                &copy; Raihan Tazdid
            </div>

            <a className={classes.social} href="https://github.com/raihan-tajdid007" target="_blank" rel="noreferrer">

                <GitHubIcon fontSize='small' className={classes.iconBtn} />
                github
            </a>


            <a className={classes.social} href="https://www.linkedin.com/in/raihan-tazdid/" target="_blank" rel="noreferrer">

                <LinkedInIcon fontSize='small' className={classes.iconBtn} />
                Linkedin
            </a>

        </div>
    );
};

export default Footer;