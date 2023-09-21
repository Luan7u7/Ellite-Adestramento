

import React from 'react'
import { container } from '../Containers'
import { Adornment } from '../assets'
import { Button } from '../buttons'
import { FlipVertical } from 'lucide-react'

export const Eventos = () => {
  return (
    <>
      <container.frame
          className='bg-shark-950  overflow-clip'>

            <container.group className='w-full justify-between items-start font-[Inter] font-light'>

              <h1 className='text-3xl first-letter:uppercase '>eventos</h1>


              <Adornment className='bg-red-600 w-fit h-fit px-[2rem] py-1 rotate-[28deg] relative -top-[0.2rem] -right-[3.7rem] rounded-none flex justify-center items-center shadow-gray-950 shadow-[0px_4px_8px_-2px]'>
                <span className='font-[Inter] font-black text-lg leading-none uppercase'>
                  imperdivel
                </span>
              </Adornment>
            </container.group>

            <container.group className='w-full justify-between items-center font-[Inter] font-light text-xs '>

              <h2 className='w-[55%]'>fique por dentro dos eventos e interaja com outros</h2>

              <Button size='xl' className='rounded-md border-none text-shark-950 font-[Inter] font-normal  text-base uppercase p-2 gap-1 bg-shark-50 w-fit shadow-gray-950 shadow-[0px_8px_6px_-6px]'>
                ingressos
                <FlipVertical size={20} strokeWidth={1} color='#000' absoluteStrokeWidth className=''/>
              </Button>

            </container.group>
          </container.frame>
    </>
  )
}