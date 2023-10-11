import Head from 'next/head'
import '../globals.css'


export default function RootLayout({children}: {children: React.ReactNode})
{
  return (
    <html lang="pt">
      <head>
        <meta name='theme-color' content="#2c2c2e"/>
      </head>
      <body>
        <main className="bg-color-midblack w-screen mx-auto h-screen ">
          {children}
        </main>
      </body>
    </html>
  )
}