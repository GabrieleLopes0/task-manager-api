module.exports = {
    testEnvironment: 'node',
    collectCoverage: true,
    coverageDirectory: 'coverage', 
    coverageThreshold: {
      global: {
        statements: 80, // Cobertura mínima de 80% do código
        branches: 80,
        functions: 80,
        lines: 80,
      },
    },
  };
  