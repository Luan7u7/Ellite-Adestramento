

import React from 'react'
import { container } from '../Containers'

export const BuyandPhotos = () => {
  return (
    <>
      <container.group className='w-full justify-around items-center gap-1'>

            <container.frame className='w-40 h-40 items-center bg-shark-950 font-[Inter] font-light p-1 text-justify'>

              <h1 className='text-2xl first-letter:uppercase pt-2'>comprar</h1>

              <p className='w-full text-[0.63rem]  p-2 pb-3 font-normal '>aproveite as promoções para comprar equipamentos para o confrto do seu pet
              </p>

            </container.frame>


            <container.frame className='w-40 h-40 items-center bg-shark-950 font-[Inter] font-light p-1 text-justify'>

              <h1 className='text-2xl first-letter:uppercase pt-2'>fotos</h1>

              <p className='w-full text-[0.63rem]  p-2 pb-3 font-normal '>aqui você encontra as fotos mais top do seu pet, salve-as</p>

            </container.frame>

          </container.group>

    </>
  )
}