"use client"
import { signIn, useSession } from 'next-auth/react'
import React from 'react'
import Nav from './Nav';

const login = ({children}) => {

  const { data : session } = useSession();

  if(!session)
  {
    return (

      <div className='bg-blue-600 w-screen h-screen flex items-center justify-center'>
        <button onClick={()=>{
          signIn("google")
          }} className='w-45 h-30 p-4 mt-3 bg-green-400 rounded'>Google Sign In</button>
      </div>

    
    )
  }
  return (

         <div className='bg-blue-900 min-h-screen flex'>
      <Nav />
      <div className='bg-white flex-grow mt-2 mr-2 mb-2 rounded-l-lg text-black p-2'>
        { children }
      </div>
   </div>


    
  )
}


export default login