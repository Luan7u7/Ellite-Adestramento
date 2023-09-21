import React from 'react';
import {Next, Option} from '@/components/buttons'
import {container} from '@/components/Containers'
import { Adornment, Card, Form } from '@/components/assets';

 
const Cronograma: React.FC = () => {

  const days = ['D','S','T','Q','Q','S','S']

  const horarys = ['08:00','09:00','10:00','11:00','14:00','15:00','16:00','17:00','18:00']
  
  return (
    <>
      <div className='tablet:invisible animate-loading delay-75'>
        <container.full>

          <div
            className={`relative w-screen h-[17.875rem] flex flex-row `}>

            <div
              className={`absolute -left-[9.9125rem] top-[4.3rem] w-[14.3125rem] h-[5.9375rem] bg-yellowed] rounded-[48px] -rotate-45 z-20 shadow-[11px_8px_14px_#0000003a]`}
            />

            <div
              className={`absolute -left-[10.7rem] top-[4.8rem] w-[17.875rem] h-[8.125rem] bg-yellowed rounded-[65px] -rotate-45 z-10`}
            />

            <h1
              className='font-PoiretOne text-white text-[2.75rem] text-right leading-[2.45rem] absolute top-[1.2rem] left-[10rem] w-[11.8125rem] h-[13.9375rem] '>
                
              Vamos <br /> escolher <br /> os dias <br /> e horarios <br /> para as <br /> aulas

            </h1>

          </div>

          <container.full>
            <container.center>
              <container.capsule>
                <Card
                  title='Reserve dois dias por semana para as aulas'
                  width='w-[22.5rem]'
                  height='h-fit'
                  index='z-10'
                >
                {/* <Card
                  tittle='Reserve dois dias por semana para as aulas'
                  size='text-[1.375rem]'
                  spacing='pt-[1.75rem]'
                  font='font-Raleway'
                  width='w-[22.5rem]'
                  height='h-fit'
                  color='bg-glass'
                > */}
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
                            checked='checked:bg-yellowed'
                            />
                        )
                      )
                    }
                  </Form>
                
                </Card>
              <Adornment
              width='w-[16rem]'
              height='h-[6rem]'
              color='bg-yellowed'
              leftOrRight='-left-1'
              topOrBottom='-top-[0.35rem]'
              index='-z-0'
              />
              </container.capsule>
            </container.center>
          </container.full>


            <container.center>
              <container.capsule>
                  <Card
                  title='horários disponíveis'
                  size='text-[1.375rem]'
                  spacing='pt-[1.75rem]'
                  font='font-Raleway'
                  color='bg-glass'
                  height='h-fit'
                  width='w-[22.5rem]'
                  index='z-10'
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
                          checked='checked:bg-yellowed'
                          />
                        )
                      )
                    }
                    </Form>
                  </Card>
                <Adornment
                width='w-[20rem]'
                height='h-[6rem]'
                color='bg-yellowed'
                leftOrRight='left-[5%]'
                topOrBottom='-top-[0.35rem]'
                index='-z-10'
                />
              </container.capsule>
            </container.center>

            <container.center>
              <container.capsule className='pt-6'>
                <Next
                name="próximo"
                url="/agendamento/localizacao"
                models='default'
                className='border border-yellowed font-PoiretOne btn_blur'
                
                />
              </container.capsule>
            </container.center>
        </container.full>        
      </div>
    </>  
  );
}

export default Cronograma;