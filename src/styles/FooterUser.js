const style = {
    mainContainer: {
        backgroundColor: '#e7e8ea',
        padding: '10vh 0vh 10vh 0vh',
        margin: '50px 0px 0px 0px',

    },

    centerContainer: {
        width: {
            xs: '100%',
            md: '80%',
        },
        margin: 'auto',
        borderBottom: '1px solid #ccc',
    },

    bottomContainer: {
        width: {
            xs: '100%',
            md: '80%',
        },
        margin: 'auto',
        padding: '30px 0px 10px 0px',
    },

    footerLogoContainer: {
        display: 'flex',
        justifyContent: {
            xs: 'center',
            md: 'flex-start',
        },
    },

    textLogo: {
        fontFamily: 'semibold',
        textTransform: 'uppercase',
        fontSize: '18px',
        color: '#414833',
        letterSpacing: '-1px',
        lineHeight: '20px',
        margin: '0px 5px 0px 0px',
    },

    logoPicInfo: {
        margin: '10px 0px 0px 0px',
        padding: '10px',
        
    },

    infoIcon: {
        fontSize: '13px',
        color: '#2E8359',
    },

    bsuLinkContainer: {
        display: 'flex',
        textAlign: {
            xs: 'center',
            md: 'left',
        },
        justifyContent: {
            xs: 'center',
            md: 'flex-start',
        },
    },

    logoDescription: {
        fontSize: '13px',
        color: '#414833',
        fontFamily: 'poppins',
    },

    descriptionContainer: {
        padding: '10px',
    },

    titleFooter: {
        fontFamily: 'bold',
        fontSize: '25px',
        textTransform: 'uppercase',
        color: '#414833',
    },

    titleContainer: {
        margin: '50px 0px 20px 0px',
    },

    footerLink: {
        whiteSpace: 'nowrap',
        fontFamily: 'poppins',
        fontSize: '14px',
        color: '#414833',
        position: 'relative',
        lineHeight: '16px',

        '&:before': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '1px',
            borderRadius: '4px',
            bottom: '-8px',
            left: '0',
            transformOrigin: 'right',
            transform: 'scaleX(0)',
            transition: 'transform .3s ease-in-out',
            backgroundColor: '#414833',
        },


        '&:hover': {

            '&:before': {
                transformOrigin: 'left',
                transform: 'scaleX(1)',
            },
        },
    },

    linkHolder: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: {
            xs: 'center',
            md: 'flex-start',
        },
        marginLeft: {
            xs: '0px',
            md: '-15px',
        },
    },

    listItemFooter: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: {
            xs: 'center',
            md: 'flex-start',
        },
    },

    contactTitle: {
        fontFamily: 'semibold',
        fontSize: '14px',
        color: '#414833',
    },

    contactDetails: {
        fontFamily: 'poppins',
        fontSize: '14px',
    },

    mainGrid: {
        justifyContent: {
            xs: 'center',
            md: 'flex',
        },

        textAlign: {
            xs: 'center',
            md: 'left',
        },
    },

    copyRight: {
        fontFamily: 'poppins',
        fontSize: '13px',
        color: '#414833',
    },

    perContact: {
        margin: '0px 0px 10px 0px',
    },
}
export default style;