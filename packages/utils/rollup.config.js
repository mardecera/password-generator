import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

export default [
	{
		input: 'src/index.ts',
		output: [
			{ file: 'dist/index.js', format: 'esm', sourcemap: true },
			{
				file: 'dist/index.cjs',
				format: 'cjs',
				sourcemap: true,
				exports: 'named',
			},
		],
		plugins: [
			resolve(),
			commonjs(),
			typescript({ tsconfig: './tsconfig.json', declaration: false }),
		],
	},
	{
		input: 'src/index.ts',
		output: [{ file: 'dist/index.d.ts', format: 'es' }],
		plugins: [dts()],
	},
]
