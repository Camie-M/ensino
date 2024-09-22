module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testPathIgnorePatterns: ['/node_modules/', '/dist/'], // Ignora essas pastas nos testes
    coverageDirectory: 'coverage', // Diretório para armazenar a cobertura dos testes
    collectCoverage: true, // Habilita a coleta de cobertura
};
