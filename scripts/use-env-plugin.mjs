import esbuild from 'esbuild'
import { envPlugin } from '../plugins/env-plugin/env-plugin.mjs'

esbuild.build({
  entryPoints: [
    'plugins/env-plugin/index.ts',
  ],
  bundle: true,
  outdir: 'plugins/env-plugin/out',
  plugins: [
    envPlugin
  ]
})