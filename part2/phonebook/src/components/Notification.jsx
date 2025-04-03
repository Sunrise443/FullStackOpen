const Notification = ({ message }) => {
    if (message===null) {
        return null
    }

    const messageStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        margin: 10
    }
    
    return (
        <div style={messageStyle}>
            {message}
        </div>
    )
}

export default Notification
