/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['Calibre', 'sans-serif'],
        'calibre':['Calibre','sans-serif'],
        'firacode':['Fira Code', 'monospace']
      },
      fontWeight:{
        'thin': 100,
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'black': 900,
      },
      colors:{
        'neon':"rgb(100, 255, 218)",
        'textGray':'rgb(204, 214, 246)',
        'textDark':"#8892b0",
        'bgSecondary':'#112240'
      }
    },
  },
  plugins: [],
}

