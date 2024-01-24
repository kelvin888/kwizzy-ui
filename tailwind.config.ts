import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-primary': 'linear-gradient(95deg, #1884FF 0%, #49CDFF 100%)',
        'gradient-grayscale': 'linear-gradient(0deg, #F5F5F5 0%, #F5F5F5 100%), #F5F5F5;',
          'login-bg': 'url("/login-bg.svg")'
      },
      fontFamily: {
        quicksand: ['var(--font-quicksand)'],
        lily_script_one: ['var(--lily-script-one)'],
        poppins: ['var(--poppings)'],
        avertabold: ['var(--font-averta-bold)'],
        avertaSemiBold: ['var(--font-averta-semi-bold)'],
      },
    },
    colors: {
      transparent: 'transparent',
      inherit: 'inherit',
      white: '#ffffff',
      black: '#000000',
      primary: {
        100: '#2146ec',
      },
      accent: {
        100: '#ffeff2',
      },
      secondary: {
        100: '#01FF88',
      },
      grayscale: {
        20:'#FBF9F9',
        30:'#F5F5F5',
        40:'#C4C4C4',
        50:'#828282',
        60: '#8692A6',
        90:'#696F79',
        100: '#333333',
      },
      danger: {
        100: '#de1c22',
      },
      success: {
        100: '#36b37e',
      },
      warning: {
        100: '#ffc400',
      },
      turquoise: {
        100: '#00c7e6',
      },
    },
    boxShadow: {
      xs: '4px 4px 4px 3px rgba(237, 237, 237, 0.59)',
      sm: '0px 15px 40px 5px #EDEDED',
      md: '0px 18px 40px -12px rgba(62, 189, 255, 0.45)',
    },
  },
  plugins: [],
}
export default config
