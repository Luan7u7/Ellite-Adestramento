

import { didactGotic } from '@/fonts/fonts';
import React from 'react';

interface optionProps {
  name: string,
  id: string,
}

const Option: React.FC<optionProps> = ({name, id}) => {
  return(
    <label 
      htmlFor={id} 
      className={`flex items-center justify-center h-fit  `}>
        <input 
          type="checkbox"
          name={name} 
          id={id} 
          className={`hidden`}/>
        <span 
          className={`
            ${didactGotic.className}
            flex 
            items-center 
            justify-around 
            w-[6.125rem] 
            border-[0.5px] 
            border-[#dce0e561] 
            rounded-[22px] 
            py-3 
            px-[0.75rem] 
            text-[#DCE0E5]
            `}>
            {name}
        </span>
    </label>
  );
}

export default Option;