import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex items-center justify-items-center h-screen w-full font-[family-name:var(--font-geist-sans)]'>
      <Button className='p-3 rounded-full shadow-gray-500'>Growth Track</Button>
    </div>
  )
}
