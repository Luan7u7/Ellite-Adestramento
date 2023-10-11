
'use client'

import { simple_button } from '@/functions/button';
import { generalProps } from '@/interfaces';
import React, { ComponentProps } from 'react';
import { VariantProps, tv } from 'tailwind-variants';
import { useModal } from '@/hooks';
import { Imodal } from '@/interfaces';

type buttonProps = generalProps & ComponentProps<'button'> & VariantProps<typeof button>

const button = tv ({
  base: 'flex justify-center items-center border border-bg-gray-300 rounded-xl',
  variants: {
    size: {
      default: 'w-full h-fit py-4 px-6 mt-6',

      sm: 'w-1 h-1 py-2 px-4 mt-6',

      lg:'w-[7.5rem] h-[2.35rem] rounded-md ',

      xl: 'w-[9rem] h-[2.35rem] ',

    }
  },
  defaultVariants:{
    size: 'default',
  }
})

export const Button: React.FC<buttonProps> = ({url, size, className, typebutton = 'submit', title, children, onClick, ...rest}) => {

  const {modal, show} = useModal()

  return (
    <>
      <button
      onClick={show}
      {...rest}
      type={typebutton}
      className={button({size,className})}>
        {children}
        {title}
      </button>
    </>
  )
}
