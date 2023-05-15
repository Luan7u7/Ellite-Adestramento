import React, { Children, ReactNode } from 'react';

const goals = ['obediência','banheiro','vicio','modos','latido','xixi','intolerância','passeio','trauma','educação','raiva','social','comida','controle','medo']
  
interface cardProps   {
  name:string
}

const Card:  React.FC<cardProps> = ({name}, Children: ReactNode) => {
  return (
    <>
      <div 
        className={`flex flex-col justify-center items-center w-[22.75rem] h-[20.3125rem] bg-[#505050b2] rounded-[32px] backdrop-blur-[15px] shadow-[4px_4px_10px_#0000003f]`}>

        <h2>
          {name}
        </h2>

        <form 
          className={`flex flex-none flex-wrap justify-around items-center w-[20.75rem] h-[13.625rem]`}>
          {Children}
        </form>
      </div>
    </>
  );
}

export default Card;