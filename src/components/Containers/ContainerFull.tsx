import React from 'react';

interface containerProps {
  children?: React.ReactNode,
  color?: string,
  zindex?: string,
  flex?: string,
}

const ContainerFull: React.FC<containerProps> = ({ children, flex= "flex-col", color, zindex }) => {
  return(
    <div className={`w-screen h-fit ${color} relative flex ${flex} justify-center items-center ${zindex} pb-[2.8125rem]`}>
     {children}
    </div>
  )
}

export default ContainerFull;

