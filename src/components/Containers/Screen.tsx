

import React, { ComponentProps } from 'react'
import { generalProps } from '@/interfaces'
import { twMerge } from 'tailwind-merge'

type screen = generalProps & ComponentProps<'div'>

export const Screen: React.FC<screen> = ({color = 'bg-white', index, children, className}) => {
  return (
    <>
      <div className={twMerge(`w-screen h-screen  relative flex flex-col justify-center items-center ${index}`, className )}>
        {children}
      </div>
    </>
  )
}
