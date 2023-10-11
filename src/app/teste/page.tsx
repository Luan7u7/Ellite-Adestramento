'use client'

import React, { useState } from 'react'
import { Modal } from '@/components/Modal/Modal'



export default function Teste() {

  const [openModal, setOpenModal] = useState<boolean>()

  return  (
    <div className='w-full h-full flex flex-col justify-center itens-center p-5'>


      <h1 className='text-2xl text-black'>modal aqui</h1>



      <button onClick={()=> setOpenModal(!openModal)} className='text-black border border-black w-4/5 h-14 rounded-md '>botão</button>


      <Modal open={openModal} setOpen={()=>setOpenModal(!openModal)}/>
    </div>
  )
}