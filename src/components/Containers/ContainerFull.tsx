import React from 'react';

interface containerProps {
  children?: React.ReactNode,
  color?: string,
  zindex?: string,
  flex?: string,
}

export const ContainerFull: React.FC<containerProps> = ({ children, color, zindex }) => {
  return(
    <div id='CONTAINERFULL' className={`w-screen h-screen ${color} relative flex flex-col justify-center items-center ${zindex} pb-[2.8125rem]`}>
     {children}
    </div>
  )
}


