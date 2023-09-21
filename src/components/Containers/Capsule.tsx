import { generalProps } from '@/interfaces';
import React, { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type capsule =  generalProps & ComponentProps<'div'> 

export const Capsule: React.FC<capsule> = ({children, color, position = 'relative', flex = 'justify-center items-center', className}) => {
  return (
    <>
      <div className={twMerge(`w-fit h-fit flex flex-col ${flex} ${position} `, className)} >
        {children}
      </div>
    </> 
  )
}
