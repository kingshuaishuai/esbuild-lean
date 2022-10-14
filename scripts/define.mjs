import esbuild from 'esbuild'

esbuild.build({
  entryPoints: [
    'demo/define/index.ts',
  ],
  bundle: true,
  outfile: 'demo/define/out.js',
  define: {
    DEBUG: 'false'
  }
})