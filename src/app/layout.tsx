import './globals.css'

export const metadata = {
  title: 'Ellite Adestramento',
  description: 'educando você e seu pet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body>
        {children}
      </body>
    </html>
  )
}
