
import React from 'react'
import {Next} from '@/components/buttons/Nextbtn'
import {container} from '@/components/Containers'
import { Adornment, Card, Form } from '@/components/assets'
import { Option } from '@/components/buttons'

const Objetivos: React.FC =  () => {
  

  const goals = ['obediência','banheiro','vicio','modos','latido','xixi','intolerância','passeio','trauma','educação','raiva','social','comida','controle','medo']

  return (
    <div className='tablet:invisible animate-loading delay-75'>
      <container.full >
        <container.full >
          <container.center>

            <span className="phone: rounded-full relative top-[1rem] -left-[12rem] w-[11.6875rem] h-[13.75rem] bg-markOrange shadow-[1px_8px_12px_#d36e3445,3px_16px_24px_#d36e3445]"/>

            <h1 className='font-PoiretOne absolute left-[2rem] top-[2.5rem] text-white antialiased text-[3rem] leading-[94%] tracking-[7%] w-[16rem] h-fit '>

              Vamos te <br /> ajudar a <br /> marcar sua <br /> consulta
            </h1>
          </container.center>
        </container.full>

        

        {/* paragrafo */}
        <container.full>
          <p className={`flex justify-start text-justify text-lg relative -left-6 text-white leading-5`}>
            Precisamos definir quais são seus <br /> principais objetivos
          </p>
        </container.full>

        {/* card */}
        <container.full>
            <container.capsule>
              <Card
              title="Qual seu foco ?"
              spacing='pt-[2rem]'
              size='text-[1.75rem]'
              font='font-Raleway'
              width='w-[22rem]'
              height='h-fit'
              >
                <Form gap='gap-x-[0.9rem] gap-y-[0.5rem]'>
                  {
                    goals.map((goal, index) => 
                      (
                        <Option
                        name={goal} 
                        id={goal + "id"} 
                        key={index}
                        width='w-[6.0125rem]'
                        height='h-[3.2rem]'
                        checked='checked:bg-markOrange'
                        rounded='rounded-[22px]'
                        />
                      )
                    )
                  }
                </Form>  
              </Card>
              <Adornment 
              width="w-[18rem]" 
              height="h-[6.8125rem]" 
              color='bg-markOrange' 
              topOrBottom='-bottom-1' 
              leftOrRight='-right-1'
              index='-z-10'
              />
            </container.capsule>
        </container.full>

        <div className="flex flex-col items-center gap-3 justify-center">

          {/* <Next 
          name="próximo" 
          url="/agendamento/cronograma" 
          className='font-PoiretOne justify-center items-center w-[10rem] h-[3.5rem] text-xl mb-6 text-white rounded-[1rem] bg-markOrange btn_blur'/> */}
          <Next 
            name="próximo" 
            url="/agendamento/cronograma" 
            models='default'
            className='border border-markOrange font-PoiretOne'
          />
        </div>
      </container.full>
    </div>
    
  )
}

export default Objetivos