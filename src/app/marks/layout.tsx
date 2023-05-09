import '../globals.css'
import Heade from "@/components/heade/Heade"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body>
        <Heade />
        <main className="bg-[#191616] w-screen h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}