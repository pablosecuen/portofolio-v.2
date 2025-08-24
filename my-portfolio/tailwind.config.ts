import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: {
					DEFAULT: 'hsl(var(--background))',
					secondary: 'hsl(var(--background-secondary))',
					tertiary: 'hsl(var(--background-tertiary))'
				},
				foreground: {
					DEFAULT: 'hsl(var(--foreground))',
					muted: 'hsl(var(--foreground-muted))'
				},
				glass: {
					primary: 'hsl(var(--glass-primary))',
					secondary: 'hsl(var(--glass-secondary))',
					border: 'hsl(var(--glass-border))'
				},
				violet: {
					primary: 'hsl(var(--violet-primary))',
					secondary: 'hsl(var(--violet-secondary))',
					muted: 'hsl(var(--violet-muted))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
					glass: 'hsl(var(--card-glass))'
				}
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-glass': 'var(--gradient-glass)',
				'gradient-hero': 'var(--gradient-hero)'
			},
			boxShadow: {
				'glass': 'var(--shadow-glass)',
				'violet': 'var(--shadow-violet)',
				'dark': 'var(--shadow-dark)'
			},
			backdropBlur: {
				'glass': '20px'
			},
			borderRadius: {
				lg: 'var(--radius-lg)',
				md: 'var(--radius)',
				sm: 'calc(var(--radius) - 4px)',
				xl: 'var(--radius-xl)'
			},
			keyframes: {
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'float-delayed': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-8px)' }
				},
				'fade-in-up': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-left': {
					'0%': { 
						opacity: '0',
						transform: 'translateX(-30px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'fade-in-right': {
					'0%': { 
						opacity: '0',
						transform: 'translateX(30px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'scale-in': {
					'0%': { 
						opacity: '0',
						transform: 'scale(0.9)'
					},
					'100%': { 
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'pulse-violet': {
					'0%, 100%': { 
						boxShadow: '0 0 0 0 hsl(262 83% 58% / 0.4)'
					},
					'50%': { 
						boxShadow: '0 0 0 8px hsl(262 83% 58% / 0)'
					}
				}
			},
			animation: {
				'float': 'float 6s ease-in-out infinite',
				'float-delayed': 'float-delayed 6s ease-in-out infinite 2s',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'fade-in-left': 'fade-in-left 0.6s ease-out',
				'fade-in-right': 'fade-in-right 0.6s ease-out',
				'scale-in': 'scale-in 0.4s ease-out',
				'pulse-violet': 'pulse-violet 2s infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
