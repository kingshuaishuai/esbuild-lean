import esbuild from 'esbuild'

esbuild.build({
  entryPoints: [
    'demo/entry-point/index.ts',
    'demo/entry-point/index1.ts',
  ],
  bundle: true,
  outfile: 'demo/entry-point/out.js',
})