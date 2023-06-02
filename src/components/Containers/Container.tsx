import React from 'react';

interface containerProps {
  position?: string,
  children?: React.ReactNode,
  color?: string,
  zindex?: string,
}

const ContainerFull: React.FC<containerProps> = ({position = 'relative', children, color, zindex }) => {
  return(
    <div className={`${position} w-screen h-fit ${color} flex flex-col justify-center items-center ${zindex} `}>
     {children}
    </div>
  )
}

export default ContainerFull;