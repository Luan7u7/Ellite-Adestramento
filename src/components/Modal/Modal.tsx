
import React, { MouseEventHandler, useState } from 'react'
import { modal } from '.'

//* ESSE COMPONENTE VAI ENCAPSULAR TODO CONTEUDO QUE PRECISAR DE UM TAMANHO ESPECIFICO COMO O CARD POR EXEMOPLO

export type modal = {
  children?: React.ReactNode,
  open?: boolean,
  onClose?: MouseEventHandler,
  setOpen?: any,
}

export const Modal = ({open, setOpen, onClose}: modal) => {


  if(!open) return <></>;

  return (
    <>
      <modal.overlay>

        <modal.content>


          <button onClick={setOpen} className='w-full h-14 absolute bottom-0 border-separators-nonOpaqueDark border-t flex justify-center items-center'>

            <span className='text-color-blueDark'>baixar app</span>
          </button>


        </modal.content>

      </modal.overlay>
    </>
  );
}