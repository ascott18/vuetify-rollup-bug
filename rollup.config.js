

import typescript from 'rollup-plugin-typescript2'
import vue from 'rollup-plugin-vue'
import vuetify from 'rollup-plugin-vuetify'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: "src/index.ts",
  plugins: [
    nodeResolve(),
    commonjs(),
    vue(),
    typescript(),
    vuetify(),
  ],
  external: [
    "vue", "vuetify/lib"
  ],
  output: [
    {
      sourcemap: true,
      file: 'dist/index.esm.js',
      format: "esm"
    }
  ]
};
