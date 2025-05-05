'use client'
import { signOut } from 'next-auth/react'
import React from 'react'

const Logout = () => {
  const handleLogOut = () => {
    signOut({ callbackUrl: '/' })
  }
  return (
    <>
      <div onClick={handleLogOut}>
        <div className='bg-susuPurple text-white text-sm text-center py-2 px-4 rounded-md m-4 cursor-pointer hover:shadow-gray-400 hover:shadow-md'>
          Logout
        </div>
      </div>
    </>
  )
}

export default Logout
