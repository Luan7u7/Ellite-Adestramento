//*TESTE DE RENDERIZAÇÃO PASSIVA CARREGANDO OS ITENS SEM PREJUDICAR A PERFORMANCE DA PAGINA
import React, { Suspense, lazy } from 'react'
import { container } from '@/components/Containers'
import { Reserved } from '@/components/Reserved'
import { Charging } from '@/components/loaders/Charging'

export async function Booking ()  {

  return (
    <>
      <h1 className='text-white'>Booking</h1>
    
      <container.full>
        <container.center>
          <Suspense fallback={<Charging/>}>
            <Reserved />
          </Suspense>
         

        </container.center>
      </container.full>
    </>
  )
}

export default Booking