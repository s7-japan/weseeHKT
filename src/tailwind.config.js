const tailwindConfig = {
  theme: {
    extend: {
      colors: {
        purple: {
          light: '#9C6AFF',
          DEFAULT: '#7C3AED',
          dark: '#4C1D95',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    }
  }
};

export default tailwindConfig; 