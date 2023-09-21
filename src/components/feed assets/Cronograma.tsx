


import React from 'react';
import { container } from '../Containers';
import { ChevronsLeftRight } from 'lucide-react';

export const Cronograma = () => {
  return (
    <>
      <container.frame
          aria-description='3rd / cronograma'
          className='bg-shark-950 overflow-x-hidden'>

            <container.group
            aria-description='titulo e icone'
            className='w-full justify-between items-center px-2 font-[Inter] font-light'>

              <h1 className='first-letter:uppercase text-shark-100 text-xl'>cronograma</h1>

              <ChevronsLeftRight size={36} strokeWidth={2} color='#297CFA' absoluteStrokeWidth />

            </container.group>

            <container.group
            aria-description='dias da semana'
            className='w-full justify-around items-center space-x-2 '>



              <span className='flex flex-col items-center justify-center gap-1 font-[Inter] font-light text-sm uppercase rounded-md bg-shark-600 p-2 bg-opacity-60'>
                <p>seg</p>
                <p>18</p>
              </span>

              <span className='flex flex-col items-center justify-center gap-1 font-[Inter] font-light text-sm uppercase rounded-md bg-shark-600 p-2 bg-opacity-60'>
                <p>ter</p>
                <p>19</p>
              </span>

              <span className='flex flex-col items-center justify-center gap-1 font-[Inter] font-light text-sm uppercase rounded-md bg-shark-600 p-2 bg-opacity-60'>
                <p>qua</p>
                <p>20</p>
              </span>

              <span className='flex flex-col items-center justify-center gap-1 font-[Inter] font-light text-sm uppercase rounded-md bg-shark-600 p-2 bg-opacity-60'>
                <p>qui</p>
                <p>21</p>
              </span>

              <span className='flex flex-col items-center justify-center gap-1 font-[Inter] font-light text-sm uppercase rounded-md bg-shark-600 p-2 bg-opacity-60'>
                <p>sex</p>
                <p>22</p>
              </span>

              <span className='flex flex-col items-center justify-center gap-1 font-[Inter] font-light text-sm uppercase rounded-md bg-shark-600 p-2 bg-opacity-60'>
                <p>sab</p>
                <p>23</p>
              </span>

            </container.group>
          </container.frame>
    </>
  )
}