


import React from 'react';
import { container } from '@/components/Containers';
import { Adornment } from '@/components/assets';

const Sua_Ficha = () => {
  return (
    <>
      <container.screen>

          <container.center className='bg-[#ededed] mt-6 gap-2 p-2 rounded-xl overflow-hidden'>


            <container.frame 
              color='bg-[#1e1e1e]' 
              width='w-full'
              padding='p-2' 
              gap='gap-0' 
              flex='flex' 
              className='rounded-[0.5rem]'>

              <container.capsule 
                className=' justify-start items-start gap-3'>

                <h1 className='mb-2 text-[2rem] leading-none'>
                    Victoria:
                </h1>

                <h3>Dono(a):</h3>
                <h3>Idade:</h3>
                <h3>Raça:</h3>
              </container.capsule>

              <container.capsule>
                <img 
                  src="https://picsum.photos/200/300" 
                  alt="foto" 
                  className='h-[9.43rem] w-[7.56rem] bg-white rounded-md'/>
              </container.capsule>
            </container.frame>

            <container.frame 
              color='bg-[#1e1e1e]'
              className='font-[Inter] rounded-lg flex w-full px-2 py-4 gap-0'>
              <p className='font-extralight text-base'>
                Rua Maracatu, 318, Vila Bom Jardim
              </p>
            </container.frame>

            <container.frame 
              color='bg-[#1e1e1e]'
              className='w-full px-2 py-4 flex flex-wrap gap-0 font-[Inter] rounded-lg'>

                <ul className='list-disc flex flex-col justify-start items-start content-between flex-wrap shrink w-4/5 h-[5rem] font-[Inter] font-extralight text-base'>
                  <li >agressividade</li>
                  <li>obediência</li>
                  <li>andar junto</li>
                  <li>controle</li>
                  <li>andar de carro</li>
                </ul>

            </container.frame>

            <container.frame 
              color='bg-[#1e1e1e]'
              className='w-full px-2 py-4 flex gap-0 font-[Inter] rounded-lg'>

                <p className='font-[Inter] text-base font-extralight'>Segundas e Quartas as 18:00pm</p>

            </container.frame>

            <container.frame 
              color='bg-[#1e1e1e]'
              className='w-full px-2 py-4 flex gap-0 font-[Inter] rounded-lg'>

                <p className='font-[Inter] text-base font-extralight'>Terça, 20 de Dezembro</p>

            </container.frame>

            <container.frame className='relative w-full rounded-none px-0'>
              <p className='text-2xl font-bold text-[#1e1e1e]'>
                -------------------------------
              </p>
              <Adornment className='absolute w-12 h-12 bg-[#1e1e1e] top-4 -left-10'/>

              <Adornment className='absolute w-12 h-12 bg-[#1e1e1e] top-4 -right-10'/>
            </container.frame>

            <container.frame>
              codigo de barras
            </container.frame>

          </container.center>
      </container.screen>
    </>
  );
};

export default Sua_Ficha