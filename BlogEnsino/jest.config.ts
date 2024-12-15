module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],  
    moduleFileExtensions: ['ts', 'js'], 
    transform: {
        '^.+\\.ts$': 'ts-jest', 
    },
    coverageDirectory: 'coverage', 
    collectCoverageFrom: [
        "src/**/*.ts",
        "!src/**/*.d.ts"
    ],
};
