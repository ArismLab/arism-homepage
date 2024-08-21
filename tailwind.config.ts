import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontFamily: {
            sans: ['Outfit', 'sans-serif'],
            display: ['Bruno Ace', 'sans-serif'],
            decorative: ['Saira Extra Condensed', 'sans-serif'],
        },
        extend: {
            colors: {
                dark: {
                    background: '#0D1216',
                },
                primary: {
                    50: 'var(--primary-50)',
                    100: 'var(--primary-100)',
                    200: 'var(--primary-200)',
                    300: 'var(--primary-300)',
                    400: 'var(--primary-400)',
                    500: 'var(--primary-500)',
                    600: 'var(--primary-600)',
                    700: 'var(--primary-700)',
                    800: 'var(--primary-800)',
                    900: 'var(--primary-900)',
                    950: 'var(--primary-950)',
                },
                secondary: {
                    50: 'var(--tertiary-50)',
                    100: 'var(--tertiary-100)',
                    200: 'var(--tertiary-200)',
                    300: 'var(--tertiary-300)',
                    400: 'var(--tertiary-400)',
                    500: 'var(--tertiary-500)',
                    600: 'var(--tertiary-600)',
                    700: 'var(--tertiary-700)',
                    800: 'var(--tertiary-800)',
                    900: 'var(--tertiary-900)',
                    950: 'var(--tertiary-950)',
                },
                tertiary: {
                    50: 'var(--secondary-50)',
                    100: 'var(--secondary-100)',
                    200: 'var(--secondary-200)',
                    300: 'var(--secondary-300)',
                    400: 'var(--secondary-400)',
                    500: 'var(--secondary-500)',
                    600: 'var(--secondary-600)',
                    700: 'var(--secondary-700)',
                    800: 'var(--secondary-800)',
                    900: 'var(--secondary-900)',
                    950: 'var(--secondary-950)',
                },
            },
            animation: {
                marquee: 'marquee var(--duration) linear infinite',
                'marquee-vertical':
                    'marquee-vertical var(--duration) linear infinite',
                'border-beam':
                    'border-beam calc(var(--duration)*1s) infinite linear',
                spotlight: 'spotlight 2s ease .75s 1 forwards',
            },
            keyframes: {
                marquee: {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(calc(-100% - var(--gap)))' },
                },
                'marquee-vertical': {
                    from: { transform: 'translateY(0)' },
                    to: { transform: 'translateY(calc(-100% - var(--gap)))' },
                },
                'border-beam': {
                    '100%': {
                        'offset-distance': '100%',
                    },
                },
                spotlight: {
                    '0%': {
                        opacity: '0',
                        transform: 'translate(-72%, -62%) scale(0.5)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translate(-50%,-40%) scale(1)',
                    },
                },
            },
        },
    },
    plugins: [],
}
export default config
