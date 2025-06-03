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
			fontFamily: {
				aquire: ['Aquire', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				glitch: {
				  '0%': { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' },
				  '2%': { clipPath: 'polygon(0 10%, 100% 0%, 100% 100%, 0% 90%)' },
				  '4%': { clipPath: 'polygon(0 20%, 100% 10%, 100% 90%, 0% 80%)' },
				  '6%': { clipPath: 'polygon(0 30%, 100% 20%, 100% 80%, 0% 70%)' },
				  '8%': { clipPath: 'polygon(0 40%, 100% 30%, 100% 70%, 0% 60%)' },
				  '10%': { clipPath: 'polygon(0 50%, 100% 40%, 100% 60%, 0% 50%)' },
				  '12%': { clipPath: 'polygon(0 60%, 100% 50%, 100% 50%, 0% 40%)' },
				  '14%': { clipPath: 'polygon(0 70%, 100% 60%, 100% 40%, 0% 30%)' },
				  '16%': { clipPath: 'polygon(0 80%, 100% 70%, 100% 30%, 0% 20%)' },
				  '18%': { clipPath: 'polygon(0 90%, 100% 80%, 100% 20%, 0% 10%)' },
				  '20%': { clipPath: 'polygon(0 100%, 100% 90%, 100% 10%, 0% 0%)' },
				  '21%': { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' },
				  '100%': { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;