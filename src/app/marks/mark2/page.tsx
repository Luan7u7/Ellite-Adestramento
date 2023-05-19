import React from 'react';
import Back from '@/components/back/Backbtn'
import Next from '@/components/next/Nextbtn'
import Card from '@/components/card/Card';
import Option from '@/components/card/Option';


const MarkSecond: React.FC = () => {

  const goals = ['obediência','banheiro','vicio','modos','latido','xixi','intolerância','passeio','trauma','educação','raiva','social','comida','controle','medo']

  return (
    <>
      <div>
        <h1>2 °SEGUNDA TELA DE AGENDAMENTO</h1>
      </div>

      <Card tittle='sa'>
        {goals.map((goal, index) =>(<Option name={goal} id={goal+'id'} key={index}/>))}
      </Card>

      <Back/>
      <Next name='proximo' url='/marks/mark3'/>
    </>
  );
}

export default MarkSecond;