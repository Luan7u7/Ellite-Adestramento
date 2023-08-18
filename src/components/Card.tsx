
import React from 'react'
import { generalProps } from '@/interfaces'


export const Card: React.FC<generalProps> = ({tittle, size,  children, cardW, cardH, cardBG, zI, font, spacing }) => {

  return (
    <>
        <div
        id='CARD'
        className={`flex flex-col justify-center items-center relative ${cardW} ${cardH} gap-x-5  ${cardBG} rounded-[32px] bg-opacity-70 backdrop-blur-[15px] shadow-[1px_1px_10px_#000000b0] antialiased ${zI} overflow-hidden`}>

        <span className='w-[79%] flex justify-center'>
           <h2 className={`${font} ${size} ${spacing} text-center w-fit text-zinc-300 antialiased pb-4`}>
          {tittle}
          </h2>
        </span>

        <div id='CHILDREN-CARD' className='w-full h-fit'>
          {children}
        </div>

      </div>
      
    </>
  );
}

