import { generalProps } from '@/interfaces';
import React, { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type adornment = generalProps & ComponentProps<'span'>

export const Adornment: React.FC<adornment> = ({color, width, height, position= "absolute", round= "rounded-[32px]", index, shadow, children, flex, rotate, topOrBottom, leftOrRight, className}) => {
  return (

    <>
      
      <span className={twMerge(`${position} ${width} ${height} ${color} ${topOrBottom} ${leftOrRight} ${round} ${index} ${shadow} ${flex} ${rotate}`, className)}>
        {children}
      </span>
      
    </>

  )
}
