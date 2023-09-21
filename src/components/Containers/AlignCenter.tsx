
import { ComponentProps } from 'react'
import { generalProps } from '@/interfaces'
import { twMerge } from 'tailwind-merge'


type alignCenterProps = Partial<generalProps>&ComponentProps<'div'>

export const AlignCenter: React.FC<alignCenterProps> = (
  {children, leftOrRight, topOrBottom, color, rotate, position = 'relative', gap, flex = 'items-center justify-center', className}
  ) => {
return (
    <>
      <div id='ALIGNCENTER' className={twMerge(`${position} ${leftOrRight} ${topOrBottom} flex flex-col ${flex} w-11/12 h-fit ${color} ${rotate}`, className)} >
        {children}
      </div>
    </>
  )
}
