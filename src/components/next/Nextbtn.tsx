'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { ButtonHTMLAttributes } from 'react';
import { preload } from 'react-dom';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  name: any
  url: string
}



 const Next: React.FC<ButtonProps> = ({name, url, ...rest}) => {

  const router = useRouter()
  const next = ()=>{
    preload
    router.push(url)
  }

  return (
      <button
      type='button'
      onClick={next}
      {...rest}>
        {name }
      </button>
  );
}

export default Next