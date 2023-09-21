
import React from 'react'
import { container } from '@/components/Containers';
import {Next} from '@/components/buttons/Nextbtn';


const Agendamento: React.FC = () => {
  

  return (  
    <>
      <container.screen color='bg-[#d3d3d3]'>

          <container.capsule className='pt-10'>
            <container.frame color='bg-grayDark' border='border' round='rounded-xl' width='w-[86%]' >
              <p className='text-sm text-justify tracking-tight dark:text-[#dadada]'>Lorem ipsum dolor sit amet consectetur. Elit morbi in elementum sed neque elementum odio acontainer. Id cras mattis tempus arcu pretium nisi sit netus. Consequat posuere venenatis in gravida.
              </p>
            </container.frame> 
          </container.capsule>

          <container.capsule>
          <container.frame >
          <p className='text-sm text-justify leading-4 text-grayDark'>Lorem ipsum dolor sit amet consectetur. Gravida lorem justo mauris neque. Vestibulum enim id nibh enim sit vitae tempor euismod felis. Placerat dolor est nulla praesent risus adipiscing id dolor arcu. Sit feugiat arcu etiam consectetur commodo. Hendrerit pellentesque mus ipsum maecenas pretium vitae lobortis in nam. At id cursus urna ac molestie hacontainer.
          </p>
          <p className='text-sm text-justify leading-4 text-grayDark'>Lorem ipsum dolor sit amet consectetur. Gravida lorem justo mauris neque. Vestibulum enim id nibh enim sit vitae tempor euismod felis. Placerat dolor est nulla praesent risus adipiscing id dolor arcu. Sit feugiat arcu etiam consectetur commodo.
          </p>
          <p className='text-sm text-justify leading-4 text-grayDark'>Lorem ipsum dolor sit amet consectetur. Gravida lorem justo mauris neque. Vestibulum enim id nibh enim sit vitae tempor euismod felis. Hendrerit pellentesque mus ipsum maecenas pretium vitae lobortis in nam. At id cursus urna ac molestie hacontainer.
          </p>
          </container.frame>
          </container.capsule>
         
          <container.capsule className='mb-10'>
            <container.frame flex='flex-row'>
         
              <input type="checkbox" name="acepptTerms" id="acepptTerms" className='appearance-none border border-[#585858] aspect-square h-6 rounded-md bg-transparent checked:bg-grayDark text-white'/>

              <p className='text-[0.625rem] text-grayDark leading-3'>li e aceito todos os termos estabelecidos para continuar e agendar o treinamento do meu pet.
              </p>
            </container.frame>
          </container.capsule>

          <Next 
          name='começar' 
          url='/agendamento/objetivos' 
          className='fixed bottom-8 w-[85%]  h-16 bg-grayDark rounded-xl text-2xl shadow-[#858080] shadow-[0_16px_10px_-10px] font-Marcellus'
          >

          </Next>
      </container.screen>
    </>
  )
}

export default Agendamento;