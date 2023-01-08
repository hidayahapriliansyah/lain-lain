/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'blue-grad': '#4292b9',
        'blue2-grad': '#70c4bc',
        'green-grad':'#8fd79f',
        'green2-grad':'#b2e782',
        'yellow-grad':'#fff54e',
        'yellow2-grad':'#fed303',
      },
      animation: {
        move: 'grad1 5s linear infinite',
        'move2': 'grad2 8s linear infinite',
        'move3': 'grad3 7s linear infinite',
      },
      keyframes: {
        'grad1': {
          '0%, 100%': { transform: 'translateX(100%)'},
          '50%': { transform: 'translateX(-100%)'},
        },
        'grad2': {
          '0%, 100%': { transform: 'translateY(50%) scale(120%)'},
          '50%': { transform: 'translateY(-50%)'},
        },
        'grad3': {
          '0%, 100%': { transform: 'translateX(50%) scale(115%)'},
          '50%': { transform: 'translateY(-50%)'},
        }
      }
    },
  },
  plugins: [],
}
