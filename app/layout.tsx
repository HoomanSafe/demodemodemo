import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Genius AI Chat',
  description: 'Experience automated intelligence',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://unpkg.com/@solana/web3.js@latest/lib/index.iife.min.js"></script>
      </head>
      <body className={`${inter.className} bg-black`}>{children}</body>
    </html>
  )
}

