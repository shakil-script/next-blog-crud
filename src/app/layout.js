import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <ul className='bg-slate-700 p-4'>
          <Link href={'/'}>Home</Link>

        </ul>
        {children}</body>
    </html>
  )
}
