'use client'

import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { signIn } from 'next-auth/react'

const LoginGoogle = () => {
  const handleLogin = () => {
    signIn('google', { callbackUrl: '/redirect' })
  }

  return (
    <Button
      onClick={handleLogin}
      className='flex gap-4 p-4 ring-1 ring-orange-400 dark:ring-orange-200 rounded-md w-full'
    >
      <Image
        src='/assets/images/google.png'
        alt=''
        width={20}
        height={20}
        className='object-contain'
      />
      <span>Use Google</span>
    </Button>
  )
}

export default LoginGoogle
