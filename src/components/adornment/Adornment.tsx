import { generalProps } from '@/interfaces/interface';
import React from 'react';


const Adornment: React.FC<generalProps> = ({spanColor, spanH, spanRL, spanUB, spanW, position= "absolute", round= "rounded-[32px]", zI, shadow, children, fCenter}) => {
  return (

    <>
      
      <span className={`${position} ${spanW} ${spanH} ${spanColor} ${spanRL} ${spanUB} ${round} ${zI} ${shadow} ${fCenter} `}>
        {children}
      </span>
      
    </>

  )
}

export default Adornment;