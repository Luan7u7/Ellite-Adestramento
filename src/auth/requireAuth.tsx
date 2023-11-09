import { useContext } from "react"
import { authContext } from "./authContext"
import Cadastro from "@/app/cadastro/page"

export const RequireAuth = ({ children }: {children : JSX.Element}) => {

  const auth = useContext(authContext)

  if(!auth.user){
    return <Cadastro />
  }
  return children
}