import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'main.js',
  treeshake: false,
  output: {
    file: 'es6polyfills.js',
    format: 'iife'
  },
  plugins: [
    resolve(),
    commonjs()
  ]
}
