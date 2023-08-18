'use client'

import React, { Suspense, lazy, useState } from 'react'
import { Charging } from './Charging'
import { Modal, Container } from '@/components'
import { generalProps } from '@/interfaces'


const Objectives = lazy(()=>import("../app/agendamento/objetivos/page"))

type oa = Partial<generalProps>

export const ModalButton: React.FC<oa> = ({children}) => {
  
  const [open, setOpen] = useState<boolean>(false)
  

  return ( 
    <>
      
      <button className='button' onClick={()=>setOpen(!open)}>
        abrir
      </button>

      <Modal isOpen={open}  setOpen={setOpen}>
        <Suspense fallback={<Charging />}>
          <h1>estamos preparando tudo para você</h1>
        </Suspense>
      </Modal>

    </>
  )
}
