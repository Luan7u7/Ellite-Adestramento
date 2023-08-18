
import { useState } from "react"

export const useModal = () => {

  const [modal, setModal] = useState(false)

  const show = () => {
    setModal(!modal)
  }

  return{
    modal,
    show
  }
}