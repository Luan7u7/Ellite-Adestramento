import React from 'react'
import {container} from '@/components/Containers'
import { Adornment, Calendario, Card } from '@/components/assets';
import {Next} from '@/components/buttons';

const CalendarioPage: React.FC = () => {
  
  return(
    <>
      <container.full>
        <container.center flex='items-end justify-center'>
          <container.capsule 
            position='relative'
            topOrBottom='top-8'
            leftOrRight='-right-24'
            rotate='rotate-[32.5deg]'
            flex='justify-center items-center'
          >

            <Adornment
              position='relative'
              width='w-[236px]'
              height='h-[94.75px]'
              color='bg-greened'
              round='rounded-none'
              flex='flex'
              index='z-0'
            >
              <Adornment
                position='relative'
                width='w-[224.24px]'
                height='h-[76.91px]'
                color='bg-greened'
                flex='flex'
                round='rounded-none'
                shadow='shadow-[6px_0px_14px_#00000059]'
                index='z-0'
              >
              </Adornment>
            </Adornment>
          </container.capsule>

          <container.capsule className='-top-6'>
              <h1 className='font-PoiretOne text-gray-300 text-right text-5xl w-[263px]'>
                escolha um dia para comecarmos
              </h1>
          </container.capsule>
         </container.center>
      </container.full>
 

      <container.full>
          <container.capsule className='-top-6'>
          <Card
            title='agende sua visita'
            size='text-[1.375rem]'
            spacing='pt-[1.75rem]'
            height='h-fit'
            width='w-[22.5rem]'
            color='bg-glass'
            index='z-10'>
            <Calendario/>
           </Card>

           <Adornment
            color='bg-greened'
            width='w-[2rem]'
            height='h-[90%]'
            leftOrRight='-right-[0.4rem]'
            topOrBottom='top-3'
           />
          </container.capsule>

          <container.capsule className='w-full pt-6'>
            <Next
             name='próximo'
             models='default'
             url='/agendamento/conclusão'
             className='border border-greened hover:bg-greened duration-700 font-PoiretOne'
            />
          </container.capsule>

      </container.full>
    </>
  )

}

export default CalendarioPage;

