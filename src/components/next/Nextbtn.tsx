'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { ButtonHTMLAttributes } from 'react';
import { DidactGotic } from '@/fonts/fonts';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  name: string
  url: string
}



 const Next: React.FC<ButtonProps> = ({name, url, ...rest}) => {

  const router = useRouter()
  const next = ()=>{
    router.push(url)
  }

  return (
      <button
      type='button'
      className={` ${DidactGotic.className} px-2 text-[#ffffff5d] text-xl `}
      onClick={next}
      {...rest}>
        {name}
      </button>
  );
}

export default Next