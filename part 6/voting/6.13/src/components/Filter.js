import React from 'react'
import {useDispatch} from 'react-redux'
import {filterText} from '../reducers/filterReducer'

const Filter = () => {
  const dispatch = useDispatch()

  const changeHandler = (event) => {
    dispatch(filterText(event.target.value))
  }

  return (
    <div>
      Filter <input onChange={changeHandler} />
    </div>
  )
}

export default Filter