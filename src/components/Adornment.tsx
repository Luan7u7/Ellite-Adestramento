import { generalProps } from '@/interfaces';
import React from 'react';


export const Adornment: React.FC<generalProps> = ({spanColor, spanH, spanRL, spanUB, spanW, position= "absolute", round= "rounded-[32px]", zI, shadow, children, fCenter, rotate}) => {
  return (

    <>
      
      <span className={`${position} ${spanW} ${spanH} ${spanColor} ${spanRL} ${spanUB} ${round} ${zI} ${shadow} ${fCenter} ${rotate} `}>
        {children}
      </span>
      
    </>

  )
}
