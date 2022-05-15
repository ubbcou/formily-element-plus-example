import resolve from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import typescript from 'rollup-plugin-typescript2'
import path from 'path'
import alias from '@rollup/plugin-alias'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'lib/index.ts',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      globals: {
        vue: 'Vue',
        '@formily/vue': 'Formily.Vue',
        '@formily/core': 'Formily.Core',
        'element-plus': 'ElementPlus',
      },
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      globals: {
        vue: 'Vue',
        '@formily/vue': 'Formily.Vue',
        '@formily/core': 'Formily.Core',
        'element-plus': 'ElementPlus',
      },
    },
    {
      file: 'dist/index.iife.js',
      format: 'iife',
      name: 'UiLib',
      globals: {
        vue: 'Vue',
        '@formily/vue': 'Formily.Vue',
        '@formily/core': 'Formily.Core',
        'element-plus': 'ElementPlus',
      },
    },
  ],
  external: ['vue', '@formily/vue', '@formily/core', 'element-plus'],
  plugins: [
    alias({
      entries: [
        // { find: 'vue-demi', replacement: path.resolve(__dirname, './node_modules/vue-demi/lib/v3/index.mjs') },
      ],
    }),
    typescript({
      clean: true,
      check: false, // FIXED: https://github.com/ezolenko/rollup-plugin-typescript2/issues/234
      tsconfig: './tsconfig.json',
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
          rootDir: path.resolve(__dirname),
        },
        include: [
          path.resolve(__dirname),
        ],
      },
    }),
    resolve(),
    commonjs(),
    postcss({
      extract: false,
      modules: false,
      use: ['sass'],
    }),
  ],
}
