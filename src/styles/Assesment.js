const style = {
    middleContainer: {
        margin: ' 30px auto',
        width: {
            xs: '95%',
            md: '60%',
        },
    },

    gridLeft: {
        padding: '5px',
    },

    gridRight: {
        padding: '5px',
    },

    formHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2e8359',
        padding: '10px',
    },

    completeHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2e8359',
        padding: '10px',
        margin: '0px 0px 10px 0px',
    },

    headerTitle: {
        fontFamily: 'poppins',
        fontSize: '14px',
        color: '#fff',
    },

    searchText: {
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
            borderRadius: 0,
        },

        backgroundColor: '#fff',
        marginRight: '10px',

        '& .MuiInputBase-input': {
            color: '#000',
            padding: 0,
            backgroundColor: '#fff',
        },
    },

    searchContainer: {
        display: 'flex',
        alignItems: 'center',
        margin: '10px 0px 0px 0px',
    },

    searchButton: {
        fontFamily: 'poppins',
        fontSize: '13px',
        boxShadow: '0',
        textTransform: 'capitalize',
    },

    perFormItemOpen: {
        borderRadius: '5px',
        border: '1px solid #11911c',
        padding: '10px',
        margin: '10px 0px 0px 0px',
        backgroundColor: '#c0fcc5',
    },

    perFormItemClose: {
        borderRadius: '5px',
        border: '1px solid #bd0d00',
        padding: '10px',
        margin: '10px 0px 0px 0px',
        backgroundColor: '#ff9d96',
    },

    formTitleContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0px 0px 10px 0px',
    },

    formTitle: {
        fontFamily: 'semibold',
        fontSize: '14px',
    },

    formContent: {
        fontFamily: 'poppins',
        fontSize: '14px',
        color: '#3b3b3b',
    },

    formStatusTrue: {
        fontFamily: 'poppins',
        color: '#fff',
        backgroundColor: '#0a400e',
        borderRadius: '5px',
        padding: '5px',
        fontSize: '13px',
    },

    formStatusFalse: {
        fontFamily: 'poppins',
        color: '#fff',
        backgroundColor: '#8a0a01',
        borderRadius: '5px',
        padding: '5px',
        fontSize: '13px',
    },

    answeredTitle: {
        fontFamily: 'semibold',
        fontSize: '14px',
    },

    answeredDateAndAY: {
        fontFamily: 'poppins',
        fontSize: '13px',
        color: '#3b3b3b',
    },

    answeredMain: {
        backgroundColor: '#fff',
        boxShadow: 1,
    },

    answeredForms: {
        m: 2,
    },

}
export default style