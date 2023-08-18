
import React from 'react'
import { generalProps } from '@/interfaces'
import { AlignCenter, Container, ContainerFull } from '@/components'
import { Frame } from '@/components/Frame'


type oa = Partial<generalProps>

//!ATENÇÃO -> REVISAR COMPONENTES PARA ALINHAR OS ELEMENTOS NO MEIO DA TELA, ALIGNITEMS E CONTAINERFULL NÃO ESTÃO SUPRINDO ESSA NECESSIDADE!!

const Agendamento: React.FC<oa> = ({children}) => {
  
  

  return (  
    <>
      <Container.Screen color='bg-[#d3d3d3]'>
        <Container.Full>

          <Frame color='bg-grayDark' border='border'>
              <p className='text-sm text-justify tracking-tight'>Lorem ipsum dolor sit amet consectetur. Elit morbi in elementum sed neque elementum odio ac. Id cras mattis tempus arcu pretium nisi sit netus. Consequat posuere venenatis in gravida.
              </p>
          </Frame> 
  
          <Frame>
          <p className='text-sm text-justify leading-4 text-grayDark'>Lorem ipsum dolor sit amet consectetur. Gravida lorem justo mauris neque. Vestibulum enim id nibh enim sit vitae tempor euismod felis. Placerat dolor est nulla praesent risus adipiscing id dolor arcu. Sit feugiat arcu etiam consectetur commodo. Hendrerit pellentesque mus ipsum maecenas pretium vitae lobortis in nam. At id cursus urna ac molestie hac.
          </p>
          <p className='text-sm text-justify leading-4 text-grayDark'>Lorem ipsum dolor sit amet consectetur. Gravida lorem justo mauris neque. Vestibulum enim id nibh enim sit vitae tempor euismod felis. Placerat dolor est nulla praesent risus adipiscing id dolor arcu. Sit feugiat arcu etiam consectetur commodo. Hendrerit pellentesque mus ipsum maecenas pretium vitae lobortis in nam. At id cursus urna ac molestie hac.
          </p>
          <p className='text-sm text-justify leading-4 text-grayDark'>Lorem ipsum dolor sit amet consectetur. Gravida lorem justo mauris neque. Vestibulum enim id nibh enim sit vitae tempor euismod felis. Placerat dolor est nulla praesent risus adipiscing id dolor arcu. Sit feugiat arcu etiam consectetur commodo. Hendrerit pellentesque mus ipsum maecenas pretium vitae lobortis in nam. At id cursus urna ac molestie hac.
          </p>
          </Frame>
         
          <Frame col_center='flex-row'>
         
            <input type="checkbox" name="acepptTerms" id="acepptTerms" className='appearance-none border border-[#585858] aspect-square h-6 rounded-md bg-transparent checked:bg-grayDark text-white'/>

              <p className='text-[0.625rem] text-grayDark leading-3'>li e aceito todos os termos estabelecidos para continuar e agendar o treinamento do meu pet.
              </p>
          </Frame>

          <button className='fixed bottom-8 w-72 h-16 bg-grayDark rounded-xl text-2xl shadow-[#858080] shadow-[0_16px_10px_-10px]'>
            começar
          </button>
        </Container.Full>
      </Container.Screen>
    </>
  )
}

export default Agendamento;