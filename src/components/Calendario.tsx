'use client'

import React, { ReactNode, useState } from 'react';
 

export const Calendario: React.FC = () => {

  const date = new Date()
  //data comp leta

  const dt = date

  dt.setDate(1)
 

  const daysNames = ['dom','seg','ter','qua','qui','sex','sab',]

  const months = [
        "Janeito",
        "Fevereiro",
        "Março",
        "Abril",
        "Março",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outrubro",
        "Novembro",
        "Dezembro",
      ] 

  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth()+1)
  //Mes

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  //ano

  const [currentDay, setCurrentDay] = useState(dt.getDay())
  //dia atual

  

  
  const lastDay = new Date(date.getFullYear(), date.getMonth() +1, 0).getDate()
  //ultimo dia do mes

  const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate()
  //ultimo dia do mes anterior

  const firstDayIndex = dt.getDay()
  //qual dia da semana começa o mes

  const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
      ).getDay()
  //ultimo dia do mes
  

  const nextDays = 7 - lastDayIndex - 1
  //dias do proximo mes

 
  //englobar todas as constantes numa função que coloque renderize os dias quando clicar no botão de proximo ou anterior.

  let beforeDays: ReactNode[] = []
  let days: ReactNode[] = [] 
  let afterDays: ReactNode[] = [] 


  
  const prevMont = () => {
    setCurrentMonth(currentMonth -1)
  }

  const nextMonth = () => {
    setCurrentMonth(currentMonth + 1)
  }

 
  for (let x = firstDayIndex; x > 0; x--){
    
    beforeDays.push(<div className="text-[1.4rem] text-zinc-500 m-[0.3rem] w-[calc(16rem/7)] flex justify-center items-center">{prevLastDay - x  +1}</div>)

  }

  for (let i = 1; i <= lastDay; i++){
      if(i.toString().length < 2){
        days.push(
          <div className="text-[1.4rem] m-[0.3rem] text-gray-950 w-[calc(16rem/7)] flex justify-center items-center">
            0{i}
          </div>
        )
      }

      else if(i == new Date().getUTCDate()){
        days.push(
          <div className="text-[1.4rem] m-[0.3rem] bg-green-300 w-[calc(16rem/7)] flex justify-center items-center rounded-lg">
            {i}
          </div>
        )
      }

      else{
        days.push(<div className="text-[1.4rem] text-gray-950 m-[0.3rem] w-[calc(16rem/7)] flex justify-center items-center">{i}</div>)
      }

  }

  for (let j = 1; j <= nextDays; j++){
    if(j.toString().length < 2){
      afterDays.push(<div className="text-[1.4rem] text-zinc-500 m-[0.3rem] w-[calc(16rem/7)] flex justify-center items-center">0{j}</div>)

    }else{
      afterDays.push(<div className="text-[1.4rem] text-zinc-500 m-[0.3rem] w-[calc(16rem/7)] flex justify-center items-center">{j}</div>)
    }
    
  }
  
  return (
    <>
    
      <main id='CALENDARIO' 
      className=" flex flex-col items-center justify-center w-full h-fit p-[0.5rem]">

        <section id='HEADER' 
        className="w-full flex flex-row items-center justify-center  ">

          <nav  
          className=" flex w-full h-fit justify-around items-center  ">

            {/* <button  
            className=" border border-[#a0a0a0] py-[0.3rem] px-[1.2rem] rounded-[24px]" 
            onClick={prevMont} >left</button> */}

              <h1 className='text-xl '>
                {months[currentMonth]}
                
              </h1>

              {/* <button 
              className=" border border-[#a0a0a0] py-[0.3rem] px-[1rem] rounded-[24px]" 
              onClick={nextMonth}>right</button> */}
          </nav>


        </section>

        <section
         className="w-full h-fit pt-4">
          <span className="WEEK-DAYS w-full h-[3rem] py-0 px-[0.2rem] grid grid-cols-7 items-center justify-center">

            {daysNames.map((days, index)=>(
              <div key={index}
              className='text-white w-[calc(22.2rem/7)] flex justify-center items-center'>
                <div key={days}>
                  {days}
                </div>
              </div>
            ))}

          </span>


          <div id="Days" className="w-full h-fit grid grid-cols-7 grid-rows-4">
            {beforeDays}
            {days}
            {afterDays}
          </div>
        </section>
      </main>
    </>    
  )
}

