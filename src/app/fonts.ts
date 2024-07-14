import { Chakra_Petch } from 'next/font/google'

const chakraPetch = Chakra_Petch({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
  variable: '--font-chakra-petch',
})

export const fonts = {
  chakraPetch,
}
