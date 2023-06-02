  

import { ralewayMD } from '@/fonts/fonts';
import React from 'react';
import ContainerFull from '../Containers/Container';
import { generalProps } from '@/interfaces/interface';
import Adornment from '../adornment/Adornment';


const Card: React.FC<generalProps> = ({tittle,  children, cardW, cardH, cardBG, }) => {

  return (
    <>

      <div
        className={`flex flex-col justify-center items-center relative ${cardW} ${cardH} gap-5 ${cardBG} rounded-[32px] backdrop-blur-[15px] shadow-[1px_1px_10px_#000000b0] z-40`}>

        <span className='w-[80%] flex justify-center'>
          <h2 className={`${ralewayMD.className} text-[1.375rem] mt-5 text-center w-fit text-white `}>
            {tittle}
          </h2>
        </span>

        {children}

      </div>
      
    </>
  );
}

export default Card;