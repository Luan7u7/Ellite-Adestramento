
import React from 'react'
import { generalProps } from '@/interfaces'


export const Card: React.FC<generalProps> = ({title, size,  children, width = 'w-full', height = 'h-full', index, font, spacing }) => {

  return (
    <>
        <div
        id='CARD'
        className={`flex flex-col justify-center items-center relative ${width} ${height} gap-x-5 bg-glass rounded-[2rem] bg-opacity-75 bg-blend-overlay shadow-[1px_1px_10px] shadow-gray-900 ${index} overflow-hidden backdrop-blur-lg antialiased `}>

        <span className='w-4/5 flex justify-center'>
           <h2 className={`${font} ${size} ${spacing} text-center w-fit text-zinc-300 antialiased pb-4`}>
          {title}
          </h2>
        </span>

        <div id='CHILDREN-CARD' className='w-full h-fit'>
          {children}
        </div>

      </div>
      
    </>
  );
}

