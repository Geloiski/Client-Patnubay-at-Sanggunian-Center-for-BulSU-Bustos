const style = {
    centerContainer: {
        width: {
            xs: '90%',
            md: '70%',
        },
        margin: 'auto',
    },

    mainGridContainer: {
        margin: '50px 0px 0px 0px',
    },

    sideTitle: {
        fontFamily: 'poppins',
        fontSize: '13px',
        color: '#fff',
        margin: '0px 0px 10px 0px',
        backgroundColor: '#2e8359',
        padding: '2px',
        textAlign: 'center',
    },

    sideText: {
        fontFamily: 'poppins',
        fontSize: '12px',
    },

    quoteText: {
        fontFamily: 'poppins',
        fontSize: '13px',
        color: '#2e8359',
    },

    sideContainer: {
        margin: '0px 0px 20px 0px',
        border: '1px solid #ccc',
        padding: '10px',
    },

    feedGrid: {
        padding: '10px',
    },

    welcomeContainer: {
        backgroundColor: '#CCFFCC',
        padding: '15px',
        borderRadius: '5px',
        border: '1px solid #4AB94A',
    },

    feedText: {
        fontFamily: 'semibold',
        fontSize: '13px',
    },

    perContainer: {
        margin: '100px 0px 0px 0px',
        borderBottom: '1px solid #e1e1e1',
    },

    bannerTextContainer: {
        padding: '10px',
        textAlign: 'justify',
    },

    titleContainer: {
        width: '100%',
        textAlign: 'center',
        position: 'relative',
        marginTop: '50px',
    },

    homeTitle: {
        fontFamily: 'bold',
        fontSize: '25px',
        position: 'relative',
        marginRight: 'auto',
        marginBottom: '2rem',
        color: '#242323',

        '&:after': {
            content: '""',
            width: '100px',
            height: '4px',
            backgroundColor: '#2e8359',
            position: 'absolute',
            bottom: '-1.2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            borderRadius: '2px',
            marginBottom: '5px',
        },
    },

    titleDescriptionContainer: {
        justifyContent: 'center',
        display: 'center',
        textAlign: 'center',
        margin: '0px 0px 120px 0px',
    },

    titleDescription: {
        fontFamily: 'poppins',
        fontSize: '13px',
        color: '#414833',
        width: '60%',
    },

    blogGrid: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: {
            xs: 'space-evenly',
            sm: 'center',
            md: 'center',
            lg: 'center',
        },
    },

    perItem: {
        margin: {
            xs: '0px 0px 5px 0px',
            sm: '0px 0px 5px 0px',
            md: '0px 8px 8px 5px',
            lg: '0px 8px 8px 5px',
        },
    },

    cardBlog: {
        maxWidth: {
            lg: 290,
        },
        borderRadius: 0,
        backgroundColor: '#f2f2f2',
        padding: '2px',

        '&:hover': {
            boxShadow: 10,
        },
    },

    productTitle: {
        fontFamily: 'semibold',
        fontSize: '14px',
        marginBottom: '5px',
        color: '#000',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: '1',
        WebkitBoxOrient: 'vertical',
        width: '170px',
    },

    blogDescription: {
        fontFamily: 'poppins',
        fontSize: '12px',
        color: '#000',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: '3',
        WebkitBoxOrient: 'vertical',
        width: '90%',
    },

    blogDate: {
        fontFamily: 'poppins',
        fontSize: '12px',
        color: '#3a5a40',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: '3',
        WebkitBoxOrient: 'vertical',
        width: '90%',
        marginBottom: '10px',
    },

    readButtonContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: {
            xs: 'center',
            md: 'flex-end',
        },
        margin: '10px 0px -15px 0px',
    },

    readMoreButton: {
        borderRadius: 0,
        fontFamily: 'poppins',
        textTransform: 'capitalize',
        backgroundColor: '#3a5a40',
        border: '1px solid transparent',
        boxShadow: 0,
        fontSize: '13px',

        '&:hover': {
            color: '#3a5a40',
            borderColor: '#3a5a40',
            backgroundColor: 'transparent',
            transition: '200ms ease-in',
            boxShadow: 0,
        },
    },

    videoTitle: {
        fontFamily: 'semibold',
        fontSize: '14px',
        color: '#333',
        textAlign: 'center',
        margin: '0px 0px -10px 0px',
    },

    videoMainGrid: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    suggestionCard: {
        maxWidth: {
            lg: 200,
        },
        borderRadius: 0,
        backgroundColor: '#f2f2f2',
        padding: '2px',

        '&:hover': {
            boxShadow: 10,
        },
    },

    suggestionTitle: {
        fontFamily: 'semibold',
        fontSize: '16px',
        color: '#000',
        textAlign: 'center',
        margin: '0px 0px 10px 0px',
    },

    suggestionContent: {
        fontFamily: 'poppins',
        fontSize: '13px',
        color: '#333',
        textAlign: 'center',
    },

    mvTitle: {
        fontFamily: 'semibold',
        fontSize: '15px',
        mb: '10px',
    },

    mvContent: {
        fontFamily: 'poppins',
        fontSize: '14px',
        width: '90%',
        mb: '10px',
        lineHeight: '22px',
    },

    mvContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '30vh',
    },

    mvTitle2: {
        fontFamily: 'semibold',
        fontSize: '15px',
        mb: '10px',
        textAlign: 'right',
    },

    mvContent2: {
        fontFamily: 'poppins',
        fontSize: '14px',
        mb: '10px',
        textAlign: 'right',
        lineHeight: '22px',
    },

    mvContainer2: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '30vh',
    },
}
export default style