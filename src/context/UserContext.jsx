import React, { createContext, useState } from 'react'

export const UserDataContext=createContext()

const UserContext = (props) => {

    const [Brand, setBrand] = useState('sheryians')
  
    return (
    <div>
      <UserDataContext.Provider value={[Brand,setBrand]}>
        {props.children}
      </UserDataContext.Provider>
        </div>
  )
}

export default UserContext