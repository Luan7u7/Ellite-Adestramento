import React from 'react';
import Next from '@/components/next/Nextbtn'
import ContainerFull from '@/components/Containers/ContainerFull';
import Card from '@/components/card/Card';
import Adornment from '@/components/adornment/Adornment';
import AlignCenter from '@/components/Containers/AlignCenter';

const MarkFour: React.FC = () => {

  const goals = ['obediência','banheiro','vicio','modos','latido','xixi','intolerância','passeio','trauma','educação','raiva','social','comida','controle','medo']

  return(
    <>
      <div>
        <h1 className='text-white'>4° QUARTA TELA DE AGENDAMENTO</h1>
      </div>

      <ContainerFull>
        <AlignCenter>

        </AlignCenter>
      </ContainerFull>
    
    </>
  )
}

export default MarkFour;

