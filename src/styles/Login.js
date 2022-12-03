const style = {
    mainContainer: {
        // backgroundColor: '#d4d9d6',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    loginContainer: {
        backgroundColor: '#fff',
        borderRadius: '10px',
        width: {
            xs: '90%',
            sm: '80%',
            md: '35%',
            lg: '30%',
        },
        padding: '10px',
        transition: 'all ease .5s',
    },

    loginHeader: {
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
    },

    loginTextBig: {
        fontFamily: 'semibold',
        fontSize: '30px',
        color: '#333',
    },

    loginSubTitle: {
        fontFamily: 'poppins',
        fontSize: '14px',
    },

    loginInputContainer: {
        margin: '5px 0px 0px 0px',
        padding: '10px',
    },

    labelPlusTextbox: {

    },

    loginLabel: {
        fontFamily: 'poppins',
        fontSize: '14px',
        color: '#333',
    },

    emailTextBox: {
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

    passwordTextBox: {
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

    container: {
        margin: '15px 0px 0px 0px',
    },

    formLabel: {
        '& .MuiFormControlLabel-label': {
            fontFamily: 'poppins',
            fontSize: '14px',
            color: '#333',
        },
    },

    rememberMe: {
        color: '#cccccc',
    },

    loginButton: {
        fontFamily: 'poppins',
        textTransform: 'capitalize',
    },

    linkText: {
        fontFamily: 'poppins',
        fontSize: '14px',
        color: '#333',
        textAlign: 'center',
    },

}
export default style;