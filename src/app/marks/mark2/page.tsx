import React from 'react';
import Next from '@/components/next/Nextbtn'
import Card from '@/components/card/Card';
import { poiretOne } from '@/fonts/fonts';



const MarkSecond: React.FC = () => {

  

  return (
    <>
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
        tittle="reserve dois dias por semana para as aulas"
        w=''
        h=''
        color=''
        rl=''
        up=''
        bottom=''
        
        >

      </Card>

      <Next name="próximo" url="/marks/mark3" className="text-white" />
    </>
  );
}

export default MarkSecond;