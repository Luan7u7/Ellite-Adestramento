
import React from 'react';
import Back from '@/components/back/Backbtn'
import Next from '@/components/next/Nextbtn'
import Image from 'next/image';
import { NextPage } from 'next';
import {Poiret_One} from '@next/font/google'
import { poiretOne, cocomat } from '@/fonts/fonts';


const po = Poiret_One({
  display: 'swap',
  weight: "400",
  subsets: ['latin'],
})


const MarkFirst: NextPage = () => {


  return (
    <>
      {/* titulo e adorno container */}
      <div className="flex w-screen relative">
        <Image
          src="/ornamentOrange.svg"
          width={187}
          height={236}
          quality={100}
          alt="ornamento"
          className="w-[11.6875rem] h-[14.75rem] relative -left-[6.2rem]"
        />
        <h1
          className={`${po.className} absolute left-[3.25rem] top-[2rem] text-white antialiased text-[3rem] leading-[94%] tracking-[7%] w-[16rem] h-[10.6875rem]`}>
          Vamos te <br /> ajudar a <br /> marcar sua <br /> consulta
        </h1>
      </div>

      {/* texto */}
      <div className={`w-screen `}>
        <p className={`${cocomat.className} flex justify-center relative -left-[2rem] text-white`}>
          Precisamos definir quais são seus <br /> principais objetivos
        </p>
      </div>

      {/* card container green*/}
      <div className='flex flex-col justify-center items-center relative z-0 w-screen'>

      {/* adorno */}
        <div className='w-[18rem] h-[6.8125rem] bg-orange-600 rounded-[32px] absolute -bottom-[0.3rem] right-[0.5rem] -z-10'></div>

      {/* card */}
       <div className={`flex flex-col justify-center items-center w-[22.75rem] h-[20.3125rem] bg-[#505050b2] rounded-[32px] backdrop-blur-[15px] shadow-[4px_4px_10px_#0000003f]`}>

          <h2>Qual seu foco ?</h2>

          {/* orientação para diagramação */}
          <form className={`flex flex-none flex-wrap justify-around items-center w-[20.75rem] h-[13.625rem] `}>

            <label htmlFor="obediência" className={`flex items-center justify-center h-fit  `}>
              
              {/* checkbox */}
              <input type="checkbox" name="obediência" id="obediência" className='hidden'/>
 
              <span className={` border border-[#DCE0E5] rounded-full py-[1.125rem] px-[0.75rem] text-[#DCE0E5]`}>obediência</span>
            </label>

            <label htmlFor="banheiro" className={`flex items-center justify-center h-fit  `}>
              
              {/* checkbox */}
              <input type="checkbox" name="banheiro" id="banheiro" className='hidden'/>

              <span className={` border border-[#DCE0E5] rounded-full py-[1.125rem] px-[0.75rem] text-[#DCE0E5]`}>banheiro</span>
            </label>

            <label htmlFor="vicio" className={`flex items-center justify-center h-fit  `}>
              
              {/* checkbox */}
              <input type="checkbox" name="vicio" id="vicio" className='hidden'/>

              <span className={` border border-[#DCE0E5] rounded-full py-[1.125rem] px-[0.75rem] text-[#DCE0E5]`}>vicio</span>
            </label>

            <label htmlFor="modos" className={`flex items-center justify-center h-fit  `}>
              
              {/* checkbox */}
              <input type="checkbox" name="modos" id="modos" className='hidden'/>

              <span className={` border border-[#DCE0E5] rounded-full py-[1.125rem] px-[0.75rem] text-[#DCE0E5]`}>modos</span>
            </label>

            <label htmlFor="latido" className={`flex items-center justify-center h-fit  `}>
              
              {/* checkbox */}
              <input type="checkbox" name="latido" id="latido" className='hidden'/>

              <span className={` border border-[#DCE0E5] rounded-full py-[1.125rem] px-[0.75rem] text-[#DCE0E5]`}>latido</span>
            </label>

            <label htmlFor="xixi" className={`flex items-center justify-center h-fit  `}>
              
              {/* checkbox */}
              <input type="checkbox" name="xixi" id="xixi" className='hidden'/>

              <span className={` border border-[#DCE0E5] rounded-full py-[1.125rem] px-[0.75rem] text-[#DCE0E5]`}>xixi</span>
            </label>

            <label htmlFor="intolerância" className={`flex items-center justify-center h-fit  `}>
              
              {/* checkbox */}
              <input type="checkbox" name="intolerância" id="intolerância" className='hidden'/>

              <span className={` border border-[#DCE0E5] rounded-full py-[1.125rem] px-[0.75rem] text-[#DCE0E5]`}>intolerância</span>
            </label>

            <label htmlFor="passeio" className={`flex items-center justify-center h-fit  `}>
              
              {/* checkbox */}
              <input type="checkbox" name="" id="passeio" className='hidden'/>

              <span className={` border border-[#DCE0E5] rounded-full py-[1.125rem] px-[0.75rem] text-[#DCE0E5]`}>passeio</span>
            </label>

            <label htmlFor="social" className={`flex items-center justify-center h-fit  `}>
              
              {/* checkbox */}
              <input type="checkbox" name="social" id="social" className='hidden'/>

              <span className={` border border-[#DCE0E5] rounded-full py-[1.125rem] px-[0.75rem] text-[#DCE0E5]`}>social</span>
            </label>
          </form>

        </div>

      </div>

      <Back />
      <Next name="proximo" url="/marks/mark2" />
    </>
  ); 
}

export default MarkFirst;