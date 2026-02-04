import React, { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'

const Section = () => {
    const [Brand] =useContext(UserDataContext)
    
  return (
    <div className='h-[70vh] bg-gray-600 text-3xl flex items-center justify-center'>
     <h1>{Brand}</h1>
    </div>
  )
}

export default Section