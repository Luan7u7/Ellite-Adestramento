import Image from 'next/image'
import React from 'react'
import Paw  from '../icons/Paw';


const Heade: React.FC = () => {
  return (
    <>
      <header className='
        flex 
        items-center 
        w-screen 
        h-[5.25rem] 
        bg-white 
        shadow-[0px_2px_8px_#00000078] 
        justify-between 
        sticky 
        top-0 
        z-50
        '>
        <Image 
          src="/ealogo.svg"
          width={156}
          height={47}
          priority={true}
          quality={100}
          alt="logo"
          className="ml-6 w-[9.75rem] h-[3.75rem]"/>
        <Paw />
      </header>
    </>
  )
}

export default Heade;