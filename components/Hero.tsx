import React, { Component } from 'react'
import { Spotlight } from './ui/Spotlight'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { Magicbutton } from './ui/tailwindbutton'
import { FaLocationArrow } from 'react-icons/fa'
const Hero = () => {
  return (
    <div className='pb-20 pt-36 text-center flex items-start justify-center '

    style={{
        background:'rgb(4,7,29)',
      backgroundColor:
        "linear-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(48,47,117,1) 23%, rgba(7,6,94,1) 24%, rgba(8,7,101,1) 27%, rgba(9,9,121,1) 35%, rgba(8,28,134,1) 41%, rgba(8,37,140,1) 44%, rgba(0,212,255,1) 100%);(180deg, var(--slate-800), var(--slate-900)",
    }}
   
    >
        <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white"/>
        <Spotlight className='-top-10 left-full h-[80vh] w-[50vw]' fill="purple"/>
        <Spotlight className='-top-28 left-80 h-[80vh] w-[50vw]' fill="blue"/>
        </div>
        
            <div className="h-screen w-full dark:bg-black-100 bg-white   bg-grid-black/[0.3]  flex items-center justify-center absolute top-0 left-0">
            {/* Radial gradient for the container to give a faded look */}
           <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>  
        </div>
         <div className="text-center justify-content-center relative my-20 z-10 md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <div className='max-w-[89vw'>
                <h2 className='uppercase tracking-widest text-xm text-center text-blue-100 max-w-100'>
                    <strong className='text-purple'>Hello</strong>,Welcome to My Portfolio
                </h2>
                    <TextGenerateEffect
                       className='text-center text-[30px] md:text-4xl lg:text-5xl'
                       words='Transforming Concepts into seamless User Experiences' />
                <p className='text-center md:tracking-wider mb-4 text-sm md:text-2.5lg lg:text-xl'>Hi, I&apos;m <span className='md:text-2xl  lg:text-3xl text-purple'>AnilKumar</span>, a Software Developer based in Croatia.</p>
                <a href="https://drive.google.com/file/d/12BXFg5UaWRIh76y_vZtqG4ZwlV-AsFIR/view?usp=sharing">
                    <Magicbutton title="Download My Resume "
                     icon={<FaLocationArrow/>}
                     position='right'
                    />
                </a>
             
            </div>
         </div>
    </div>

  )
}

export default Hero