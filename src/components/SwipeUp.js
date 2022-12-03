import React, { useEffect, useState } from 'react'
import style from '../styles/SwipeUp'

// Import Icons
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

// Import Material UIs
import {
    Box,
    Button,
} from '@mui/material';

function ScrollUp() {

    // Back to Top Scrolling
    const [showButton, setShowButton] = useState(false); // For showing button.

    useEffect(() => {

        window.addEventListener("scroll", () => {
            if (window.scrollY > 800) {
                setShowButton(true);
                console.log("scrolled");
            } else {
                setShowButton(false);
            }
        });

    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: -20,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            <Box>
                {showButton && (
                    <Button variant="contained" sx={style.scrollUpButton} onClick={scrollToTop}>
                        <KeyboardDoubleArrowUpIcon sx={style.iconScroll} />
                    </Button>
                )}
            </Box>
        </div>
    )
}

export default ScrollUp