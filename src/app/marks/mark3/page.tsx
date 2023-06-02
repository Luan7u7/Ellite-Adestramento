import React from 'react';
import Back from '@/components/back/Backbtn'
import Next from '@/components/next/Nextbtn'
import Card from '@/components/card/Card';
import Adornment from '@/components/adornment/Adornment';
import ContainerFull from '@/components/Containers/Container';
import LinkNext from '@/components/link/LinkNext';
import { poiretOne } from '@/fonts/fonts';

const MarkThird: React.FC = () => {
  return(
    <>
      <div>
        <h1 className='text-white'>3° TERCEIRA TELA DE AGENDAMENTO</h1>
      </div>

      <ContainerFull>
        <Card 
          tittle='teste'
          cardH='h-[10rem]'
          cardW='w-[20rem]'
          cardBG='bg-[#fffff96f]'
          >
        <p>testanto...</p>
      </Card>
      <Adornment
        spanColor='bg-[#248b3c]'
        spanH='h-[6.25rem]'
        spanW='w-[11.25rem]'
        spanRL='-left-[1rem]'
        spanUB='-top-[1rem]'
      />
     

      <Back/>
      </ContainerFull>

      <div className="mt-10 flex flex-col items-center gap-3 justify-center">

        <LinkNext bg='bg-[#248b3c]' url='/marks/mark4'/>

        <Next 
        name="próximo" 
        url="/marks/mark2" 
        className={`${poiretOne.className} justify-center items-center w-[10rem] h-[3.5rem] text-xl mb-6 text-white rounded-[1rem] bg-[#248b3c] btn_blur`}/>
      </div>
      
    </>
  )
}

export default MarkThird;

