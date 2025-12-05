/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        swiss: {
          red: '#FF0000',
          black: '#000000',
          white: '#FFFFFF',
          gray: {
            100: '#F5F5F5',
            200: '#E8E8E8',
            300: '#CCCCCC',
            400: '#999999',
            500: '#666666',
            600: '#333333',
          }
        }
      },
      fontFamily: {
        helvetica: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['Courier New', 'monospace'],
      },
      gridTemplateColumns: {
        'swiss': 'repeat(12, 1fr)',
      },
      spacing: {
        'swiss': '8px',
      },
      letterSpacing: {
        'tight': '-0.02em',
        'normal': '0',
        'wide': '0.02em',
      }
    },
  },
  plugins: [],
}

