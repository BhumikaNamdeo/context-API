import React,{ useContext }  from 'react'
import { UserDataContext } from '../context/UserContext'

const Navbar = () => {
    const [Brand,setBrand] = useContext(UserDataContext)
    
  return (
    <div className='flex bg-blue-200 px-7 py-3 items-center justify-between'>
       <h2>{Brand}</h2>
       <div className='flex items-center justify-between gap-6'>
        <h4>About</h4>
        <h4>contact</h4> 
        <h4>Product</h4>
        <h4>About</h4>
        <button onClick={()=>{setBrand('bhumi')}} 
        className='bg-white px-2 py-1 rounded active:scale-90'>
            ChangeBrand</button>
       </div>
    </div>
  )
}

export default Navbar