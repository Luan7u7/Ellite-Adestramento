'use client'
// import "./globals.css"
import React, { useState } from "react"
import { NextPage } from "next"
import Image from 'next/image';
import Next from "@/components/next/Nextbtn";
import { workSans } from "@/fonts/fonts";


const Home: NextPage =() => {

  const [show, setShow] = useState<boolean>(false)

  const showMenu = ()=>{
    setShow((prev)=> !prev)
    
  }

  return (
    <>
      <main className="relative w-screen h-screen bg-[#191616] ">

        <h1 className={`${workSans.className} text-white text-[3.3rem] font-ws font-bold uppercase leading-[3.7rem] w-[22rem] text-right absolute top-4 right-3`}>
          A melhor <br /> opção de <br /> educação para seu pet
        </h1>
        
        <div 
        className="absolute top-[17.5rem] rounded-full blur-[60px] left-[1.] w-[15.5rem] h-[15.5rem] bg-mark-orange"/>

        
        <Image
          src="/dog.png"
          width={418}
          height={412}
          quality={100}
          // fill={true}
          priority={true}
          placeholder='blur'
          blurDataURL="/dog.png"
          alt="foto do doguinho"
          className="absolute left-0 top-[9.375rem]"
        />
        
      </main>


      <footer onClick={showMenu} data-show={show} >
        
      <div className="w-32 h-1 bg-white p-[2px] rounded-full mt-2 z-10"/>
      
        <p className="mt-4 w-[20rem] text-xl text-center font-dg text-white z-10 antialiased">

          agende sua consulta, as vagas acabam num piscar de olhos.
        </p>

        <Next name="começar" url="/marks/mark" 
        className="flex justify-center items-center mt-10 w-[18.1875rem] h-[4.5rem] text-2xl font-dg text-white py-7 px-[2.625rem] rounded-[2rem] bg-[#475469] z-10 btn_blur"/>
          

        <Next name="explorar" url="/explorer" 
        className="flex mt-5 justify-center items-center w-[12.75rem] h-[4.25rem] rounded-[2rem] text-2xl font-dg text-white py-[1.625rem] px-[3.75rem] bg-[#9E6443] z-10 btn_blur"/>

        <div className="flex relative -translate-y-[20rem] -space-x-[2rem] z-0">

          <div className="l_blur w-[20.75rem] h-[27.43rem] flex-1] grow "></div>

          <div className="r_blur w-[13.75rem] h-[27.43rem] grow-0 shrink"></div>

        </div>
      </footer>
    </>
  );
}


export default Home