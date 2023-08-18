
import React from 'react';
import { ButtonHTMLAttributes } from 'react';
import Link from 'next/link';
import { poiretOne } from '@/fonts/fonts';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  url: string,
  bg?: string,
  font?: string,
}



 const LinkNext: React.FC<ButtonProps> = ({url, bg}) => {

  return (
      <Link prefetch={false} href={url} 
        className={`${poiretOne.className} flex justify-center items-center text-center w-[10rem] h-[3.5rem] p-2 rounded-[1rem] text-[#ffff] text-xl ${bg} btn_blur`}>
          próximo
      </Link>
  );
}

export default LinkNext