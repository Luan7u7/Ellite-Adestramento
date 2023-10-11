
import React from 'react';
import { container } from '@/components/Containers';
import { Frame } from '@/components/Containers/Frame';
import { Button } from '@/components/buttons';
import Image from 'next/image';
import Link from 'next/link';

const Topicos = () => {

  return (
    <>
      <div className='w-screen h-full flex flex-col justify-center items-start relative gap-4 p-6'>

        <h1 className='font-[Roboto] text-3xl font-thin'>Topicos importantes</h1>

        <p className='text-justify font-[Roboto] font-extralight text-base tracking-wide'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis dicta, molestiae necessitatibus quos dolore alias nulla suscipit voluptates unde minus reprehenderit facilis mollitia blanditiis. Qui doloremque exercitationem delectus labore libero!
        </p>

        <container.group className='w-full h-fit justify-start gap-4  overflow-x-scroll snap-x'>
          <Frame className='bg-color-dark w-44 shrink-0'>

            <container.group className='w-full justify-between items-start'>
              <h1 >titulo</h1>
              <span className='text-base font-bold'>...</span>
            </container.group>

            <p className='text-[0.55rem] font-[Roboto] font-extralight text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolorum iusto eos officia? Eius provident saepe quasi error dolor! Veritatis officia harum</p>
          </Frame>


          <Frame className='bg-color-dark w-44 shrink-0'>

            <container.group className='w-full justify-between items-start'>
              <h1 className='font-[Roboto]'>titulo</h1>
              <span className='text-base font-bold '>...</span>
            </container.group>

            <p className='text-[0.55rem] font-[Roboto]  font-extralight text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolorum iusto eos officia? Eius provident saepe quasi error dolor! Veritatis officia harum</p>
          </Frame>


          <Frame className='bg-color-dark w-44 shrink-0'>

            <container.group className='w-full justify-between items-start'>
              <h1>titulo</h1>
              <span className='text-base font-bold'>...</span>
            </container.group>

            <p className='text-[0.55rem] font-[Roboto] font-extralight text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolorum iusto eos officia? Eius provident saepe quasi error dolor! Veritatis officia harum
            </p>
          </Frame>
        </container.group>




        <container.group className='w-full h-fit justify-start gap-4 relative overflow-x-scroll mb-32'>

          <Frame className='bg-color-dark w-44 shrink-0'>

            <container.group className='w-full justify-between items-start'>
              <h1>titulo</h1>
              <span className='text-base font-bold'>...</span>
            </container.group>

            <p className='text-[0.55rem] font-[Roboto] font-extralight text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolorum iusto eos officia? Eius provident saepe quasi error dolor! Veritatis officia harum</p>
          </Frame>


          <Frame className='bg-color-dark w-44 shrink-0'>

            <Link href="/teste" className='w-full h-full absolute top-0 left-0' />

            <container.group className='w-full justify-between items-start'>
              <h1>titulo</h1>
              <span className='text-base font-bold '>...</span>
            </container.group>

            <p className='text-[0.55rem] font-[Roboto]  font-extralight text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolorum iusto eos officia? Eius provident saepe quasi error dolor! Veritatis officia harum</p>

          </Frame>


          <Frame className='bg-color-dark w-44 shrink-0'>

            <container.group className='w-full justify-between items-start'>
              <h1>titulo</h1>
              <span className='text-base font-bold'>...</span>
            </container.group>

            <p className='text-[0.55rem] font-[Roboto] font-extralight text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolorum iusto eos officia? Eius provident saepe quasi error dolor! Veritatis officia harum</p>
          </Frame>
        </container.group>



        <Button title='Agende sua aula' className='bg-color-grayLight text-color-midblack font-[Roboto] font-normal text-lg flex justify-start absolute left-1/2 -translate-x-[50%] bottom-14 w-4/5' />


        <Image
        src="/images/pug2.png"
        alt='ff'
        width={176}
        height={208}
        quality={100}
        className='w-44 h-52 drop-shadow-[-3px_0px_6px_#00000070]  absolute bottom-0 right-3'
        />

      </div>
    </>
  );
}

export default Topicos;