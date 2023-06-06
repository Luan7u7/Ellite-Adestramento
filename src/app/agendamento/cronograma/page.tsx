import React from 'react';
import Next from '@/components/next/Nextbtn'
import Card from '@/components/card/Card';
import { poiretOne, ralewayMD } from '@/fonts/fonts';
import LinkNext from '@/components/link/LinkNext';
import ContainerFull from '@/components/Containers/ContainerFull';
import Form from '@/components/forms/Form';
import Option from '@/components/card/Option';
import Adornment from '@/components/adornment/Adornment';
import AlignCenter from '@/components/Containers/AlignCenter';



const MarkSecond: React.FC = () => {

  const days = ['D','S','T','Q','Q','S','S']

  const horarys = ['08:00','09:00','10:00','11:00','14:00','15:00','16:00','17:00','18:00']
  
  return (
    <>
      <div className='w-full h-full animate-loading delay-75'>
        <div
          className={`relative w-screen h-[17.875rem] flex flex-row`}>
          <div
            className={`absolute -left-[9.9125rem] top-[4.3rem] w-[14.3125rem] h-[5.9375rem] bg-[#dda248] rounded-[48px] -rotate-45 z-20 shadow-[11px_8px_14px_#0000003a]`}
          />

          <div
            className={`absolute -left-[10.7rem] top-[4.8rem] w-[17.875rem] h-[8.125rem] bg-[#dda248] rounded-[65px] -rotate-45 z-10`}
          />

          <h1
            className={`${poiretOne.className} text-white text-[2.75rem] text-right leading-[2.45rem] absolute top-[1.2rem] left-[10rem] w-[11.8125rem] h-[13.9375rem] `}>
              
            Vamos <br /> escolher <br /> os dias <br /> e horarios <br /> para as <br /> aulas

          </h1>

        </div>

        <ContainerFull>
          <AlignCenter>
            <Card 
              tittle='Reserve dois dias por semana para as aulas'
              size='text-[1.375rem]'
              spacing='pt-[1.75rem]'
              font={`${ralewayMD.className}`}
              cardW='w-[22.5rem]'
              cardH='h-fit'
              cardBG='bg-[#777777b2]'
              
            >
              <Form gap='gap-x-[0.4rem]'>
                {
                  days.map((day, index) => 
                    
                    (
                        <Option
                        name={day} 
                        id={day + index } 
                        key={index}
                        width='w-10'
                        height='h-10'
                        rounded='rounded-[6px]'
                        checked='checked:bg-[#f2b14f]'
                        />
                    )
                  )
                }
              </Form>
              
            </Card>
            <Adornment
            spanW='w-[16rem]'
            spanH='h-[6rem]'
            spanColor='bg-[#f2b14f]'
            spanRL='-left-1'
            spanUB='-top-[0.35rem]'
            zI='-z-10'
            />
          </AlignCenter>
        </ContainerFull>


        <ContainerFull>
          <AlignCenter>
            <Card
            tittle='horários disponíveis'
            size='text-[1.375rem]'
            spacing='pt-[1.75rem]'
            font={`${ralewayMD.className}`}
            cardBG='bg-[#5050506b]'
            cardH='h-fit'
            cardW='w-[22.5rem]'
           >
          <Form gap='gap-x-[0.9rem] gap-y-[0.9rem]'>
            {
              horarys.map((horary, index) =>

                (
                  <Option
                  key={index}
                  name={horary}
                  id={horary + index }
                  width='w-[5.9375rem]'
                  height='h-[3.1875rem]'
                  rounded='rounded-[20px]'
                  checked='checked:bg-[#f2b14f]'
                  />
                )
              )
            }
          </Form>

            </Card>
        
            <Adornment
            spanW='w-[20rem]'
            spanH='h-[6rem]'
            spanColor='bg-[#f2b14f]'
            spanRL='left-[5%]'
            spanUB='-top-[0.35rem]'
            zI='-z-10'
            />
          </AlignCenter>
        </ContainerFull>


          <div className=" flex flex-col items-center gap-3 justify-center">

            <LinkNext bg='bg-[#f2b14f]' url='/agendamento/localizacao'/>

            <Next 
            name="próximo" 
            url="/agendamento/localizacao" 
            className={`${poiretOne.className} justify-center items-center w-[10rem] h-[3.5rem] text-xl mb-6 text-white rounded-[1rem] bg-[#f2b14f] btn_blur`}/>
          </div>
        
      </div>
    </>  
  );
}

export default MarkSecond;