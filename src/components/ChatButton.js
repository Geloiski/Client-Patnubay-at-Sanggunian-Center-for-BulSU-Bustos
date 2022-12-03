import React from 'react'

// Import styling
import style from '../styles/ChatButton'

// Import Icon
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

// Import Material UIs
import {
    Box,
    Button,
} from '@mui/material';

function ChatButton({handleCloseModal}) {
    return (
   
            <Box>
                <Button sx={style.chatButton} variant="contained" onClick={handleCloseModal}>
                    <ChatBubbleIcon sx={style.chatIcon} />
                </Button>
            </Box>
       
    )
}

export default ChatButton