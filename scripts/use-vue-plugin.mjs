import esbuild from 'esbuild'
import vue from 'esbuild-plugin-vue-next'

esbuild.build({
  entryPoints: [
    'plugins/plutin-use/index.ts',
  ],
  bundle: true,
  outdir: 'plugins/plutin-use/out',
  plugins: [
    vue()
  ]
})