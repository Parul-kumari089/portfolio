/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#09090B',
        bgSoft: '#0F0F13',
        card: '#131318',
        border: 'rgba(255,255,255,0.08)',
        primary: '#7C5CFF',
        primarySoft: 'rgba(124,92,255,0.15)',
        accent: '#38BDF8',
        accentSoft: 'rgba(56,189,248,0.15)',
        text: '#F4F4F6',
        textMute: '#9BA1AE',
        textFaint: '#5D6270',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        xl2: '18px',
      },
    },
  },
  plugins: [],
}
