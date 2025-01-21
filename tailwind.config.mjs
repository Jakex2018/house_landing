/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
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
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			}
		},
		animation: {
			"fade-in": "fade-in 400ms ease-in-out",
			"fade-out": "fade-out 400ms ease-in-out",
			"slide-left": "slide-left 400ms ease-in-out",
			"slide-right": "slide-right 400ms ease-in-out",
			"slide-top": "slide-top 400ms ease-in-out",
			"slide-out": "slide-out 400ms ease-in-out",
		},
		keyframes: {
			"fade-in": {
				"0%": { opacity: 0 },
				"100%": { opacity: 1 }
			},
			"fade-out": {
				"0%": { opacity: 1 },
				"100%": { opacity: 0 }
			},
			"slide-left": {
				"0%": { transform: "translateX(100%)" },
				"100%": { transform: "translateX(0%)" }
			},
			"slide-right": {
				"0%": { transform: "translateX(-100%)" },
				"100%": { transform: "translateX(0%)" }
			},
			"slide-top": {
				"0%": { transform: "translateY(-100%)" },
				"100%": { transform: "translateY(0%)" }
			}
		},
	},
	plugins: [require("tailwindcss-animate")],
}
