import { generalProps } from '@/interfaces/interface';
import React from 'react';


const Adornment: React.FC<generalProps> = ({spanColor, spanH, spanRL, spanUB, spanW}) => {
  return (
    <span className={`absolute ${spanW} ${spanH} ${spanColor} ${spanRL} ${spanUB} rounded-[32px] z-0`}/>

  )
}

export default Adornment;