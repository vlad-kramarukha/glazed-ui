import { ThemeConfig } from './interfaces/theme-config.interface'

export const defaultThemeConfig: ThemeConfig = {
	scheme: {
		light: {
			base: 'hsl(220, 50%, 45%)',
			success: 'hsl(120, 35%, 30%)',
			warn: 'hsl(20, 55%, 40%)',
			error: 'hsl(0, 55%, 45%)',
			text: 'hsl(0, 0%, 8%)'
		},

		dark: {
			base: 'hsl(225, 80%, 70%)',
			success: 'hsl(120, 45%, 55%)',
			warn: 'hsl(20, 80%, 65%)',
			error: 'hsl(0, 80%, 70%)',
			text: 'hsl(0, 0%, 100%)'
		}
	}
}
