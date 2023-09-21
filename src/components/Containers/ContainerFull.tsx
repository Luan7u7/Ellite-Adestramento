import { generalProps } from '@/interfaces';
import React, { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type containerFullProps = Partial<generalProps> & ComponentProps<'div'> 


export const ContainerFull: React.FC<containerFullProps> = ({ children, color, index, className, ...rest }) => {
  return(
    <>
      <div 
        id='CONTAINERFULL' 
        className={twMerge(`w-screen h-fit ${color} relative flex flex-col justify-center items-center ${index} mb-6`, className)} 
        {...rest}>

        {children}

      </div>
    </>
  )
}


