
import React, { ComponentProps } from 'react';
import { generalProps } from '@/interfaces';




export const Container = ({ children }: generalProps)=>{
  return (
    <>
      <div className='w-full h-full flex flex-col justify-center items-center gap-3 p-4'>
        {children}
      </div>
    </>
  );
};
