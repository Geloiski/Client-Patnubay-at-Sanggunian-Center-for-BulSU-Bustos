const style = {

    scrollUpButton: {
        backgroundColor: '#3a5a40',
        position: 'fixed',
        bottom: '90px',
        right: '20px',
        fontSize: '50px',
        cursor: 'pointer',
        borderRadius: '100px',
        border: 'none',
        boxShadow: '0 5px 10px #ccc',
        height: '55px',
        minWidth: '40px',
        transition: 'all ease 200ms',

        '&:hover': {
            backgroundColor: '#344e41',
        },

        '@keyframes zoomBut': {
            from: {
                opacity: 0,
                transform: 'scale(0)',
            },

            to: {
                opacity: 1,
                transform: 'scale(1)',
            },
        },

        animation: 'zoomBut .5s ease',
    },

    iconScroll: {

    },
}
export default style;