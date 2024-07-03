import React from 'react'
import {projects} from '@/data/index'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
export const RecentProjects = () => {
  return (
    <div className='py-20' id='projects'>
        <h1 className='heading'>
           <span className='text-white'>A small selection of {' '}</span>
           <span className='text-purple'>recent projects</span>
        </h1>
        <div className='flex flex-wrap items-center justify-around p-4 gap-16 mt-10'>
            {projects.map(({id,title,des,img,iconLists,link})=>(
                <div key={id} className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'>
                    <PinContainer title={title} href={link}>
                           <div className='relative flex items-center sm:w-96 w-[100vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10'>
                               <div  className='relative  overflow-hidden lg:rounded-3xl bg-[#13162d] '>
                                  <img src="/bg.png" alt="bg-img"/>
                                </div>
                                <img src={img} alt={title} className='z-40 absolute bottom-0'/>
                            </div>
                            <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white'>
                                {title}
                            </h1>
                            <p className='lg:text-l md:text-l lg:font-normal font-light line-clamp-2 text-white'>
                               {des} 
                            </p>
                            <div className='flex items-center justify-between mt-7 mb-3'>
                              <div className='flex items-center'>
                                {iconLists.map((icon,index)=>(
                                    <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10  w-9 h-9 flex items-center justify-center'
                                    style={{
                                    transform:`translateX(-${5*index*2}px)`
                                    }}>

                                        <img src={icon} alt={icon} className='p-2 ' />
                                    </div>
                                ))}
                              </div>
                              <div className='flex justify-center items-center'>
                                <p className='text-purple'>Check Live Site </p>
                                <FaLocationArrow className='ms-3' color='#CBACF9'/>
                              </div>
                            </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}
