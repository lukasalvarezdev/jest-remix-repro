/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default () => {
	return defineConfig({
		plugins: [react(), tsconfigPaths()],
		test: {
			watch: false,
			globals: true,
			environment: 'jsdom',
			setupFiles: ['./setup.ts'],
			include: ['src/**/vitest.test.tsx'],
		},
	})
}
