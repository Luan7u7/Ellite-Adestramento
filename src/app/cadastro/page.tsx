

import React from 'react'
import { container } from '@/components/Containers'
import cadastro from "./cadastro.module.css"


const Cadastro = () => {


  return (
    <>
      <div className='w-screen h-screen flex justify-center bg-color-dark '>

        <div className='w-[90%] h-full flex flex-col items-center justify-center gap-10 font-[Roboto] font-thin'>

          <h1 className='text-2xl first-letter:uppercase'>cadastro</h1>


          <form className='w-full flex flex-col gap-10  items-center justify-center '>

            <container.group className='flex-col w-full'>

              <label htmlFor="owner"  className='w-[90%] h-fit py-0 px-3  border-b border-separators-nonOpaqueDark'>

                <input type="text" id="owner" className='appearance-none focus:outline-none w-full bg-transparent border-none placeholder:text-separators-nonOpaqueDark' placeholder="Proprietário" />

              </label>

            </container.group>



            <container.group className='flex-col w-full'>

              <label htmlFor="owner"  className='w-[90%] h-fit py-0 px-3  border-b border-separators-nonOpaqueDark'>

                <input type="text" id="owner" className='appearance-none focus:outline-none w-full bg-transparent border-none placeholder:text-separators-nonOpaqueDark' placeholder="Nome do cão" />

              </label>

            </container.group>



            <container.group className='flex-col w-full'>

              <label htmlFor="owner"  className='w-[90%] h-fit py-0 px-3  border-b border-separators-nonOpaqueDark'>

                <input type="text" id="owner" className='appearance-none focus:outline-none w-full bg-transparent border-none placeholder:text-separators-nonOpaqueDark' placeholder="Idade do cão" />

              </label>

            </container.group>



            <container.group className='flex-col w-full'>

              <label htmlFor="owner"  className='w-[90%] h-fit py-0 px-3  border-b border-separators-nonOpaqueDark'>

                <input type="text" id="owner" className='appearance-none focus:outline-none w-full bg-transparent border-none placeholder:text-separators-nonOpaqueDark' placeholder="Raça do cão" />

              </label>

            </container.group>

          </form>

          <container.group className='flex-col gap-4'>

            <button className='text-color-blueDark '>prosseguir</button>

            <button className='text-color-blueDark '>entrar</button>

          </container.group>

          <p className={cadastro.a}>klskasasn</p>

        </div>
      </div>
    </>
  )
}


export default Cadastro