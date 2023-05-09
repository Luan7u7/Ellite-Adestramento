import React from 'react';
import Back from '@/components/back/Backbtn'
import Next from '@/components/next/Nextbtn'

const MarkFour: React.FC = () => {
  return(
    <>
      <div>
        <h1>4° QUARTA TELA DE AGENDAMENTO</h1>
      </div>
      <Back/>
      <Next name='proximo' url=''/>
    </>
  )
}

export default MarkFour;