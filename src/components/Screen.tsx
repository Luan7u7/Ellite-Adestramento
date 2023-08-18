import { generalProps } from '@/interfaces'
import React from 'react'


export const Screen: React.FC<generalProps> = ({color, zI, children}) => {
  return (
    <>
      <div className={`w-screen h-screen ${color} relative flex flex-col justify-center items-center ${zI} pb-[2.8125rem]`}>
        {children}
      </div>
    </>
  )
}
