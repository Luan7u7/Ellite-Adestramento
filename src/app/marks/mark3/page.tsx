import React from 'react';
import Back from '@/components/back/Backbtn'
import Next from '@/components/next/Nextbtn'

const MarkThird: React.FC = () => {
  return(
    <>
      <div>
        <h1>3° TERCEIRA TELA DE AGENDAMENTO</h1>
      </div>
      <Back/>
      <Next name='proximo' url='/marks/mark4'/>
    </>
  )
}

export default MarkThird;