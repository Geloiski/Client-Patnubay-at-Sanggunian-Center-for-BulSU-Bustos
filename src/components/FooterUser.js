import React from 'react'
import { Link } from 'react-router-dom';

// Import Style
import style from '../styles/FooterUser'

// Import Material UIs
import {
    Box,
    Grid,
    Typography,
    List,
    ListItem
} from '@mui/material';

// Import Image
import logo from '../image/logo.png'
import mhc from '../image/mhc.png'
import green from '../image/green.png'
import orange from '../image/orange.png'

// For Tool Tip
import InfoIcon from '@mui/icons-material/Info';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

function FooterUser() {

    const HtmlTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: '#2E8359',
            color: '#fff',
            maxWidth: 220,
            fontSize: '13px',
            padding: '10px',
            fontFamily: 'poppins',
        },
    }));

    return (
        <div>
            {/* Main Container */}
            <Box sx={style.mainContainer}>
                {/* Middle Container */}
                <Box sx={style.centerContainer}>

                    {/* Main Grid Container*/}
                    <Box sx={style.mainGridBox}>
                        {/* Main Grid */}
                        <Grid container sx={style.mainGrid}>

                            {/* per item */}
                            <Grid item xs={12} md={3}>
                                {/* Logo */}
                                <Box sx={style.footerLogoContainer}>

                                    {/* BSU GREEN Logo */}
                                    <Box>
                                        <img
                                            alt=""
                                            src={green}
                                            style={{
                                                width: '80px',
                                            }}
                                        />
                                    </Box>

                                    {/* BSU ORANGE Logo */}
                                    <Box>
                                        <img
                                            alt=""
                                            src={orange}
                                            style={{
                                                width: '80px',
                                            }}
                                        />
                                    </Box>

                                    {/* Pasan Logo */}
                                    <Box>
                                        <img
                                            alt=""
                                            src={logo}
                                            style={{
                                                width: '80px',
                                            }}
                                        />
                                    </Box>

                                </Box>

                                {/* Logo Name - Information */}
                                <Box sx={style.logoPicInfo}>
                                    <Box sx={style.bsuLinkContainer}>
                                        <a href="https://www.facebook.com/BulSUSGMHC" target="_blank" style={{ textDecoration: 'none', }}>
                                            <Typography sx={style.textLogo}>BulSU MHC</Typography>
                                        </a>

                                        <HtmlTooltip
                                            title={
                                                <React.Fragment>
                                                    Note: this page dont provide services but they assist student and advocate for mental health awareness and action.
                                                </React.Fragment>
                                            }
                                        >
                                            <InfoIcon sx={style.infoIcon} />
                                        </HtmlTooltip>
                                    </Box>

                                    <Box sx={style.bsuLinkContainer}>
                                        <a href="https://www.facebook.com/BulSUSGMHC" target="_blank" style={{ textDecoration: 'none', }}>
                                            <Typography sx={style.textLogo}>BUSTOS Guidance Center</Typography>
                                        </a>

                                        <HtmlTooltip
                                            title={
                                                <React.Fragment>
                                                    Note: this is the official fb page of bustos guidance and counseling center (Patnubay at Sanggunian Center).
                                                </React.Fragment>
                                            }
                                        >
                                            <InfoIcon sx={style.infoIcon} />
                                        </HtmlTooltip>
                                    </Box>
                                </Box>

                                {/* Description - Shortext */}
                                <Box sx={style.descriptionContainer}>
                                    <Typography sx={style.logoDescription}>
                                        PaSan provides online guidance counseling services through the university's guidance office. It provides a safe environment for students from the BulSu-Bustos Campus to evaluate and hear what they require.
                                    </Typography>
                                </Box>

                            </Grid>

                            {/* per item */}
                            <Grid item xs={12} md={3}>
                                {/* Title */}
                                <Box sx={style.titleContainer}>
                                    <Typography sx={style.titleFooter}>Quick Links</Typography>
                                </Box>

                                <Box>
                                    <List sx={style.listItemFooter}>
                                        <ListItem sx={style.linkHolder}>
                                            <Link to="/home" style={{ textDecoration: 'none', }}>
                                                <Typography sx={style.footerLink}>Home</Typography>
                                            </Link>
                                        </ListItem>

                                        <ListItem sx={style.linkHolder}>
                                            <Link to="/assesment" style={{ textDecoration: 'none', }}>
                                                <Typography sx={style.footerLink}>Assessment</Typography>
                                            </Link>
                                        </ListItem>

                                        <ListItem sx={style.linkHolder}>
                                            <Link to="/counseling" style={{ textDecoration: 'none', }}>
                                                <Typography sx={style.footerLink}>Counseling</Typography>
                                            </Link>
                                        </ListItem>

                                    </List>
                                </Box>
                            </Grid>

                            {/* per item */}
                            <Grid item xs={12} md={3}>
                                {/* Title */}
                                <Box sx={style.titleContainer}>
                                    <Typography sx={style.titleFooter}>Contact Us</Typography>
                                </Box>

                                <Box>
                                    {/* Address */}
                                    <Box sx={style.perContact}>
                                        <Typography sx={style.contactTitle}>Address:</Typography>
                                        <Typography sx={style.contactDetails}>L.Mercado St. Cor. C.L. Hilario St., Bustos, 3007 Bulacan</Typography>
                                    </Box>

                                    {/* Email Address */}
                                    <Box sx={style.perContact}>
                                        <Typography sx={style.contactTitle}>Email Address:</Typography>
                                        <Typography sx={style.contactDetails}>noel.deguzman@bulsu.edu.ph</Typography>
                                    </Box>

                                </Box>
                            </Grid>

                        </Grid>
                    </Box>

                </Box>

                {/* Footer footer */}
                <Box sx={style.bottomContainer}>
                    <Box>
                        <Typography sx={style.copyRight}>Copyright © 2022 - Bulacan State University Pasan Center</Typography>
                    </Box>
                    <Box>
                        <Typography sx={style.copyRight}>Vector Images are downloaded online. Credits to the owner.
                            <a href='https://www.vecteezy.com/free-vector/contest' target="_blank" style={{
                                textDecoration: 'none',
                            }}> https://www.vecteezy.com/free-vector/contest</a>
                        </Typography>
                    </Box>

                </Box>
            </Box>
        </div>
    )
}

export default FooterUser