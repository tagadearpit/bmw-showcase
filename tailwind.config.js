/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Manrope"', 'sans-serif']
      },
      colors: {
        canvas: {
          DEFAULT: '#08080a',
          soft: '#0c0d11',
          panel: '#101116'
        },
        bmw: {
          blue: '#0a5fc4',
          cyan: '#18b6e8',
          ice: '#cdd3da'
        }
      },
      backgroundImage: {
        'radial-fade': 'radial-gradient(circle at 50% 50%, var(--tw-gradient-stops))',
        'metal-sheen': 'linear-gradient(115deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 35%, rgba(255,255,255,0.05) 60%, rgba(255,255,255,0) 100%)'
      },
      boxShadow: {
        glow: '0 0 60px -10px rgba(24,182,232,0.35)',
        'glow-sm': '0 0 30px -5px rgba(24,182,232,0.3)',
        panel: '0 8px 40px -8px rgba(0,0,0,0.6)'
      },
      animation: {
        'drift-slow': 'drift 22s ease-in-out infinite',
        'drift-slower': 'drift 32s ease-in-out infinite reverse',
        shimmer: 'shimmer 2.8s linear infinite',
        float: 'float 6s ease-in-out infinite'
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(40px, -30px) scale(1.08)' },
          '66%': { transform: 'translate(-30px, 20px) scale(0.96)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        }
      }
    }
  },
  plugins: []
}
