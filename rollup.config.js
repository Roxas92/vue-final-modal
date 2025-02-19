import VuePlugin from 'rollup-plugin-vue'
import babel from '@rollup/plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonJS from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import cleanup from 'rollup-plugin-cleanup'
import sizes from '@atomico/rollup-plugin-sizes'

const pkg = require('./package.json')

const plugins = [
  resolve(),
  commonJS(),
  VuePlugin({
    normalizer: '~vue-runtime-helpers/dist/normalize-component.js',
    styleInjector: '~vue-runtime-helpers/dist/inject-style/browser.js'
  }),
  babel({
    babelHelpers: 'bundled',
    extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue']
  }),
  cleanup(),
  terser(),
  sizes()
]

export default {
  input: 'lib/index.js',
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: 'VueFinalModal',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins
}
