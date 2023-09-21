

import React from 'react'
import { container } from '../Containers'
import { PawPrint } from 'lucide-react'
import { Button } from '../buttons'

export const Mensagem = () => {
  return (
    <>
      <container.frame
          aria-description='1st card / card de conclusão'
          className='bg-shark-950 shadow-black shadow-[0px_6px_8px_-4px] py-3 px-3'>

            <container.group
            aria-description='titulo e icone de pata'
            className='w-full flex flex-row justify-between items-start font-DidactGothic font-normal text-2xl'>

              <h1 className='w-40 leading-none'>agendamento concluído</h1>
              <PawPrint size={42} strokeWidth={0} fill='#305FD8' absoluteStrokeWidth />

            </container.group>

            <container.group
            aria-description='mensagem e botão'
            className='flex flex-row justify-between items-end font-[Inter] font-light text-xs'>

              <h2 className='w-[50%]'>sua visita acontecerá no dia 28, conforme agendado</h2>
              <Button
                title='ver ficha'
                size='lg'
                className='bg-mariner-600 border-none uppercase font-[Inter] text-sm'/>
            </container.group>

          </container.frame>
    </>
  )
}