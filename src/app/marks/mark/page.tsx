
import React from 'react';
import Back from '@/components/back/Backbtn'
import Next from '@/components/next/Nextbtn'
import Image from 'next/image';
import { NextPage } from 'next';


const MarkFirst: NextPage = () => {


  return (
    <>
      <div className='flex w-screen'>
        <Image 
          src="/ornamentOrange.svg"
          width={187}
          height={236}
          quality={100}
          alt="ornamento"
          className="w-[11.6875rem] h-[14.75rem] relative -left-[4.1rem]"
        />
        <h1 className='font-rj text-white antialiased text-[3rem] w-[16rem]'>
          Vamos te ajudar a marcar sua &quot;consulta&quot;
        </h1>
      </div>

      <div className=''>
        <p className='text-white text-xl font-rj'>aqui foi</p>
      </div>

      <Back/>
      <Next name='proximo' url='/marks/mark2'/>
    </>
  ) 
}

export default MarkFirst;