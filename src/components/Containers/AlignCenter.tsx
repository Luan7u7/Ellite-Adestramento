import { generalProps } from '@/interfaces/interface';
import React from 'react';


const AlignCenter: React.FC<generalProps> = ({children, position='relative', leftOrRight, topOrBottom, color, fCenter}) => {
  return (
    <>
      <div className={`${position} ${leftOrRight} ${topOrBottom} ${fCenter} w-fit h-fit ${color} `}>
        {children}
      </div>
    </>
  )
}

export default AlignCenter;