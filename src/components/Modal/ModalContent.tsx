

import React from 'react';

import { modal } from '.';
import { Imodal, generalProps } from '@/interfaces';


export const ModalContent = ({children}: generalProps) => {
  return (
    <>
       <div className='bg-materialLight-thin1Overlay-blend-overlay rounded-[14px] overflow-hidden relative '>


            <div className='w-80 h-64 bg-materialLight-thin2 bg-opacity-[82%] '>


              <div className='p-4 flex flex-col justify-start items-start gap-4'>
                <span className='font-[roboto] font-thin text-sm text-color-grayLight'>{new Date().getHours()+ ':' + new Date().getMinutes()}</span>

                <h1 className='first-letter:uppercase text-xl font-[roboto] font-extralight'>titulo da mensagem</h1>

                <div className='flex space-x-5 '>

                  <span className='bg-[url(https://picsum.photos/200/300)] w-16 h-16 bg-cover rounded-md'></span>


                  <p className='w-[70%] font-[roboto] font-extralight text-sm text-justify '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nostrum distinctio commodi!.</p>

                </div>
              </div>


              {children}

            </div>



          </div>
    </>
  );
};