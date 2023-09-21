import React from 'react';
import Image from 'next/image';
import {container} from '@/components/Containers'
import { Button, Next } from '@/components/buttons';
import { Card, Form, Adornment } from '@/components/assets';

const Location: React.FC = () => {

  

  return(
    <>
      <div className='tablet:invisible animate-loading duration-75'>

      </div>
      {/* 1°parte */}
      <container.full className='mt-6'>
        <container.center>
          <h1 className={`font-PoiretOne relative text-left text-white text-[4rem] w-[14.82rem] h-fit leading-[3.375rem] -left-14`}>
            nos vamos até você
          </h1>
        </container.center>
      </container.full>


      {/* 2°parte */}
      <container.full>
        <container.center > 
          <container.center leftOrRight='-right-[10rem]' topOrBottom='-top-[4.5rem]' position='absolute'>

            <Adornment
            position='relative'
            color='bg-fuzzy-wuzzy-900'
            width='w-[10rem]'
            height='h-[10rem]'
            flex='flex items-center justify-center'
            shadow='shadow-[0px_0px_14px_2px_#0000006b]'
            round='rounded-[999px]'
            >

              <Adornment
              position='relative'
              color='bg-fuzzy-wuzzy-700'
              width='w-[8rem]'
              height='h-[8rem]'
              flex='flex items-center justify-center'
              shadow='shadow-[0px_0px_14px_2px_#0000006b]'
              round='rounded-[999px]'
              >

                <Adornment
                position='relative'
                color='bg-fuzzy-wuzzy-500'
                width='w-[6rem]'
                height='h-[6rem]'
                flex='flex items-center justify-center'
                shadow='shadow-[0px_0px_14px_2px_#0000006b]'
                round='rounded-[999px]'
                >  

                </Adornment>
              </Adornment>
            </Adornment>
          </container.center>

          <container.capsule>
            <Image
            src="/BlackLocationTag.svg"
            alt='locationTag'
            width={62}
            height={114}
            quality={100}
            priority={true}
            className='z-20 absolute -top-[3.5rem] right-0'
            />

          <Card
          title='confirme seu endereço'
          spacing='pt-[1rem]'
          width='w-[23rem]'
          height='h-fit'
          size='text-[2rem]'
          font='font-Raleway font-light'
          index='z-10'
          >
            <Form >
              <input type="text" name="" id="" 
              className={`font-DidactGothic appearance-none bg-[#ffffff00] border-b w-[18rem] h-[2rem] outline-none text-white text-center selection:bg-reded`}
              />

              <p className={`font-DidactGothic text-white text-base text-center w-[80%] mt-2`}>
                você também pode ligar o gps que localizamos você
              </p>

              <Button
                size='xl'
                title='ativar'
                className='font-PoiretOne hover:border-reded duration-1000 btn-blur'
                typebutton='submit'
              />
            </Form>
          </Card>
          <Adornment
          width='w-[2.0625rem]'
          height='h-[90%]'
          color='bg-reded'
          leftOrRight='-left-1'
          topOrBottom='top-[1rem]'
          index='z-0'
          />
          </container.capsule>
        </container.center>

      </container.full>

      {/* botoes */}
      <div className="flex flex-col items-center gap-3 justify-center">


        <Next
        name="próximo" 
        url="/agendamento/calendario" 
        models='default'
        className='font-PoiretOne border border-reded btn_blur hover:bg-reded duration-700 ease-out'/>
      </div>
    </>
  )
}

export default Location;

