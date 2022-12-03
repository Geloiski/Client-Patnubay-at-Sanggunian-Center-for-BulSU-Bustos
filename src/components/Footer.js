import React from 'react'

// Import Style
import style from '../styles/Footer'

// Import Material UIs
import {
    Box,
    Grid,
    Typography,
    Link,
    Collapse,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    Paper
} from '@mui/material';

import InfoIcon from '@mui/icons-material/Info';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

function Footer() {

    const HtmlTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: '#f5f5f9',
            color: 'rgba(0, 0, 0, 0.87)',
            maxWidth: 220,
            fontSize: theme.typography.pxToRem(12),
            border: '1px solid #dadde9',
        },
    }));

    return (
        <div>
            {/* Main Footer Container */}
            <Box sx={style.mainContainer}>
                <Box sx={style.topContainer}>
                    <Typography sx={style.contactText}>You may also contact and follow:</Typography>
                </Box>

                <Box sx={style.middleContainer}>
                    <Grid container sx={style.mainGrid}>
                        <Grid item xs={12} md={1.5}>
                            <Box sx={style.logoandicon1}>
                                <a href="https://www.facebook.com/BulSUSGMHC" target="_blank" style={{ textDecoration: 'none', }}>
                                    <Typography sx={style.textIcon1}>BulSU MHC</Typography>
                                </a>
                                <HtmlTooltip
                                    title={
                                        <React.Fragment>
                                            Note: this page dont provide services but they assist student and advocate for mental health awareness and action.
                                        </React.Fragment>
                                    }
                                >
                                    <InfoIcon sx={style.info} />
                                </HtmlTooltip>

                            </Box>
                        </Grid>

                        <Grid item xs={12} md={2}>
                            <Box sx={style.logoandicon2}>
                                <a href="https://www.facebook.com/BSUpatnubayatsanggunian" target="_blank" style={{ textDecoration: 'none', }}>
                                    <Typography sx={style.textIcon2}> BUSTOS Guidance Center</Typography>
                                </a>
                                <HtmlTooltip
                                    title={
                                        <React.Fragment>
                                            Note: this is the official fb page of bustos guidance and counseling center (Patnubay at Sanggunian Center).
                                        </React.Fragment>
                                    }
                                >
                                    <InfoIcon sx={style.info} />
                                </HtmlTooltip>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={style.bottomContainer}>
                    <Typography sx={style.copyrightText}>Copyright © 2022 - Pasan Center</Typography>
                </Box>

            </Box>
        </div >
    )
}

export default Footer