
import React from 'react';
import { ButtonHTMLAttributes } from 'react';
import Link from 'next/link';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  url: string
}



 const LinkNext: React.FC<ButtonProps> = ({url}) => {

  return (
      <div 
      className={``}>
        <Link href={url}
        className={`px-2 text-[#ffffff5d] text-xl`}>
          próximo
        </Link>
      </div>
  );
}

export default LinkNext