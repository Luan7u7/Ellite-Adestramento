
  import { generalProps } from '@/interfaces'

//* REVISAR ESSE COMPONENT, TEM MUITAS FUNÇÕES PARA UM UNICO COMPONENTE, E TA PASSANDO MUITAS PROPS QUE NÃO SÃO NECESSARIAS, DA PRA ABSTRAIR

// type alignCenter = Pick<generalProps, "children" | "position" | "leftOrRight" | "topOrBottom" | "color" | "fCenter" | "rotate">


export const AlignCenter: React.FC<generalProps> = (
  
  {children, position='relative', leftOrRight, topOrBottom, color, rotate}
  ) => {
return (
    <>
      <div id='ALIGNCENTER' className={`${position} ${leftOrRight} ${topOrBottom} flex flex-col items-center justify-center w-4/5- Partial h-fit ${color} ${rotate} op`}>
        {children}
      </div>
    </>
  )
}

 