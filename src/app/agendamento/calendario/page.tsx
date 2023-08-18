import React from 'react'
import {Card, ContainerFull, AlignCenter, Adornment, Calendario} from '@/components'
import { didactGotic, poiretOne } from '@/fonts/fonts'

const MarkFour: React.FC = () => {
  
  // criar animação de scroll e colocar todos os elementos de agendamento na mesma pagina !!

  return(
    <>
      <ContainerFull flex='flex-row'>
        <AlignCenter fCenter='flex justify-around items-center'>
          <h1 className={`${poiretOne.className} relative left-[9.25rem] top-[2.25rem] text-white text-right text-5xl w-[263px]`}>
            escolha um dia para comecarmos
          </h1>
          <AlignCenter leftOrRight='left-0' topOrBottom='-top-[3.5rem]' rotate='rotate-[30deg] '>

            <Adornment
              position='relative'
              spanW='w-[236px]'
              spanH='h-[94.75px]'
              spanColor='bg-[#72997299]'
              fCenter='flex'
              round='rounded-none'
            >
              <Adornment
                position='relative'
                spanW='w-[224.24px]'
                spanH='h-[76.91px]'
                spanColor='bg-[#72997299]'
                fCenter='flex'
                round='rounded-none'
                shadow='shadow-[6px_0px_14px_#00000059]'
              >
              </Adornment>

            </Adornment>

          </AlignCenter>
         </AlignCenter>
      </ContainerFull>
 

      <ContainerFull>
        <AlignCenter>
          <Card
            tittle='agende sua visita'
            size='text-[1.375rem]'
            spacing='pt-[1.75rem]'
            cardBG='bg-[#5050506b]'
            cardH='h-fit'
            cardW='w-[22.5rem]'
            zI='z-10'>
            <Calendario/>
           </Card>
           <Adornment
            spanColor='bg-[#72997299]'
            spanH='h-[90%]'
            spanRL='-right-[0.4rem]'
            spanUB='top-3'
            spanW='w-[2rem]'
           />
        </AlignCenter>
      </ContainerFull>
    </>
  )

}

export default MarkFour;

