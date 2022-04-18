import React from 'react'
import { useParams } from 'react-router-dom'

const Diary = () => {
    /* pathvariable -> app.js */
    const {id} = useParams();
    console.log({id})
  return (
    <div>{id}Diary</div>
  )
}

export default Diary