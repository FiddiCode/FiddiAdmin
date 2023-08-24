import React from 'react'
import './user.scss'
import Single from "../../components/Single/Single"
import { singleUser } from "../../data"

const User = () => {
  return (
    <div className='user'>
         <Single {...singleUser}/>
    </div>
  )
}

export default User