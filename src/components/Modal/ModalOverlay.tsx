
import { generalProps } from '@/interfaces';
import React from 'react';

export const ModalOverlay = ({children}: generalProps) =>{
  return (
    <>
      <div className='w-screen h-screen absolute top-0 left-0 bg-[#808080] flex items-center justify-center'>
        {children}
      </div>
    </>
  );
};
