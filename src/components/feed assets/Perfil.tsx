


import React from 'react';

import { container } from '../Containers';
import { Adornment } from '../assets';
import { Bookmark, Calendar, ClipboardCheck, PawPrint, Phone } from 'lucide-react';

export const Perfil = () => {
  return (
    <>
      <container.frame
          aria-description='2nd card / meu perfil'
          className='bg-shark-950 relative '>

            <container.section
            className='relative  bg-blue-500'>
              <Adornment width='w-[5.70rem]' height='h-[5.70rem]' color='bg-shark-800' position='absolute' className='border-4 border-shark-950 -top-16 rounded-full'>
                <img src="https://picsum.photos/200/300" alt="foto do cão" className='rounded-full w-full h-full'/>
              </Adornment>

              <Adornment width='w-fit' height='h-fit' color='bg-[#dadada]' position='absolute' className='rounded-md px-3 py-[0.1rem] mt-8 border-2 text-shark-950 font-[Inter] font-normal  border-shark-950'>
                Name
              </Adornment>
            </container.section>

            <container.section
            className='mt-12 w-full flex flex-row justify-between px-4 items-center '>

              <container.group
              aria-description='icone de pata e titulo'
              className='flex flex-row  gap-3 font-[Inter] font-light'>

                <Adornment color='bg-[#1e1e1e]' height='h-12' width='w-12' position='relative' className='flex justify-center items-center'>
                  <PawPrint size={24} strokeWidth={1} absoluteStrokeWidth />
                </Adornment>

                <h1 className='text-2xl first-letter:uppercase'>treinando...</h1>
              </container.group>

              <Bookmark size={36} strokeWidth={1} absoluteStrokeWidth />

            </container.section>

            <container.section
            className='w-full flex flex-row justify-between items-center border border-shark-100 border-opacity-60 rounded-2xl py-2'>

              <container.group className='flex pl-3 flex-row justify-center items-center font-[Inter] gap-3'>
                <img src="https://picsum.photos/200" alt="foto do adestrador" className='w-12 h-12 rounded-full'/>
                <h1 className='text-xl font-light'>Alex Veiga</h1>
              </container.group>

              <container.group className='flex flex-row justify-center items-center gap-1 bg-shark-600 bg-opacity-60 p-2 mr-2 rounded-xl'>
                <span className='text-[#297CFA]'>terça,20</span>
                <Calendar size={36} color="#297CFA" strokeWidth={1} absoluteStrokeWidth />
              </container.group>

            </container.section>

            <container.section
            aria-description='ultima sessão de conteúdo'
            className='w-full  flex flex-col justify-between items-center p-2'>

              <container.group
              aria-description='primeira parte deste section'
              className='w-[98%] justify-between items-center '>


                <container.content
                aria-description='foto, profissional e icone de telefone'
                className=' flex justify-between items-center gap-3 font-[Inter] font-light'>

                  <img src="https://picsum.photos/200/345" alt="foto do adestrador" className='w-12 h-12 rounded-full'/>

                  <div>
                    <h1 className='text-shark-200'>Alex Veiga</h1>
                    <h2 className='text-shark-200'>Adestrador e Handler</h2>
                  </div>

                </container.content>

                <Adornment width='w-12' height='h-12' position='relative' className='bg-shark-600 bg-opacity-60 flex justify-center items-center'>
                  <Phone absoluteStrokeWidth color='#297CFA'/>
                </Adornment>

              </container.group>

              <container.group
              aria-description='icone de prancheta e cronograma de treino'
              className='w-[90%] felx  flex-row justify-start items-center gap-3 p-2 mt-2'>

                  <container.group className=''>
                    <ClipboardCheck absoluteStrokeWidth />
                  </container.group>

                  <container.group className='flex-col justify-start  text-xs font-[Inter] font-light '>
                    <h3 className='text-shark-200'>quartas e sextas</h3>
                    <p className='text-shark-200'>horaríos: 9:00am</p>
                  </container.group>

              </container.group>

            </container.section>

          </container.frame>
    </>
  )
}