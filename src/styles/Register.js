const style = {
    mainContainer: {
        // backgroundColor: '#d4d9d6',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    registerContainer: {
        backgroundColor: '#fff',
        borderRadius: '10px',
        width: {
            xs: '90%',
            sm: '80%',
            md: '45%',
            lg: '40%',
        },
        padding: '10px',
        transition: 'all ease .5s',
    },

    registerHeader: {
        display: 'flex',
        alignItems: 'center',
    },

    logoContainer: {
        margin: '0px 20px 0px 0px',
    },

    titleText: {
        fontFamily: 'semibold',
        color: '#333',
    },

    welcomeContainer: {
        margin: '5px 0px 0px 0px',
        padding: '10px',
        textAlign: 'center',
    },

    registerTitleBig: {
        fontFamily: 'bold',
        fontSize: '30px',
        color: '#333',
    },

    registerSubTitle: {
        fontFamily: 'poppins',
        fontSize: '14px',
    },

    registerInputContainer: {
        margin: '5px 0px 0px 0px',
        padding: '10px',
    },

    registerMargin: {
        margin: '10px 0px 0px 0px',
    },

    textboxGrid: {
        justifyContent: 'space-between',
    },

    labelPlusTextbox: {
        width: '100%',
    },

    labelPlusCheckbox: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },

    registerLabel: {
        fontFamily: 'poppins',
        fontSize: '14px',
        color: '#333',
    },

    plainTextBox: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#cccccc',
            },
            '&:hover fieldset': {
                borderColor: '#479923',
            },
            '&.Mui-focused fieldset': {
                border: '1px solid #479923',
            },

            fontFamily: 'Poppins',
            fontSize: '14px',
            padding: '10px',
            height: '45px',
            borderRadius: 0,
        },

        width: '100%',
        backgroundColor: '#fff',

        '& .MuiInputBase-input': {
            color: '#000',
            padding: 0,
            backgroundColor: '#fff',
        },
    },

    checkBoxText: {
        fontFamily: 'poppins',
        fontSize: '14px',
        cursor: 'pointer',
        color: "primary.main"
    },

    signupButton: {
        fontFamily: 'poppins',
        textTransform: 'capitalize',
    },

    rememberMe: {
        color: '#ccc',
    },

    registerButtonContainer: {
        margin: '20px 0px 0px 0px',
    },
}
export default style