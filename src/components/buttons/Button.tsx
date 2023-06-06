import React from 'react';

interface buttonProps{
  w: string,
  h: string,
  bg?: string,
  border: string,
  round?: string,
  font?: string,
  text: string
  color: string,
  space: string,
}

const Button: React.FC<buttonProps> = ({w, h, bg, round, font, text, color, border, space}) => {
  return (
    <>
      <button className={`${w} ${h} ${bg} ${round} ${font} ${color} ${border} flex justify-center items-center ${space} `}>
        {text}
      </button>
    </>
  )
}

export default Button;