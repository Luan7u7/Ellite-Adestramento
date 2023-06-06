

import { didactGotic } from '@/fonts/fonts';
import React from 'react';

export interface optionProps {
  name: string,
  id: string,
  width: string,
  height: string,
  rounded?: string,
  checked?: string,
}

const Option: React.FC<optionProps> = ({name, id, width, height, checked, rounded}) => {
  return(
    <label 
      htmlFor={id} 
      className={`relative flex items-center justify-center w-fit h-fit `}>
        <input 
          type="checkbox"
          name={name} 
          id={id} 
          className={`appearance-none flex items-center justify-around ${width} ${height} border-[0.5px] border-[#dce0e561] ${rounded} py-3 px-[0.75rem] text-[#DCE0E5] antialiased ${checked} `}/>
        <span className='absolute text-[#dadada] flex items-center justify-center w-full h-full '>
          {name}
        </span>
        
    </label>
  );
}

export default Option;


