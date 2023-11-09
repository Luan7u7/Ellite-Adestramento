import './globals.css'
import { useContext } from 'react'
import { authContext } from '@/auth/authContext'
// import { QueryClientProvider } from 'react-query/types/react'
import { queryClient } from '@/server/queryClient'

export const metadata = {
  title: 'Ellite Adestramento',
  description: 'empresa de adestramento de cães',
}

export default function RootLayout({children}: {children: JSX.Element}){

  // const auth = useContext(authContext)

  return (
    <html lang="pt">
      <body className='my-0 mx-auto'>
        {/* <QueryClientProvider client={queryClient}> */}
          {children}
        {/* </QueryClientProvider> */}
      </body>
    </html>
  )
}
