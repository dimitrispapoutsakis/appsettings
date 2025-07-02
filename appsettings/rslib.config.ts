import { defineConfig } from '@rslib/core';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  lib: [
    {
      format: 'esm',
      syntax: ['node 18'],
      dts: true,
    },
    {
      format: 'cjs',
      syntax: ['node 18'],
    },
    {
			format: 'mf',
			output: {
				distPath: {
					root: './dist/mf',
				},
				// for production, add online assetPrefix here
				assetPrefix: 'http://localhost:3001/mf',
			},
			// for Storybook to dev
			dev: {
				assetPrefix: 'http://localhost:3001/mf',
			},
			plugins: [
				pluginModuleFederation({
					name: 'appsettings',
					exposes: {
						'.': './src/index.ts'
					},
				}),
			],
		},
  ],
  server: {
    port: 3001,
  },
  output: {
    target: 'web',
  },
});
