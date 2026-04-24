/* Tailwind Config — doit être chargé APRÈS le CDN Tailwind */
tailwind.config = {
    theme: {
        extend: {
            colors: {
                gouv: {
                    blue: '#003D7A',
                    cyan: '#00A8E8',
                    gold: '#D4A017',
                    red: '#C41E3A',
                    darkred: '#A01830',
                    lightcyan: '#E8F4F8'
                },
                text: {
                    main: '#1A2b3C',
                    muted: '#64748B'
                },
                bg: {
                    light: '#FAFCFF'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Cormorant Garamond', 'serif']
            },
            animation: {
                'blob': 'blob 10s infinite alternate',
                'pulse-subtle': 'pulse-subtle 3s infinite',
                'float': 'float 6s ease-in-out infinite'
            },
            keyframes: {
                blob: {
                    '0%':   { transform: 'translate(0px, 0px) scale(1)' },
                    '33%':  { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%':  { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' }
                },
                'pulse-subtle': {
                    '0%, 100%': { opacity: 1, transform: 'scale(1)' },
                    '50%':      { opacity: .8, transform: 'scale(1.05)' }
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%':      { transform: 'translateY(-10px)' }
                }
            }
        }
    }
};
