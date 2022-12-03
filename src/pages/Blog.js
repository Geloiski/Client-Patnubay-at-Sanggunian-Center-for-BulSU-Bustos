import React from 'react'
import {  useLocation } from "react-router-dom";
// Import Style
import style from '../styles/Blog'

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
import { formatDistance, subDays } from 'date-fns'

// Image
import banner from '../image/banner1.jpg'
import { format } from 'date-fns';

// Import Components
import NavUser from '../components/NavUser'
import FooterUser from '../components/FooterUser'
import SwipeUp from '../components/SwipeUp'
import ChatButton from '../components/ChatButton'
import { useSelector } from 'react-redux';

function Blog({handleCloseModal}) {
    const user = useSelector((state) => state.user);
    const [payload, setPayload] = React.useState([]);
console.log(payload);
    const useQuery = () => {  
        return new URLSearchParams(useLocation().search);
      };
      let queryy = useQuery();
      let urlId = queryy.get("id");

      React.useEffect(() => {
        user.newsBlogs.filter((form) => {
          if (form.id === urlId) {
            setPayload(form);
          }
        });
      }, [urlId]);

    return (
        <div>
            {/* Main Container */}
            <Box sx={style.mainContainer}>
                <NavUser />
                {/* Center Container */}
                <Box sx={style.centerContainer}>

                    {/* Blog Image */}
                    <Box>
                        <img
                            src={payload.Image}
                            alt=""
                            style={{
                                objectFit: 'contain',
                                objectPosition: 'center',
                                width: '90%',
                                margin: 'auto',
                                display: 'block',
                            }}
                        />
                    </Box>

                    {/* Blog Content */}
                    <Box>
                        {/* Date */}
                        <Box>
                            <Typography sx={style.blogDate}>    { payload.Created?.seconds &&
                  formatDistance(subDays(new Date(), 0), new Date(payload.Created?.seconds * 1000))}</Typography>
                        </Box>

                        {/* Title */}
                        <Box>
                            <Typography sx={style.blogTitle}>{payload.Title}</Typography>
                        </Box>

                        {/* Content */}
                        <Box sx={style.contentContainer}>
                            <Typography sx={style.contentText}>{payload.Desc}</Typography>
                        </Box>

                        {/* <Box sx={style.contentContainer}>
                            <Typography sx={style.contentText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias asperiores eaque quo sint aliquam explicabo consectetur, aut tenetur vero magni iure autem tempora culpa beatae sed, quos inventore! At, similique. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi accusamus tempore at! Unde distinctio impedit doloremque possimus sint cupiditate nulla magni perferendis officia, vel est quisquam nam architecto! Doloremque, ipsa.</Typography>
                        </Box>

                        <Box sx={style.contentContainer}>
                            <Typography sx={style.contentText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias asperiores eaque quo sint aliquam explicabo consectetur, aut tenetur vero magni iure autem tempora culpa beatae sed, quos inventore! At, similique. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi accusamus tempore at! Unde distinctio impedit doloremque possimus sint cupiditate nulla magni perferendis officia, vel est quisquam nam architecto! Doloremque, ipsa.</Typography>
                        </Box>

                        <Box sx={style.contentContainer}>
                            <Typography sx={style.contentText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias asperiores eaque quo sint aliquam explicabo consectetur, aut tenetur vero magni iure autem tempora culpa beatae sed, quos inventore! At, similique. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi accusamus tempore at! Unde distinctio impedit doloremque possimus sint cupiditate nulla magni perferendis officia, vel est quisquam nam architecto! Doloremque, ipsa.</Typography>
                        </Box> */}
                    </Box>
                </Box>
                <SwipeUp />
                <ChatButton handleCloseModal={handleCloseModal}/>
                <FooterUser />
            </Box>
        </div>
    )
}

export default Blog