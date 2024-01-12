import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/header'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ecommerce App',
  description: 'Ecommerce Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header/>
          {children}
          <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            <p>Copyright &copy; - All Rights reserved by Ecommerce</p>
          </footer>

        </div>
        </body>
    </html>
  )
}
