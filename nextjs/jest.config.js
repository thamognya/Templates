// jest.config.js
// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const nextJest = require('next/jest')

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: './'
})

// Add any custom config to be passed to Jest
const customJestConfig = {
	// Add more setup options before each test is run
	// setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	// if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
	moduleDirectories: ['node_modules', '<rootDir>/'],
	testEnvironment: 'jest-environment-jsdom',
	verbose: true,
	testMatch: ['**/*.test.js', '**/*.test.ts', '**/*.test.tsx'],
	setupFilesAfterEnv: ['<rootDir>/jest-setup-after-env.ts'],
	verbose: true,
	rootDir: 'test',
	modulePaths: ['<rootDir>/lib'],
	transformIgnorePatterns: ['/next[/\\\\]dist/', '/\\.next/'],
	globals: {
		AbortSignal: global.AbortSignal
	},
	moduleNameMapper: {
		'@next/font/(.*)': '@next/font/$1'
	}
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
