const style = {
    centerContainer: {
        width: {
            xs: '90%',
            md: '60%',
        },

        margin: '30px auto',
        height: '300vh',
    },

    appointmentBox: {
        border: '1px solid #ccc',
        padding: '5px',
    },

    appointmentTitle: {
        padding: '2px',
        backgroundColor: '#2e8359',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '30px',
    },

    appointmentTitleText: {
        fontFamily: 'poppins',
        fontSize: '13px',
        color: '#fff',
    },

    appointmentPerContainer: {
        margin: '20px 0px',
        padding: '5px',
    },

    perAppointment: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },

    statusBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8a241d',
        width: '50%',
        margin: 'auto',
        textAlign: 'center',
        borderRadius: '6px',
        marginBottom: '10px',
    },

    statusBoxConfirmed: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#479923',
        width: '50%',
        margin: 'auto',
        textAlign: 'center',
        borderRadius: '6px',
        marginBottom: '10px',
    },

    statusBoxFollowUp: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff6600',
        width: '50%',
        margin: 'auto',
        textAlign: 'center',
        borderRadius: '6px',
        marginBottom: '10px',
    },

    statusBoxFailedToAttend: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        width: '70%',
        margin: 'auto',
        textAlign: 'center',
        borderRadius: '6px',
        marginBottom: '10px',
    },

    statusPending: {
        fontFamily: 'semibold',
        color: '#fff',
        fontSize: '13px',
    },

    statusConfirmed: {
        fontFamily: 'semibold',
        color: '#fff',
        fontSize: '13px',
    },

    appointmentTimeDate: {
        fontFamily: 'poppins',
        fontSize: '13px',
    },

    moreLink: {
        fontFamily: 'poppins',
        textDecoration: 'none',
        color: '#2e8359',
        fontStyle: 'italic',
        fontSize: '13px',
        margin: '0px 0px 10px 0px',
    },

    addButton: {
        fontFamily: 'poppins',
        fontSize: '13px',
        textTransform: 'capitalize',
        boxShadow: '0',
    },

    hideContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '10px 0px 0px 0px',
        borderTop: '1px solid #ccc',
        padding: '10px 0px 0px 0px',
    },

    hideTitle: {
        fontFamily: 'semibold',
        fontSize: '13px',
    },

    hideDetails: {
        fontFamily: 'poppins',
        fontStyle: 'italic',
        fontSize: '13px',
    },

    cancelButton: {
        fontFamily: 'poppins',
        fontSize: '13px',
        textTransform: 'capitalize',
        boxShadow: '0',
        margin: '10px 0px 15px 0px',
        backgroundColor: 'red',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'red',
         },
    },

    confirmedButton: {
        fontFamily: 'poppins',
        fontSize: '13px',
        textTransform: 'capitalize',
        boxShadow: '0',
        margin: '10px 0px 15px 0px',
        cursor: 'pointer'
    },

    noteText: {
        fontFamily: 'poppins',
        fontSize: '12px',
        color: '#4a4a4a',
        textAlign: 'center',
        margin: '0px 0px 10px 0px',
    },

    recordBox: {
        border: '1px solid #ccc',
        padding: '5px',
    },

    myRecordsBox: {
        border: '1px solid #ccc',
    },

    recordTitle: {
        padding: '5px',
    },

    recordTitleText: {
        backgroundColor: '#2e8359',
        height: '35px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'poppins',
        fontSize: '14px',
        color: '#fff',
    },

    recordsInfo: {
        padding: '5px',
    },

    recordText: {
        fontFamily: 'poppins',
        fontSize: '13px',
        margin: '10px 0px 20px 0px',
        color: '#4a4a4a',
    },

    myRecordsText: {
        fontFamily: 'poppins ',
        backgroundColor: '#2e8359',
        height: '35px',
        fontSize: '14px',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    recordInfoContainer: {
        display: 'flex',
        alignItems: 'center',
    },

    infoIdentifier1: {
        fontFamily: 'semibold',
        fontSize: '13px',
        margin: '0px 15px 0px 0px',
    },

    infoIdentifier2: {
        fontFamily: 'semibold',
        fontSize: '13px',
        margin: '0px 28px 0px 0px',
    },

    infoIdentifier3: {
        fontFamily: 'semibold',
        fontSize: '13px',
        margin: '0px 15px 0px 0px',
    },

    infoIdentifier4: {
        fontFamily: 'semibold',
        fontSize: '13px',
        margin: '0px 20px 0px 0px',
    },

    infoText: {
        fontFamily: 'poppins',
        fontSize: '13px',
    },

    tableContainer: {
        border: '1px solid #8e8e8e',
        margin: '10px 0px',
        padding: '5px',
    },

    tablePaperContainer: {
        boxShadow: 0,
        borderRadius: 0,
    },

    studentTable: {
        // backgroundColor: '#16304D',
        backgroundColor: '#fff',
        borderRadius: 0,
    },

    tableHead: {
        backgroundColor: '#2e8359',
    },

    tableCell: {
        fontFamily: 'poppins',
        fontSize: '13px',
        color: '#fff',
    },

    tableCellDetails: {
        fontFamily: 'poppins',
        fontSize: '13px',
        color: '#000',
    },

    printContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    buttonPrint: {
        fontFamily: 'poppins',
        textTransform: 'capitalize',
        fontSize: '13px',
        boxShadow: '0',
    },

    printIcon: {
        fontSize: '20px',
        margin: '0px 5px 0px 0px',
    },

    filterMainContainer: {
        display: 'flex',
        alignItems: 'center',
        padding: '5px',
        marginTop: '30px',
    },

    sortLabel: {
        fontFamily: 'semibold',
        fontSize: '14px',
        marginRight: '10px',
    },

    sortDrop: {
        fontFamily: 'poppins',
        fontSize: '14px',
        color: '#383838',
        height: '35px',
        boxShadow: 0,
        border: '1px solid #ccc',
        width: {
            xs: '100px',
            lg: '300px',
        },

        "& .MuiSvgIcon-root": {
            color: '#000',
        },
    },

    selectChoices: {
        fontFamily: 'poppins',
        fontSize: '14px',
    },

    messageMainContainer: {
        marginBottom: '10px',
    },

    messageBorder: {
        border: '1px solid #ccc',
        padding: '5px',
    },

    messageText: {
        fontFamily: 'poppins',
        fontSize: '13px',
        color: '#4A4A4A',
        marginTop: '10px',
    },

}
export default style