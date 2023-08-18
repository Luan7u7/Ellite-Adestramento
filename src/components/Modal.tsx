import { generalProps, Imodal } from '@/interfaces'
import React from 'react'

//* ESSE COMPONENTE VAI ENCAPSULAR TODO CONTEUDO QUE PRECISAR DE UM TAMANHO ESPECIFICO COMO O CARD POR EXEMOPLO
interface capsuleProps{
  isOpen: boolean,
  setOpen: (isOpen: boolean) => void,
  children: React.ReactNode
}

export const Modal = ({children, isOpen, setOpen}:capsuleProps) => {
  if(isOpen){
    return (
      <>
        <div className='fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-75 flex flex-col justify-start items-center '>

          <div className='w-fit h-fit flex flex-col justify-center items-center '>

            <div className='relative top-12 flex flex-col items-center justify-center gap-6 w-[23rem] h-[32rem] rounded-[2rem] bg-gray-700 shadow-2xl shadow-slate-900 animate-lateral overflow-hidden  bg-cover'>

              {children}
                         
              <button onClick={()=>setOpen(!open)} className='fixed bottom-4 right-6  text-white'>
                fechar
              </button>

            </div>

          </div>

        </div>
      </>
    )
  }
  return null
} 
