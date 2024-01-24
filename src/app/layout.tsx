import type { Metadata } from 'next'
import { Quicksand, Lily_Script_One, Poppins } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

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
  console.log("checking rerenders");

  return (
    <html lang="en">
      <body className={`${quicksand.variable} ${avertaBold.variable} ${avertaSemiBold.variable} ${lily_script_one.variable} ${poppins.variable}`}>{children}</body>
    </html>
  )
}
