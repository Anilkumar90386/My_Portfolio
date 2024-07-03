import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-card'
import { testimonials } from '@/data'

export const Clients = () => {
  return (
    <div className='py-20' id='testimonials'>
        <h1 className='heading'>
           <span className="text-white">Kind words from</span>
           <span className='text-purple'> satisfied clients</span>
        </h1>
        <div className='flex flex-col items-center mt-10'>
          <div className='h-[50vh] md:h-[23rem] rounded-md flex flex-col antialiased items-center relative'>
          <InfiniteMovingCards
             items={testimonials}
             direction='right'
             speed='slow'
          />
          </div>
        </div>
    </div>
  )
}
