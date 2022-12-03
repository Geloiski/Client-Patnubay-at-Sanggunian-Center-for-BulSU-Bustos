const style = {
    mainContainer: {
        backgroundColor: '#2e8359',
        height: '12vh',
        display: 'flex',
        alignItems: 'center',
    },

    centerContainer: {
        width: {
            xs: '90%',
            md: '80%',
        },
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    logoText: {
        fontFamily: 'poppins',
        fontSize: '13px',
        color: '#fff',
    },

    logoContainer: {
        display: 'flex',
        alignItems: 'center',
    },

    linkList: {
        display: 'flex',
        alignItems: 'center',
    },

    navLink: {
        whiteSpace: 'nowrap',
        fontFamily: 'poppins',
        fontSize: '13px',
        color: '#fff',
        position: 'relative',

        '&:before': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '2px',
            borderRadius: '4px',
            backgroundColor: '#fff',
            bottom: '-8px',
            left: '0',
            transformOrigin: 'right',
            transform: 'scaleX(0)',
            transition: 'transform .3s ease-in-out',
        },


        '&:hover': {

            '&:before': {
                transformOrigin: 'left',
                transform: 'scaleX(1)',
            },
        },
    },

    linkListContainer: {
        margin: '0px 40px 0px 0px'
    },

    navigationContainer: {
        display: {
            xs: 'none',
            md: 'flex',
        },
        alignItems: 'center',
    },

    menuContainer: {
        display: {
            xs: 'flex',
            md: 'none',
        },
    },

    headerContainer: {
        backgroundColor: '#2e8359',
        height: '10vh',
        display: 'flex',
        alignItems: 'center',
    },

    perLinkText: {
        fontFamily: 'poppins',
        fontSize: '14px',
        color: '#000',
        margin: '20px 0px 5px 0px',
    },

    drawerLinkContainer: {
        padding: '10px 20px 0px 20px',
    },

    drawerEnd: {
        backgroundColor: '#2e8359',
        height: '5vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    copyrightText: {
        fontFamily: 'poppins',
        fontSize: '13px',
        fontStyle: 'italic',
    },


}
export default style