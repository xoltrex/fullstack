import React from "react";

const Buttons = (props) => {
  return (    
    <button 
      onClick={props.handleClick}>{props.text}
    </button>
  )
}

export default Buttons