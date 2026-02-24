import React from 'react'
import { createContext } from 'react'
// full code is same for all web
export const UserContext=createContext();// user context is a variable , can be used any name
export default function Contextprovider({children}) {

    const host= "http://localhost:8080" // port number as per backend

  return (
    <div>
      <UserContext.Provider value={{host}}>
        {children}
      </UserContext.Provider>
    </div>
  )
}
