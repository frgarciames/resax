import generatePackageJson from 'rollup-plugin-generate-package-json'
import pkg from './package.json'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    // resolve({ extensions, preferBuiltins: false }),
    // commonjs({
    //   include: /node_modules/,
    // }),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: '',
      target: 'esnext',
      jsx: 'react',
    }),

    generatePackageJson({
      baseContents: (pkg) => ({
        name: pkg.name,
        version: pkg.version,
        main: pkg.main.replace('dist/', ''),
        scripts: pkg.scripts,
        dependencies: pkg.dependencies,
        peerDependencies: pkg.peerDependencies,
        devDependencies: pkg.devDependencies,
      }),
    }),
  ],
}
