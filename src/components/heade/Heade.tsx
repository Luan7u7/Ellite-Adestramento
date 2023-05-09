import Image from 'next/image'
import React from 'react'
import Paw  from '../icons/Paw';


const Heade: React.FC = () => {
  return (
    <>
      <header className='flex items-center w-screen h-[5.25rem] bg-white shadow-lg justify-between'>
        <Image 
          src="/ealogo.svg"
          width={156}
          height={47}
          quality={100}
          alt="logo"
          className="ml-6"/>
        <Paw />
      </header>
    </>
  )
}

export default Heade;