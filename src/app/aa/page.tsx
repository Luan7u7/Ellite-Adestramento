

import { authContext } from '@/auth/authContext'
import { queryClient } from '@/server/queryClient'
import React, { useContext } from 'react'
import { QueryClientProvider } from 'react-query/types/react'


const Aa = () => {
  const auth = useContext(authContext)

  return (
    <QueryClientProvider client={queryClient}>

      <div className='bg-black'>
        <h1>testo da pagina Aa </h1>

      </div>
    </QueryClientProvider>
  )
}

export default Aa