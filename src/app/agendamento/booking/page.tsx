//*TESTE DE RENDERIZAÇÃO PASSIVA CARREGANDO OS ITENS SEM PREJUDICAR A PERFORMANCE DA PAGINA
import React, { Suspense, lazy } from 'react'
import { ContainerFull, AlignCenter } from '@/components'
import Loading from './loading'

const Objetivos = lazy(()=>import("../objetivos/page"))
const Cronograma = lazy(()=>import("../cronograma/page"))
const Localizacao = lazy(()=>import("../localizacao/page"))
const Calendario = lazy(()=>import("../calendario/page"))

const Booking: React.FC = () => {
  return (
    <>
      <h1 className='text-white'>Booking</h1>
    
      <ContainerFull>
        <AlignCenter>
          <Suspense fallback={<h1 className='text-zinc-100 text-3xl'>Vamos preparar o seu agendamento</h1>}>
            <Objetivos />
          </Suspense>

          <Suspense fallback={<Loading/>}>
            <Cronograma/>
          </Suspense>

          <Suspense fallback={<Loading/>}>
            <Localizacao/>
          </Suspense>

          <Suspense fallback={<Loading/>}>
            <Calendario/>
          </Suspense>
        </AlignCenter>
      </ContainerFull>
    </>
  )
}

export default Booking