import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ASIET LIBRARY',
  description: 'attendence system for ASIET library',
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
