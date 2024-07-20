import { createDefaultPreset, type JestConfigWithTsJest } from 'ts-jest'

const config: JestConfigWithTsJest = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).tsx'],
	transform: {
		...createDefaultPreset().transform,
	},
	// transform: {
	// 	'^.+\\.(t|j)sx?$': [
	// 		'@swc/jest',
	// 		{
	// 			jsc: {
	// 				transform: {
	// 					react: {
	// 						runtime: 'automatic',
	// 					},
	// 				},
	// 			},
	// 		},
	// 	],
	// },
	transformIgnorePatterns: ['node_modules/(?!variables/.*)'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		'^@web3-storage/multipart-parser$': require.resolve('@web3-storage/multipart-parser'),
	},
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts'],
	coverageDirectory: 'coverage',
	coverageReporters: ['json', 'lcov', 'text', 'clover'],
	setupFilesAfterEnv: ['<rootDir>/setup.ts'],
}

export default config
