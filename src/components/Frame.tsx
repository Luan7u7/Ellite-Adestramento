import { generalProps } from '@/interfaces';
import React, { ComponentProps } from 'react';

type frameProps = Partial<generalProps>&ComponentProps<'div'>

export const Frame: React.FC<frameProps> = ({children, color, border, col_center = 'flex-col'}) => {
  return (
    <>
      <div className={`w-4/5 h-fit flex ${col_center} justify-center items-center  ${color} ${border} border-[#8B8B8B] rounded-2xl p-5 gap-5`}>
        {children}
      </div>
    </>
  )
}
