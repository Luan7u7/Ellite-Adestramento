
import React from 'react';
import { ButtonHTMLAttributes } from 'react';
import Link from 'next/link';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  url: string,
  bg: string
}



 const LinkNext: React.FC<ButtonProps> = ({url, bg}) => {

  return (
      <Link href={url} prefetch={false}
        className={`text-center w-[10rem] h-[3.5rem] p-2 rounded-[1rem] text-[#ffff] text-xl ${bg} btn_blur`}>
          próximo
      </Link>
  );
}

export default LinkNext