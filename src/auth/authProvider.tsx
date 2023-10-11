import { useState } from 'react'
import { useApi } from '@/hooks/api/useApi'
import { User } from '@/types/api/User'
import { authContext } from './authContext'

export const authProvider = ({ children }: {children: JSX.Element}) => {

  const [user, setUser] = useState<User | null>(null)

  const api = useApi()

  const signin = async (email: string, password: string)=> {

    const data = await api.signin(email, password)

    if(data.user && data.token) {
      setUser(data.user)
      return true
    }
    return false
  }

  const signout = async () => {
    await api.logout()
    setUser(null)
  }

  return (
    <authContext.Provider value={{ user, signin, signout }}>
      {children}
    </authContext.Provider>
  )
}