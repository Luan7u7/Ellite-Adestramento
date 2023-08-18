import React from 'react';
import Next from '@/components/Nextbtn'
import LinkNext from '@/components/LinkNext';
import { didactGotic, poiretOne, ralewayEX } from '@/fonts/fonts';
import Image from 'next/image';
import Button from '@/components/Button';
import {Card, Adornment, ContainerFull, AlignCenter, Form, Option} from '@/components'

const MarkThird: React.FC = () => {

  

  return(
    <>
      {/* 1°parte */}
      <ContainerFull flex='flex-row'>

        <AlignCenter fCenter='flex justify-around items-center'> 

          <h1 className={`${poiretOne.className} relative top-[0.75rem] left-[2.125rem] text-white text-[4rem] w-[14.82rem] h-[9.75rem] leading-[3.375rem]`}>
            nos vamos até você
          </h1>

          <AlignCenter leftOrRight='-right-[3.8rem]' topOrBottom='top-[9rem]'>
            <Image
            src="/BlackLocationTag.svg"
            alt='locationTag'
            width={62}
            height={114}
            quality={100}
            priority={true}
            className='z-20 absolute top-0 right-[4.7rem]'
            />

            <Adornment
            position='relative'
            spanColor='bg-[#9a303699]'
            spanW='w-[10rem]'
            spanH='h-[10rem]'
            fCenter='flex items-center justify-center'
            shadow='shadow-[0px_0px_14px_2px_#0000006b]'
            round='rounded-[999px]'
            >

              <Adornment
              position='relative'
              spanColor='bg-[#9c393dcc]'
              spanW='w-[8rem]'
              spanH='h-[8rem]'
              fCenter='flex items-center justify-center'
              shadow='shadow-[0px_0px_14px_2px_#0000006b]'
              round='rounded-[999px]'
              >

                <Adornment
                position='relative'
                spanColor='bg-[#c85359]'
                spanW='w-[6rem]'
                spanH='h-[6rem]'
                fCenter='flex items-center justify-center'
                shadow='shadow-[0px_0px_14px_2px_#0000006b]'
                round='rounded-[999px]'
                >  

                </Adornment>

              </Adornment>

            </Adornment>
          </AlignCenter>
          
        </AlignCenter>

      </ContainerFull>

      {/* 2°parte */}
      <ContainerFull>
        <AlignCenter>
          <Card
          tittle='confirme seu endereço'
          spacing='pt-[1rem]'
          cardW='w-[23rem]'
          cardH='h-fit'
          cardBG='bg-[#afafafb1]'
          size='text-[2rem]'
          font={`${ralewayEX.className}`}
          zI='z-10'
          >
            <Form>
              <input type="text" name="" id="" 
              className={`${didactGotic.className} appearance-none bg-[#ffffff00] border-b w-[18rem] h-[2rem] outline-none text-white text-center `}
              />

              <p className={`${didactGotic.className} text-white text-base text-center w-[80%] mt-2`}>
                você também pode ligar o gps que localizamos você
              </p>

              <Button w='w-[11rem]' h='h-[3rem]' text='ativar localização' border='border border-white' round='rounded-[32px]' space='mt-[2.1875rem]' color='text-white' font={`${ralewayEX.className}`}/>
            </Form>
          </Card>
          <Adornment
          spanW='w-[2.0625rem]'
          spanH='h-[90%]'
          spanColor='bg-[#c85359]'
          spanRL='-left-1'
          spanUB='top-[1rem]'
          zI='z-0'
          />

        </AlignCenter>
      </ContainerFull>

      {/* botoes */}
      <div className="flex flex-col items-center gap-3 justify-center">

        <LinkNext bg='bg-[#c85359]' url='/agendamento/calendario' />

        <Next 
        name="próximo" 
        url="/agendamento/calendario" 
        className={`${poiretOne.className}  w-[10rem] h-[3.5rem] text-xl mb-6 text-white rounded-[1rem] bg-[#c85359] btn_blur`}/>
      </div>
    </>
  )
}

export default MarkThird;

