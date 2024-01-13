"use client"
import { signIn, useSession } from 'next-auth/react'
import React from 'react'

const login = () => {
   
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
    <div>
      Logged In { session.user.email }
    </div>
  )

}

export default login