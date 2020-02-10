import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { terser } from "rollup-plugin-terser";

export default  {
  input: './src/index.ts',
  output: [
    {
      strict: false,
      name: 'Input',
      file: `./dist/index.js`,
      format: 'umd',
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({ declaration: true }),
    terser(),
  ].filter(Boolean),
};
