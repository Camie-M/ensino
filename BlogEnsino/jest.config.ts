// jest.config.ts
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],  // Localiza os arquivos de teste
    moduleFileExtensions: ['ts', 'js'],  // Extensões de arquivos permitidos
    transform: {
        '^.+\\.ts$': 'ts-jest',  // Transforma arquivos TypeScript usando ts-jest
    },
    coverageDirectory: './coverage',  // Gera relatório de cobertura
    collectCoverageFrom: ['src/**/*.ts'],  // Limita a cobertura aos arquivos TypeScript na pasta src
};
