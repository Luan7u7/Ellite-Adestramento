import { generalProps } from '@/interfaces';
import React, { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type frameProps = Partial<generalProps>&ComponentProps<'div'>


export const Frame: React.FC<frameProps> = ({children, color, border, flex = 'flex-col', round = 'rounded-2xl', width = 'w-[95%]', gap ='gap-5', padding = 'p-5', className }) => {
  return (
    <>
      <div className={twMerge(`relative ${width} h-fit flex ${flex} justify-between items-center  ${color} dark:text-[#dadada] ${border} border-[#8B8B8B] ${round} ${padding} ${gap}`, className)}>

        {children}
      </div>
    </>
  )
}
