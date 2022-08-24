import React from 'react'

const success = {
  color: 'green',
  font_size: 20,
  padding: 10,
  margin_bottom: 10
}

const Notification = ({message}) => {
  if (message === null) {return null}{
      return (<div style={success}>{message}</div>)
    }
}

export default Notification