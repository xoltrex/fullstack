export const showNotif = (notificationText, time) => {
  return async (dispatch) => {
    dispatch({
      type: 'SHOW',
      data: notificationText,
      time: setTimeout(() => dispatch(hideNotif()), time * 3500)
    })
  }
}

const hideNotif = () => ({type: 'HIDE'})

const reducer = (state = null, action) => {
  switch (action.type) {
    case 'SHOW':
      return action.data

    case 'HIDE':
      return null
      
    default:
      return state
  }
}

export default reducer