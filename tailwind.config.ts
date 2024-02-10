import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(95deg, #1884FF 0%, #49CDFF 100%)',
        'gradient-grayscale': 'linear-gradient(0deg, #F5F5F5 0%, #F5F5F5 100%), #F5F5F5;',
        'login-bg': 'url("/login-bg.jpeg")'
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
        20: '#FBF9F9',
        30: '#F5F5F5',
        40: '#C4C4C4',
        50: '#828282',
        60: '#8692A6',
        70: "#DADADA",
        90: '#696F79',
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
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config