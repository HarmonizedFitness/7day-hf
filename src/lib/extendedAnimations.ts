
export const extendedAnimations = {
  keyframes: {
    'float-slow': {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-20px)' },
    },
    'float-medium': {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-10px)' },
    },
    'float-fast': {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-5px)' },
    },
    'spin-slow': {
      'from': { transform: 'rotate(0deg)' },
      'to': { transform: 'rotate(360deg)' },
    },
    'pulse-subtle': {
      '0%, 100%': { opacity: 1 },
      '50%': { opacity: 0.7 },
    },
    'gradient-flow': {
      '0%': { backgroundPosition: '0% 50%' },
      '50%': { backgroundPosition: '100% 50%' },
      '100%': { backgroundPosition: '0% 50%' },
    },
    'scale-subtle': {
      '0%, 100%': { transform: 'scale(1)' },
      '50%': { transform: 'scale(1.05)' },
    },
  },
  animation: {
    'float-slow': 'float-slow 15s ease-in-out infinite',
    'float-medium': 'float-medium 10s ease-in-out infinite',
    'float-fast': 'float-fast 6s ease-in-out infinite',
    'spin-slow': 'spin-slow 20s linear infinite',
    'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
    'gradient-flow': 'gradient-flow 15s ease infinite',
    'scale-subtle': 'scale-subtle 5s ease-in-out infinite',
  },
};
