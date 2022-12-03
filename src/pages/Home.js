import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import Aos from "aos"
import "aos/dist/aos.css"
import { useHistory } from 'react-router-dom'

// Import Styling
import style from '../styles/Home'

// Import Components
import NavUser from '../components/NavUser'
import SwipeUp from '../components/SwipeUp'
import ChatButton from '../components/ChatButton'
import Footer from '../components/Footer'
import FooterUser from '../components/FooterUser'
// Import Image
import banner1 from '../image/banner1.jpg'
import friendship from '../image/friendship.jpg'
import happy from '../image/happy.jpg'
import sad from '../image/sad.jpg'
import surprise from '../image/surprise.jpg'
import mission from '../image/mission.jpeg'
import vision from '../image/vision.jpeg'
// redux
import { useSelector } from 'react-redux'

// Import Material UIs
import {
    Box,
    Grid,
    Typography,
    Card,
    CardMedia,
    CardContent,
    Button,
} from '@mui/material';


function Home({handleCloseModal}) {
const user = useSelector((state) => state.user)
const history = useHistory()


    useEffect(() => {
        Aos.init({ duration: 800 });
    }, []);

    return (
        <div>
            <Box>
                {/* Navbar Here */}
                <NavUser />

                {/* Main Container */}
                <Box sx={style.mainContainer}>
                    {/* Semi Center Container */}
                    <Box sx={style.centerContainer}>
                        <Grid container sx={style.mainGridContainer} spacing={1}>
                            {/* Main Feed */}
                            <Grid item xs={12} md={9} sx={style.feedGrid}>
                                {/* Welcome Tag */}
                                <Box sx={style.welcomeContainer}>
                                    <Typography sx={style.feedText}>
                                        Welcome, {user.currentUserData[0].UserName}!
                                    </Typography>
                                </Box>

                                {/* Banner */}
                                <Box sx={{ mt: '50px' }} data-aos="fade-up">
                                    <img
                                        src={user.themes[0]?.Image}
                                        alt=""
                                        style={{
                                            objectFit: 'contain',
                                            objectPosition: 'center',
                                            width: '90%',
                                            margin: 'auto',
                                            display: 'block',
                                        }}
                                    />

                                    {/* <Box sx={style.bannerTextContainer}>
                                        <Typography sx={style.feedText}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae hic distinctio deleniti quo minima modi.
                                        </Typography>
                                    </Box> */}
                                </Box>

                                {/* For You (a.k.a Blogs) */}
                                <Box sx={style.perContainer} data-aos="zoom-in">
                                    {/* Title */}
                                    <Box>
                                        <Box sx={style.titleContainer}>
                                            <Typography sx={style.homeTitle}>For You</Typography>
                                        </Box>
                                        <Box sx={style.titleDescriptionContainer}>
                                        <Typography sx={style.titleDescription}>Here are some readings that might help for your mental health. Take some time to read as we change the content. Always remember!we are always here For You</Typography>
                                        </Box>
                                    </Box>

                                    {/* Content */}
                                    <Box>
                                        <Grid container sx={style.blogGrid}>

                                            {/* Per Blog */}
                                            {user.newsBlogs.map((blog,k) => (
                                            <Grid key={k} item sx={style.perItem} data-aos="zoom-in">
                                                <Card sx={style.cardBlog}>
                                                    <CardMedia
                                                        component="img"
                                                        height="260"
                                                        src={blog.Image}
                                                        alt=""
                                                    />

                                                    <CardContent sx={{ padding: '8px' }}>
                                                        <Box>
                                                            <Typography sx={style.productTitle}>{blog.Title}</Typography>
                                                        </Box>

                                                        <Box>
                                                            <Typography sx={style.blogDate}>
                                                                September 8, 2022
                                                            </Typography>
                                                        </Box>

                                                        <Box>
                                                            <Typography sx={style.blogDescription}>
                                                               {blog.Desc}
                                                            </Typography>
                                                        </Box>

                                                        <Box sx={style.readButtonContainer}>
                                                            <Button variant="contained" sx={style.readMoreButton} onClick={() => history.push(`blog?id=${blog.id}`) }>
                                                                Read More
                                                            </Button>
                                                        </Box>

                                                    </CardContent>
                                                </Card>
                                            </Grid> ))}

                                          

                                        </Grid>
                                    </Box>
                                </Box>

                                {/* Videos */}
                                {/* <Box sx={style.perContainer}>
                        
                                    <Box>
                                        <Box sx={style.titleContainer}>
                                            <Typography sx={style.homeTitle}>All About Mental Health</Typography>
                                        </Box>
                                        <Box sx={style.titleDescriptionContainer}>
                                        <Typography sx={style.titleDescription}>Here are some videos about Mental Health. Mental Health Awareness provides a timely reminder that that mental health is essential and that those living with mental health issues are deserving of care, understanding, compassion, and pathways to hope, healing, recovery, and fulfillment.</Typography>
                                        </Box>
                                    </Box>

                                 

                                    <Grid container spacing={1} sx={style.videoMainGrid}>
                                      
                                        <Grid item md={5.5} data-aos="zoom-in">
                                            <Box>
                                                <Card sx={style.cardBlog}>
                                                    <ReactPlayer height='200px' url='https://www.youtube.com/watch?v=DxIDKZHW3-E&ab_channel=AnnaFreudNCCF' />
                                                    <CardContent>
                                                        <Box>
                                                            <Typography sx={style.videoTitle}>
                                                                We All Have Mental Health
                                                            </Typography>
                                                        </Box>

                                                    </CardContent>
                                                </Card>
                                            </Box>
                                        </Grid>

                                      
                                        <Grid item md={5.5} data-aos="zoom-in">
                                            <Box>
                                                <Card sx={style.cardBlog}>
                                                    <ReactPlayer height='200px' url='https://www.youtube.com/watch?v=rSpg5Jxgjfc&ab_channel=AustralianDepartmentofHealthandAgedCare' />
                                                    <CardContent>
                                                        <Box>
                                                            <Typography sx={style.videoTitle}>
                                                                We All Have Mental Health
                                                            </Typography>
                                                        </Box>

                                                    </CardContent>
                                                </Card>
                                            </Box>
                                        </Grid>

                                       
                                        <Grid item md={5.5} data-aos="zoom-in">
                                            <Box>
                                                <Card sx={style.cardBlog}>
                                                    <ReactPlayer height='200px' url='https://www.youtube.com/watch?v=AcV10oWZMzU&ab_channel=TimetoChangeWales' />
                                                    <CardContent>
                                                        <Box>
                                                            <Typography sx={style.videoTitle}>
                                                                We All Have Mental Health
                                                            </Typography>
                                                        </Box>

                                                    </CardContent>
                                                </Card>
                                            </Box>
                                        </Grid>

                                   
                                        <Grid item md={5.5} data-aos="zoom-in">
                                            <Box>
                                                <Card sx={style.cardBlog}>
                                                    <ReactPlayer height='200px' url='https://www.youtube.com/watch?v=tv82K_M7o5A&ab_channel=ComicRelief%3ARedNoseDay' />
                                                    <CardContent>
                                                        <Box>
                                                            <Typography sx={style.videoTitle}>
                                                                We All Have Mental Health
                                                            </Typography>
                                                        </Box>

                                                    </CardContent>
                                                </Card>
                                            </Box>
                                        </Grid>
                                    </Grid>

                                </Box> */}

                                {/* Suggestions */}
                                <Box sx={style.perContainer}>
                                    {/* Title */}
                                    <Box>
                                        <Box sx={style.titleContainer}>
                                            <Typography sx={style.homeTitle}>Suggestions</Typography>
                                        </Box>
                                        <Box sx={style.titleDescriptionContainer}>
                                        <Typography sx={style.titleDescription}>Here are some suggestions that might help to lessen the burden you feel. Mental health is Also a Health, always take care of yourself.</Typography>
                                        </Box>
                                    </Box>

                                    {/* Content */}
                                    <Grid container sx={style.blogGrid}>

                                        {/* per item */}
                                        <Grid item sx={style.perItem} data-aos="zoom-in">
                                            <Card sx={style.suggestionCard}>
                                                <CardMedia
                                                    component="img"
                                                    src={happy}
                                                    height="250"
                                                />
                                                <CardContent>
                                                <Typography sx={style.suggestionTitle}>Find tools that work to reduce your stress.</Typography>
                                                    <Typography sx={style.suggestionContent}>Everyone is different, but many people find relief in different tools like meditation, ASMR, light exercise, or hobbies.</Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>

                                        {/* per item */}
                                        <Grid item sx={style.perItem} data-aos="zoom-in">
                                            <Card sx={style.suggestionCard}>
                                                <CardMedia
                                                    component="img"
                                                    src={friendship}
                                                    height="250"
                                                />
                                                <CardContent>
                                                <Typography sx={style.suggestionTitle}>Talk to others.</Typography>
                                                    <Typography sx={style.suggestionContent}>Talk with people you trust about your concerns and how you are feeling. Share your problems and how you are feeling and coping with a parent, friend, counselor, doctor, or pastor.</Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>

                                        {/* per item */}
                                        <Grid item sx={style.perItem} data-aos="zoom-in">
                                            <Card sx={style.suggestionCard}>
                                                <CardMedia
                                                    component="img"
                                                    src={surprise}
                                                    height="250"
                                                />
                                                <CardContent>
                                                <Typography sx={style.suggestionTitle}>Spending time outside.</Typography>
                                                    <Typography sx={style.suggestionContent}>Spending time in nature also helps your mind rest. The world is full of stressors, whether they be from work, personal relationships, or financial issues. Sometimes, you need to escape from these stressors to rest your mind. </Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>

                                    </Grid>

                                </Box>

                                {/* About Us */}
                                <Box>
                                    {/* Title */}
                                    <Box>
                                        <Box sx={style.titleContainer}>
                                            <Typography sx={style.homeTitle}>About Us</Typography>
                                        </Box>
                                        <Box sx={style.titleDescriptionContainer}>
                                            <Typography sx={style.titleDescription}>
                                            As a result of the pandemic, the PaSan: A Patnubay at Sanggunian Center for BulSU- Bustos Campus is established. PaSan provides online guidance counseling services through the university's guidance office. It provides a safe environment for students from the BulSu-Bustos Campus to evaluate and hear what they require. Mental health reflects an individual's personality; it encompasses our emotional, psychological, and social well-being. Given the importance of mental health, this website is intended to assist students in reaching the guidance counseling even if they are in a new normal setting.

                                            </Typography>
                                        </Box>
                                    </Box>

                                    {/* Container */}
                                    <Grid container>
                                        {/* Mission Text */}
                                        <Grid item xs={12} md={6}>
                                            <Box sx={style.mvContainer} data-aos="fade-up">
                                                <Box>
                                                    <Typography sx={style.mvTitle}>
                                                        Mission
                                                    </Typography>
                                                    <Typography sx={style.mvContent}>
                                                    The Patnubay at Sanggunian Center shall assist students to improve their self-knowledge, self-help, and self-direction in making realistic educational and career plans in response to the goals of Bulacan State University.
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        {/* Mission Image */}
                                        <Grid item xs={12} md={6}>
                                            <Box data-aos="fade-up">
                                                <img
                                                    src={mission}
                                                    alt=""
                                                />
                                            </Box>
                                        </Grid>
                                    </Grid>

                                    {/* Container */}
                                    <Grid container>
                                        {/* Mission Text */}
                                        <Grid item xs={12} md={6}>
                                            <Box data-aos="fade-up">
                                                <img
                                                    src={vision}
                                                    alt=""
                                                />
                                            </Box>
                                        </Grid>
                                        {/* Mission Image */}
                                        <Grid item xs={12} md={6}>
                                            <Box sx={style.mvContainer2}>
                                                <Box data-aos="fade-up">
                                                    <Typography sx={style.mvTitle2}>
                                                        Vision
                                                    </Typography>
                                                    <Typography sx={style.mvContent2}>
                                                    The Patnubay at Sanggunian Center envisions the development of individuals into self-empowered persons who have strong belief in self, who establish meaningful and achievable goals, who assume moderate risks, who assume responsibility for their actions and their own consequences, and who proactively form networks with significant others.
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>


                            {/* Side Feed */}
                            <Grid item xs={12} md={2.5} data-aos="fade-up">
                                {/* Quote of the Day */}
                                <Box sx={style.sideContainer}>
                                    <Typography sx={style.sideTitle}>
                                        Quote of the day
                                    </Typography>
                                    <Typography sx={style.sideText}>
                                      {user.themes[0]?.Quote}
                                    </Typography>
                                    {/* <Typography sx={style.quoteText}>Julian Seifter</Typography> */}
                                </Box>

                                {/* Announcement */}
                                <Box sx={style.sideContainer}>
                                    <Typography sx={style.sideTitle}>
                                        Announcement
                                    </Typography>

                                    <Typography sx={style.sideText}>
                                    {user.themes[0]?.Announcement}
                                    </Typography>
                                    {/* <Typography sx={style.quoteText}>School Registrar</Typography> */}
                                    <Box sx={{ margin: '0px 0px 15px 0px', }} />

                                  
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box >

                {/* Scroll Up */}
                < SwipeUp />
                <ChatButton handleCloseModal={handleCloseModal}/>
                <FooterUser/>
            </Box >
        </div >
    )
}

export default Home