// import LoginInForm from '@/components/forms/LoginInForm'
// import LoginGoogle from '@/components/LoginGoogle'
// import { ModeToggle } from '@/components/ModeToggle'
// import { auth } from '@/lib/auth'
import LoginInForm from '@/components/forms/LoginInForm'
import LoginGoogle from '@/components/LoginGoogle'
import ThemeToggle from '@/components/providers/ThemeToggle'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

const Home = async () => {
  // const session = await auth()

  // if (session?.user) {
  //   redirect('/redirect')
  // }

  return (
    <div className='p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center'>
      <div className='absolute top-4 right-4'>
        <ThemeToggle />
      </div>
      <section className='h-full shadow-2xl dark:shadow-slate-900 rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] xl:w-1/2 gap-8 '>
        {/* Image Container */}
        <div className='relative h-1/3 w-full md:h-full md:w-1/2'>
          <Image
            src='/assets/images/Growthtrack-img1.jpg'
            alt='Growth Track'
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='object-cover w-[1280] h-[1010]'
          />
        </div>
        {/* Form Container */}
        <div className=' flex flex-col gap-4 md:w-1/2 p-2'>
          <h1 className='font-bold text-center text-xl lg:text-3xl'>Log In</h1>
          <LoginInForm />
          <div className=''>
            <p className='text-center pb-3'>Or</p>
            <LoginGoogle />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
