


import React from 'react';
import { container } from '../Containers';
import { Adornment } from '../assets';
import { ListChecks, PawPrint } from 'lucide-react';

export const Acompanhamento = () => {
  return (
    <>
      <container.frame className='bg-shark-950 items-start font-[Inter] '>

            <h1 className='text-2xl  first-letter:uppercase'>my journey</h1>

            <container.group
            aria-description='primeira parte / debaixo do titulo'
            className='w-full  justify-between px-2 items-center font-[Inter] font-normal'>

              <container.group
              aria-description='icone e subtitulo'
              className='items-center gap-3 '>

                <Adornment position='relative' className='w-fit h-fit p-3 rounded-full bg-shark-600 bg-opacity-60'>
                  <ListChecks size={24} strokeWidth={1}  absoluteStrokeWidth color='#ffee'/>
                </Adornment>

                <h1 className='first-letter:uppercase text-lg font-light'>efetivadas</h1>

              </container.group>

              <PawPrint size={38} strokeWidth={1} fill='#ffee' absoluteStrokeWidth color='#ffee'/>

            </container.group>

            <container.group className='w-full justify-start items-center pl-8 space-x-8 font-[Inter] font-light'>

              <div className='w-[2px] h-28 bg-shark-300'></div>

              <div className='flex flex-col items-start'>
                <span>08:35</span>
                <span>08:31</span>
                <span>08:40</span>
                <span>09:12</span>
              </div>

              <div className='flex flex-col items-start'>
                <p>quarta-feira</p>
                <p>sexta-feira</p>
                <p>quarta-feira</p>
                <p>#sabado</p>
              </div>
            </container.group>
          </container.frame>
    </>
  )
}