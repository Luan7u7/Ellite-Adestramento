
import React, { ComponentProps } from 'react';
import { tv ,VariantProps } from 'tailwind-variants';
import Link from 'next/link';

type ButtonProps =  {
  name: string,
  url: string
} & ComponentProps<'button'> & VariantProps<typeof button>

const button = tv({
  base: 'flex items-center justify-center w-[10rem] h-[3.5rem] px-4 py-2 text-lg font-thin font-PoiretOne leading-5 bg-grayDark rounded-xl',
  variants: {
    models: {
      default:'flex items-center justify-center w-[10rem] h-[3.5rem] px-4 py-2 text-lg font-thin font-PoiretOne leading-5 bg-grayDark rounded-xl',

      full:'flex items-center justify-center w-full h-12 px-4 py-2 text-lg font-thin font-PoiretOne leading-5 bg-yellowed rounded-xl',

      middle:'',

      inline:'',
    },
  },
  defaultVariants:{
    models:"default",
  }
})



export const Next: React.FC<ButtonProps> = ({name, url, models,className, ...rest}) => {


  return (
      <Link
      // className={twMrge('flex items-center justify-center px-4 py-2 text-lg font-thin font-PoiretOne leading-5 bg-grayDark rounded-xl', className)}
      className={button({models, className})}
      key={name}
      href={url}
      prefetch={false}
      >
        {name }
      </Link>
  );
}
