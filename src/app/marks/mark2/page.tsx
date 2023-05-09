import React from 'react';
import Back from '@/components/back/Backbtn'
import Next from '@/components/next/Nextbtn'

const MarkSecond: React.FC = () => {
  return (
    <>
      <div>
        <h1>2 °SEGUNDA TELA DE AGENDAMENTO</h1>
      </div>
      <Back/>
      <Next name='proximo' url='/marks/mark3'/>
    </>
  );
}

export default MarkSecond;