import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'

import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'
import Logout from '@/components/Logout'

const RedirectPage = async () => {
  const session = await getServerSession(authOptions)

  return (
    <div className='flex h-screen justify-center items-center'>
      <div className='flex gap-4 flex-col'>
        <div className='flex flex-col items-center gap-x-2 text-sm'>
          {session?.user?.name}
          {session?.user.email}
          {session?.user?.image && (
            <Image
              className='rounded-full'
              width={30}
              height={30}
              alt='Avatar'
              src={session?.user?.image}
            />
          )}
        </div>
        <h1 className='text-2xl font-extrabold'>Redirecting ...</h1>
        <Logout />
      </div>
    </div>
  )
}

export default RedirectPage
