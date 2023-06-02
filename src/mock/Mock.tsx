import { generalProps } from '@/interfaces/interface';
import React from 'react';


const Mock: React.FC<generalProps> = ({children}) => {
  return (
    <form
      className={`flex flex-none flex-wrap justify-around items-center w-[20.75rem] h-fit gap-[10px] mb-5 z-30`}>
      {children}
    </form>

  )
}

export default Mock;