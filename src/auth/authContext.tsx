"use client"

import {createContext} from 'react'
import { User } from '@/types/api/User'

export type authContextType = {
  user: null | User,
  signin: (email: string, password: string) => Promise<boolean>
  signout: () => void
}

export const authContext = createContext<authContextType>(null!)