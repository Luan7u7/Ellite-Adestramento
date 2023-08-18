import React from 'react'

import { cocomat } from '@/fonts/fonts'

export const Charging: React.FC = () => {
  return (
    <>
      <div className='w-screen h-scrren bg-zinc-900'>

        <div className='w-screen h-scrren flex flex-col items-center justify-start pt-32'>
          
          <h1 className={`${cocomat.className} text-3xl text-white text-left pl-8`}>
            Estamos preparando tudo para você
          </h1>

        </div>
        
      </div>
    </>
  )
}
