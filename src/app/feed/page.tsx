


import React from 'react'
import { container } from '@/components/Containers'
import { Acompanhamento, BuyandPhotos, Cronograma, Eventos, Mensagem, Perfil } from '@/components/feed assets'
import { Adornment } from '@/components/assets'

const Feed = () => {
  return (
    <>
      <container.screen className='bg-shark-600 h-full'>
        <container.capsule className='w-full mt-6 space-y-4 p-1 overflow-x-clip'>

          <Mensagem />

          <Adornment width='w-[85%]' height='h-[1px]' color='bg-shark-300' position='relative' className=''/>

          <Adornment position='relative' id='space' className='h-8 w-full'/>


          <Perfil/>

          <Adornment width='w-[85%]' height='h-[1px]' color='bg-shark-300' position='relative'/>

          <Cronograma />

          <Adornment width='w-[85%]' height='h-[1px]' color='bg-shark-300' position='relative' className=''/>

          <Eventos />

          <Adornment width='w-[85%]' height='h-[1px]' color='bg-shark-300' position='relative'/>

          <BuyandPhotos />

          <Adornment width='w-[85%]' height='h-[1px]' color='bg-shark-300' position='relative'/>

          <Acompanhamento/>

          <Adornment width='w-[85%]' height='h-[1px]' color='bg-shark-300' position='relative'/>

        </container.capsule>
      </container.screen>
    </>
  )
}

export default Feed