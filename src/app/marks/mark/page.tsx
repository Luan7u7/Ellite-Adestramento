
import React from 'react';
import Next from '@/components/next/Nextbtn'
import { NextPage } from 'next';
import Card from '@/components/card/Card';
import Option from '@/components/card/Option';
import { poiretOne, cocomat } from '@/fonts/fonts';
import Mock from '@/mock/Mock';
import Adornment from '@/components/adornment/Adornment';
import ContainerFull from '@/components/Containers/Container';
import LinkNext from '@/components/link/LinkNext';


const Mark: NextPage =  () => {
  

  const goals = ['obediência','banheiro','vicio','modos','latido','xixi','intolerância','passeio','trauma','educação','raiva','social','comida','controle','medo']

  return (
    <div className='w-full h-full animate-loading delay-75'>

      <div className={` flex w-screen relative justify-start items-start pt-2`}>
        <span
          className="pt-2 rounded-full relative top-0 -left-[6rem] w-[11.6875rem] h-[13.75rem] bg-mark-orange shadow-[1px_8px_12px_#d36e3445,3px_16px_24px_#d36e3445]"/>

        <h1
          className={`${poiretOne.className} absolute left-[3.25rem] top-[2rem] text-white antialiased text-[3rem] leading-[94%] tracking-[7%] w-[16rem] h-fit`}>

          Vamos te <br /> ajudar a <br /> marcar sua <br /> consulta
        </h1>
      </div>

      <div className={`w-screen pb-2`}>
        <p
          className={`${cocomat.className} flex justify-start px-8 text-justify relative text-white leading-5`}>

          Precisamos definir quais são seus <br /> principais objetivos
        </p>
      </div>

      <ContainerFull>
        <Card 
        tittle="Qual seu foco ?"
        cardW='w-[22rem]'
        cardH='h-[fit]'
        cardBG='bg-[#505050B2]'
        >
         
          
          <Mock>
            {
              goals.map((goal, index) => 
                (
                  <Option name={goal} 
                  id={goal + "id"} 
                  key={index} 
                  />
                )
              )
            }
          </Mock>

           
      </Card>
      <Adornment 
        spanW="w-[18rem]" 
        spanH="h-[6.8125rem]" 
        spanColor='bg-mark-orange' 
        spanUB='-bottom-1' 
        spanRL='right-[0.35rem]'
        />




        
      </ContainerFull>

      

      <div className="mt-10 flex flex-col items-center gap-3 justify-center">

        <LinkNext bg='bg-[#ae5532e9]' url='/marks/mark2'/>

        <Next 
        name="próximo" 
        url="/marks/mark2" 
        className={`${poiretOne.className} justify-center items-center w-[10rem] h-[3.5rem] text-xl mb-6 text-white rounded-[1rem] bg-[#ae5532e9] btn_blur`}/>
      </div>
    </div>
  ); 
}

export default Mark;