  

import { ralewayEX, ralewayMD } from '@/fonts/fonts';
import React from 'react';
import { generalProps } from '@/interfaces/interface';
import AlignCenter from '../Containers/AlignCenter';


const Card: React.FC<generalProps> = ({tittle, size,  children, cardW, cardH, cardBG, zI, font, spacing }) => {

  return (
    <>
      <AlignCenter>
        <div
        className={`flex flex-col justify-center items-center relative ${cardW} ${cardH} gap-x-5 gap-y-[2.5rem] ${cardBG} rounded-[32px] backdrop-blur-[15px] shadow-[1px_1px_10px_#000000b0] antialiased ${zI}`}>

        <span className='w-[80%] flex justify-center'>
           <h2 className={`${font} ${size} ${spacing} text-center w-fit text-white antialiased`}>
          {tittle}
          </h2>
        </span>

        <div className=''>
          {children}
        </div>

      </div>
      </AlignCenter>
      
    </>
  );
}

export default Card;