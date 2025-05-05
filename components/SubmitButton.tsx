'use client'

import React from 'react'
import { useFormStatus } from 'react-dom'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface ButtonProps {
  isLoading?: boolean
  className?: string
  children?: React.ReactNode
}

const SubmitButton = ({ isLoading, className, children }: ButtonProps) => {
  const { pending } = useFormStatus()

  return (
    <Button
      type='submit'
      disabled={pending || isLoading}
      className={cn(className ?? 'bg-green-700 text-white w-full')}
    >
      {pending || isLoading ? (
        <div className='flex items-center gap-4'>
          <Image
            src='/assets/icons/loader.svg'
            alt='loader'
            width={24}
            height={24}
            className='animate-spin'
          />
          Loading...
        </div>
      ) : (
        children
      )}
    </Button>
  )
}

export default SubmitButton
