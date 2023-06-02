import React from 'react';
import Next from '@/components/next/Nextbtn'
import Card from '@/components/card/Card';
import { poiretOne } from '@/fonts/fonts';
import Mock from '@/mock/Mock';
import LinkNext from '@/components/link/LinkNext';



const MarkSecond: React.FC = () => {

  
  return (
    <>
      <div className='w-full h-full animate-loading delay-75'>
        <div
          className={`relative w-screen h-[17.875rem] flex flex-row`}>
          <div
            className={`absolute -left-[9.9125rem] top-[4.3rem] w-[14.3125rem] h-[5.9375rem] bg-[#dda248] rounded-[48px] -rotate-45 z-20 shadow-[11px_8px_14px_#0000003a]`}
          />

          <div
            className={`absolute -left-[10.7rem] top-[4.8rem] w-[17.875rem] h-[8.125rem] bg-[#dda248] rounded-[65px] -rotate-45 z-10`}
          />

          <h1
            className={`${poiretOne.className} text-white text-[2.75rem] text-right leading-[2.45rem] absolute top-[1.2rem] left-[10rem] w-[11.8125rem] h-[13.9375rem] `}>
              
            Vamos <br /> escolher <br /> os dias <br /> e horarios <br /> para as <br /> aulas

          </h1>

        </div>

        <Card 
          tittle='reserve dois dias da semana para as aulas'
          cardW='w-[22.75rem]'
          cardH='h-fit'
          cardBG='bg-[#5050506b]'
          spanColor='bg-[#f2b14f]'
          spanW='w-[19.25rem]'
          spanH='h-[7.5625rem]'
          spanRL='-left-[0.18125rem]'
          spanUB='-top-[0.25rem]'
          >
           

        </Card>

        <div className="mt-10 flex flex-col items-center gap-3 justify-center">

        <LinkNext bg='bg-[#f2b14f]' url='/marks/mark3'/>

        <Next 
        name="próximo" 
        url="/marks/mark2" 
        className={`${poiretOne.className} justify-center items-center w-[10rem] h-[3.5rem] text-xl mb-6 text-white rounded-[1rem] bg-[#f2b14f] btn_blur`}/>
      </div>
      </div>
    </>  
  );
}

export default MarkSecond;