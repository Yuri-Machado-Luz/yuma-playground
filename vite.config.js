import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	base: './',

	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				'css3-tooling': resolve(
					__dirname,
					'projects/web/css3-tooling/index.html',
				),
			},
		},
	},
})
