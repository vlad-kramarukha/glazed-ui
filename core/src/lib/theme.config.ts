import { ref, Ref } from 'vue'
import { ThemeConfig, Scheme } from './interfaces/theme-config.interface';

export const themeConfig: Ref<ThemeConfig> = ref({
	mode: 'light',
	scheme: {
		light: {
			fill: '#fff',
			base: 'hsl(225, 50%, 45%)',
			success: 'hsl(120, 35%, 30%)',
			warn: 'hsl(20, 55%, 40%)',
			error: 'hsl(0, 55%, 45%)',
			text: '#151515'
		},

		dark: {
			fill: '#151515',
			base: 'hsl(225, 80%, 70%)',
			success: 'hsl(120, 45%, 55%)',
			warn: 'hsl(20, 80%, 65%)',
			error: 'hsl(0, 80%, 70%)',
			text: '#fff'
		}
	}
})

export function setConfig(config: ThemeConfig) {
	themeConfig.value = config
}

export function setScheme(scheme: Scheme) {
	themeConfig.value.scheme = scheme
}

export function changeMode(mode: string) {
	themeConfig.value.mode = mode
}

export function getMode() {
	return themeConfig.value.mode
}