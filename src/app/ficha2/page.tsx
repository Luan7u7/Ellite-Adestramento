

import React from 'react';
import { container } from '@/components/Containers'
import { PenSquare } from 'lucide-react';
import Image from 'next/image';
import { Adornment } from '@/components/assets';




export default function Ficha2() {
  return (
    <>
      <container.screen>
        <container.center className='bg-gradient-to-br from-[#dadada] to-[#bebebe] rounded-3xl space-y-4 p-3'>

          <container.capsule className='w-full flex flex-row justify-between '>

            <container.capsule className='font-[Inter] font-extralight gap-2 dark:text-[#1e1e1e] items-start  pl-4'>

              <container.capsule className='flex flex-row space-x-4 justify-center items-start'>
                <h1 className='mb-2 text-[2rem] text-[#1e1e1e] leading-none'>Vitoria</h1>
                <button className=''>
                  <PenSquare color="#1e1e1e" strokeWidth={1} absoluteStrokeWidth={true} />
                </button>
              </container.capsule>

              <p className='text-[#1e1e1e]'>Idade:</p>
              <p className='text-[#1e1e1e]'>Raça:</p>
              <p className='text-[#1e1e1e]'>Dono:</p>
              <p className='text-[#1e1e1e]'>Endereço:</p>
            </container.capsule>

            {/* <div className='w-[1px] h-full bg-[#bebebe]'></div> */}

            <img src="https://picsum.photos/200/300" alt="foto" width={130} className='h-full rounded-2xl aspect-video shadow-gray-800 shadow-[-3px_0px_10px_-3px]' />

          </container.capsule>

          <Adornment
            width='w-11/12'
            height='h-[1px]'
            color='bg-[#bebebe]'
            position='relative'
          />
          

          <container.center className='text-justify font-[Inter] font-normal leading-4'>
            <p className='text-[#1e1e1e]'>Lorem ipsum dolor sit amet consectetur. Quisque amet proin erat convallis enim purus amet pellentesque consequat. Aliquet urna non non tortor tristique neque egestas nibh. Etiam enim pretium ut nibh. Nunc integer consequat euismod suspendisse feugiat condimentum ac.</p>
          </container.center>

          <container.frame className='bg-[#262626] rounded-xl flex-row justify-evenly flex-nowrap text-xs py-2 px-4'>

            <container.capsule className='uppercase font-[Inter] font-light flex items-start shrink-0 gap-2'>
              <h1>dias de treino</h1>
              <span>segundas / 9:00am</span>
              <span>quartas / 9:00am</span>
            </container.capsule>

            <Adornment width='w-1' position='relative' height='h-[90%]' color='bg-[#bebebe]' />

            <container.capsule className='uppercase font-[Inter] font-light flex items-start  gap-2'>
              <h1>treino</h1>
              <p className=''>Obediencia e comportamento</p>
            </container.capsule>
          </container.frame>

          <Adornment
            width='w-11/12'
            height='h-[1px]'
            color='bg-[#bebebe]'
            position='relative'
          />

          <container.capsule>
            codigo de barras
          </container.capsule>

        </container.center>
      </container.screen>
    </>
  );
};