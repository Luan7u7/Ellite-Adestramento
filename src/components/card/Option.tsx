

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
          className={`border border-[#DCE0E5] rounded-full py-[1.125rem] px-[0.75rem] text-[#DCE0E5]`}>
            {name}
        </span>
    </label>
  );
}

export default Option;