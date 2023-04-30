import React, { useState } from 'react'
import Image from 'next/image'

const screenWelcome = () => {
  
  return(
    <>
      <main className="w-screen h-screen bg-[#191616]">

      <h1 className="titulo_dog font-ws font-semibold uppercase leading-[3.7rem] w-[19rem] text-right absolute top-4 right-3">
        A melhor opção de educação para seu pet
      </h1>

      <Image
        src="/dog.png"
        width={418}
        height={412}
        alt="foto do doguinho"
        className="absolute left-0 top-36"
      />
      
      </main>

      <footer className="flex flex-col fixed items-center bottom-0 left-0 center w-screen h-24 rounded-t-[32px] border-t border-t-[#91ada4c7] bg-[#2B2B2B] overflow-hidden">

        <div className="w-32 h-1 bg-white p-[2px] rounded-full mt-2 z-10"></div>

        {/* <p className="text-xl font-dg text-white z-10 mt-2">escolha uma opção</p> */}

        <p className="mt-4 w-[20rem] text-xl text-center font-dg text-white z-10">
          agende sua consulta, os horários disponíveis acabam num piscar de olhos.
        </p>

        <div className="flex justify-center items-center mt-5 w-[18.1875rem] h-[4.5rem] text-2xl font-dg text-white py-7 px-[2.625rem] rounded-[2rem] bg-[#475469]  z-10 btn_blur">
          começar
        </div>

        <div className="flex mt-5 justify-center items-center w-[12.75rem] h-[4.25rem] rounded-[2rem] text-2xl font-dg text-white py-[1.625rem] px-[3.75rem] bg-[#9E6443] z-10 btn_blur">
          explorar
        </div>

        <div className="flex relative -translate-y-[20rem] -space-x-[2rem] z-0">

          <div className="l_blur w-[20.75rem] h-[27.43rem] flex-1] grow "></div>

          <div className="r_blur w-[13.75rem] h-[27.43rem] grow-0 shrink"></div>

        </div>

      </footer>
    </>
  )
}

export default screenWelcome