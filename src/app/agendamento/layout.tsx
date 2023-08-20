import '../globals.css'


export default function RootLayout({children}: {children: React.ReactNode}) 
{
  return (
    <html lang="pt">
      <body>
        <main className="bg-[#191616] w-screen mx-auto h-screen overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  )
}