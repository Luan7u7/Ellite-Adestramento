

import { ralewayMD } from '@/fonts/fonts';
import React from 'react';


interface cardProps {
  tittle: string,
  children: React.ReactNode,
  cardW: string,
  cardH: string,
  cardBG?: string,
  spanColor?: string,
  spanUp?: string,
  spanRL?: string,
  spanBottom?: string,
  spanW?: string,
  spanH?: string
}

const Card: React.FC<cardProps> = ({
    tittle, 
    children, 
    cardW,
    cardH,
    cardBG, 
    spanBottom, 
    spanColor, 
    spanRL, 
    spanUp, 
    spanW, 
    spanH 
  }) => {

  return (
    <>
      
      <div
        className={`flex flex-col justify-center items-center relative z-10 w-screen h-fit`}>

        <div className=" relative ">

          <div
            className={`flex flex-col justify-center items-center relative ${cardW} ${cardH} gap-5 ${cardBG} rounded-[32px] backdrop-blur-[15px] shadow-[1px_1px_10px_#000000b0] z-10`}>

            <span className='w-[80%] flex justify-center '>
              <h2 className={`${ralewayMD.className} text-[1.375rem] mt-5 text-center w-fit text-white `}>
                {tittle}
              </h2>
            </span>

            <form
              className={`flex flex-none flex-wrap justify-around items-center w-[20.75rem] h-fit gap-[10px] mb-5 z-10`}>
              {children}
            </form>

          </div>
   
          <span
            className={`absolute ${spanW} ${spanH} ${spanColor} ${spanBottom} ${spanRL} ${spanUp} rounded-[32px] z-0`}
          />
         
        </div>
        
      </div>
      
    </>
  );
}

export default Card;