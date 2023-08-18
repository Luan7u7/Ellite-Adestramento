
export interface generalProps{
  tittle?: string,
  color?: string,
  border?: string,
  children?: React.ReactNode,
  cardW?: string,
  cardH?: string,
  cardBG?: string,
  spanColor?: string,
  spanUB?: string,
  spanRL?: string,
  spanW?: string,
  spanH?: string,
  position?: "absolute"|"relative",
  topOrBottom?: string,
  leftOrRight?: string,
  round?: string,
  zI?: string,
  shadow?: string,
  fCenter?: string,
  col_center?: string,
  size?: string,
  font?: string,
  spacing?: string,
  gap?: string,
  rotate?: string,
  
}

export interface Imodal{
  isOpen: boolean,
  setOpen: (isOpen: boolean) => void
}