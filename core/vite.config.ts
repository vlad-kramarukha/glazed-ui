import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
	plugins: [vue()],
	build: {
		assetsDir: 'demo',
		lib: {
			entry: path.resolve(__dirname, 'src/lib/main.ts'),
			name: 'glazed-ui',
			fileName: (format) => `glazed-ui.${format}.js`
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				globals: {
					vue: 'Vue'
				}
			}
		}
	}
})
