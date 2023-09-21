import { AriaAttributes, DOMAttributes, StyleHTMLAttributes } from "react";

export interface generalProps {
  title?: string,
  color?: string | undefined,
  border?: string,
  children?: React.ReactNode,
  width?: string,
  height?: string,
  position?: "absolute"|"relative",
  topOrBottom?: string,
  leftOrRight?: string,
  round?: string,
  index?: string,
  shadow?: string,
  flex?: string,
  size?: string,
  font?: string,
  padding?: string,
  spacing?: string,
  gap?: string,
  rotate?: string,
  url?: string,
  typebutton?: 'button' | 'reset' | 'submit',
  
}

export interface Imodal{
  isOpen: boolean,
  setOpen: (isOpen: boolean) => void
}