import '@/styles/globals.css'
import '@/styles/index.scss'
import type { AppProps } from 'next/app'
import { Lato } from "next/font/google"

const lato = Lato({
  subsets: ["latin"],
  weight: '700'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
     <style jsx global>{`
        :root {
          --lato: ${lato.style.fontFamily};
        }
      `}</style>
    <Component {...pageProps} />
    </>
  )
}
