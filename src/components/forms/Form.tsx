import React from 'react';
import Option from '@/components/card/Option';
import { generalProps } from '@/interfaces/interface';


const Form: React.FC<generalProps> = ({children, color, gap}) => {
  return (
    <>
      
      <form className={`flex flex-wrap flex-row justify-center items-center w-full h-fit ${gap} pb-[1.875rem] antialiased`}>
        {children}
      </form>
    
    </>
    

  )
}

export default Form;