

import React from 'react';


interface cardProps {
  tittle: string,
  children: React.ReactNode,
  color?: string,
  bottom?: string,
  up?: string,
  rl?: string,
  w?: string,
  h?: string
}


const Card: React.FC<cardProps> = ({tittle, children, bottom, color, rl, up, w, h }) => {
  return (
    <>
      
      <div
        className={`flex flex-col justify-center items-center relative z-10 w-screen h-fit`}>

        <div className=" relative ">

          <div
            className={`flex flex-col justify-center items-center relative w-[22rem] h-fit gap-5 bg-[#32323285] rounded-[32px] backdrop-blur-[15px] shadow-[1px_1px_10px_#000000b0] z-10`}>

            <h2 className={` text-[1.75rem] text-white  mt-[2.375rem]`}>
              {tittle}
            </h2>

            <form
              className={`flex flex-none flex-wrap justify-around items-center w-[20.75rem] h-fit gap-[10px] mb-5 z-10`}>
              {children}
            </form>

          </div>
   
          <span
            className={`absolute ${w} ${h} ${color} ${bottom} ${rl} ${up} rounded-[32px] z-0`}
          />
         
        </div>
        
      </div>
      
    </>
  );
}

export default Card;