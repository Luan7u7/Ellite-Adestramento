import { generalProps } from '@/interfaces'
import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type envelop = Partial<generalProps> & ComponentProps<'div'>

export const Content: React.FC<envelop> = ({children, color, className}) => {
  return (
    <>
      <div className={twMerge(`w-fit h-fit flex justify-center items-center relative ${color}`, className)} >
        {children}
      </div>
    </>
  )
}
