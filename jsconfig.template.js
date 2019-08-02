module.exports = {
  baseUrl: '.',
  include: ['src/**/*', 'tests/**/*'],
  compilerOptions: {
    baseUrl: '.',
    target: 'es6',
    module: 'es6',
    experimentalDecorators: true,
  },
  exclude: ["node_modules"]
}