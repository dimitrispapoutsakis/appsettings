import { defineConfig } from '@rsbuild/core';
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  plugins: [
    pluginModuleFederation({
      name: 'demo',
      remotes: {
        appsettings: 'appsettings@http://localhost:3001/mf/mf-manifest.json',
      },
    })
  ],
});
