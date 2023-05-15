import React from 'react';
import Back from '@/components/back/Backbtn'
import Next from '@/components/next/Nextbtn'
import Card from '@/components/card/Card';
import Option from '@/components/card/Option';


const MarkSecond: React.FC = () => {
  return (
    <>
      <div>
        <h1>2 °SEGUNDA TELA DE AGENDAMENTO</h1>
      </div>

      <Card name='apd'>
        <Option name='op' id='a' />
      </Card>

      <Back/>
      <Next name='proximo' url='/marks/mark3'/>
    </>
  );
}

export default MarkSecond;