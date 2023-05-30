
import React from 'react';
import Next from '@/components/next/Nextbtn'
import { NextPage } from 'next';
import Card from '@/components/card/Card';
import Option from '@/components/card/Option';
import { poiretOne, cocomat } from '@/fonts/fonts';


const Mark: NextPage = () => {
  

  const goals = ['obediência','banheiro','vicio','modos','latido','xixi','intolerância','passeio','trauma','educação','raiva','social','comida','controle','medo']

  return (
    <main className={`animate-loading delay-75`}>

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

      <Card 
        tittle="Qual seu foco ?" 
        w="w-[18rem]" 
        h="h-[6.8125rem]" 
        color='bg-mark-orange' 
        bottom='-bottom-1' 
        rl='-right-1'
        >
        {
          goals.map((goal, index) => (
            <Option name={goal} 
            id={goal + "id"} 
            key={index} 
            />
           )
          )
        }
      </Card>

      <div className="mt-10 flex justify-center">
        <Next 
        name="próximo" 
        url="/marks/mark2" 
        className={`${poiretOne.className} justify-center items-center w-[10rem] h-[3.5rem] text-xl font-dg text-white rounded-[1rem] bg-[#ae5532e9] btn_blur`}
          
        />
      </div>
    </main>
  ); 
}

export default Mark;