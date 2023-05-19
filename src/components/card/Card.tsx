

import React from 'react';


interface cardProps {
  tittle: string,
  children: React.ReactNode,
  bottom?: number,
  up?: number,
  rl?: number,
  w?: string,
  h?: string
}


const Card: React.FC<cardProps> = ({tittle, children, bottom, rl, w, h }) => {
  return (
    <>
      {/* orientação tela */}
      <div className={`flex flex-col justify-center items-center relative z-10 w-screen h-fit`}>

        {/* orientação box */}
        <div className=' relative '>

          {/* cinza */}
          <div className={`flex flex-col justify-center items-center relative w-[22.75rem] h-fit gap-5 bg-[#32323285] rounded-[32px] backdrop-blur-[15px] shadow-[1px_1px_10px_#000000b5] z-10`}>

            <h2 className={` text-[1.75rem] text-white  mt-[2.375rem]`}>
              {tittle}
            </h2>

            <form className={`flex flex-none flex-wrap justify-around items-center w-[20.75rem] h-fit gap-[10px] mb-5 z-10`}>
              {children}
            </form>

          </div>
          {/* cinza */}

          {/* laranja */}
            <div className={`absolute ${w} ${h} bg-mark-orange -bottom-1 -right-1 rounded-[32px] z-0`} />
          {/* laranja */}

        </div>
        {/* orientação box */}

      </div>
      {/* orientação tela */}
    </>
  );
}

export default Card;