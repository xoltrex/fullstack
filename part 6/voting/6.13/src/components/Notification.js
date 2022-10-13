import React from 'react'
import {useSelector} from 'react-redux'

const Notification = () => {
const notification = useSelector((state) => state.notification)
  const style = {
    color: 'green',
    font_size: 20,
    padding: 10,
    margin_bottom: 10
  }
  return notification && 
  <div 
    style={style}>{notification}
  </div>
}

export default Notification