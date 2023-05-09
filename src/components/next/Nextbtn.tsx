'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { ButtonHTMLAttributes } from 'react';

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
      className='border rounded-lg px-2 bg-zinc-500'
      onClick={next}
      {...rest}>
        {name}
      </button>
  );
}

export default Next