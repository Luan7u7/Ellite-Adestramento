
import React from 'react';
import Next from '@/components/next/Nextbtn'
import { NextPage } from 'next';
import Card from '@/components/card/Card';
import Option from '@/components/card/Option';
import LinkNext from '@/components/link/LinkNext';
import { PoiretOne, cocomat } from '@/fonts/fonts';


const MarkFirst: NextPage = () => {
  

  const goals = ['obediência','banheiro','vicio','modos','latido','xixi','intolerância','passeio','trauma','educação','raiva','social','comida','controle','medo']

  return (
    <>
      {/* titulo e adorno container */}
      <div className={` flex w-screen relative justify-start items-start pt-2`}>
        
        <span className='pt-2 rounded-full relative top-0 -left-[6rem] w-[11.6875rem] h-[13.75rem] bg-mark-orange shadow-[1px_8px_12px_#d36e3445,3px_16px_24px_#d36e3445]'></span>

        <h1
          className={` ${PoiretOne.className} absolute left-[3.25rem] top-[2rem] text-white antialiased text-[3rem] leading-[94%] tracking-[7%] w-[16rem] h-fit`}>
          Vamos te <br /> ajudar a <br /> marcar sua <br /> consulta
        </h1>

      </div>

      {/* texto */}
      <div className={`w-screen pb-2`}>
        <p className={`${cocomat.className} flex justify-start px-8 text-justify relative text-white leading-5 `}>
          Precisamos definir quais são seus <br /> principais objetivos
        </p>
      </div>

      <Card tittle='Qual seu foco ?' w='w-[18rem]' h='h-[6.8125rem]'>
        
        {goals.map((goal, index)=>(<Option name={goal} id={goal+'id'} key={index} />))}

      </Card>
      
      <div className='mt-8 flex justify-center'>
        <Next name="próximo" url="/marks/mark2" />
        <LinkNext url='/marks/mark2'/>
      </div>

    </>
  ); 
}

export default MarkFirst;