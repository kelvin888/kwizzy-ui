import type { Metadata } from 'next'
import { Quicksand, Lily_Script_One, Poppins } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Providers from 'utils/provider';


const quicksand = Quicksand({
  subsets: ['latin'],
  display: "swap",
  variable: '--font-quicksand',
})

const lily_script_one = Lily_Script_One({
  subsets: ['latin'],
  display: "swap",
  variable: '--lily-script-one',
  weight: '400',
})

const poppins = Poppins({
  subsets: ['latin'],
  display: "swap",
  variable: '--poppings',
  weight: ['400', '700'],
})

const avertaBold = localFont({
  src: '../assets/fonts/Averta-Bold.ttf',
  display: 'swap',
  variable: '--font-averta-bold',
})

const avertaSemiBold = localFont({
  src: '../assets/fonts/Averta-Semibold.ttf',
  display: 'swap',
  variable: '--font-averta-semi-bold',
})

export const metadata: Metadata = {
  title: 'Quiz App',
  description: 'Take quizzes and learn daily',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className={`${quicksand.className} ${avertaBold.className} ${avertaSemiBold.className} ${lily_script_one.className} ${poppins.className}`}>
      <body>
        <Providers>
          <ToastContainer />
          {children}
        </Providers>
      </body>
    </html>
  )
}
