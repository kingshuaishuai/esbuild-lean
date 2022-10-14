import esbuild from 'esbuild'

// esbuild.build({
//   entryPoints: [
//     'demo/entry-point/index.ts',
//     'demo/entry-point/index1.ts',
//   ],
//   entryNames: '[dir]/[name]-[hash]',
//   bundle: true,
//   outdir: 'demo/entry-point/out',
// })

// esbuild.build({
//   entryPoints: [
//     'demo/entry-point/index.ts',
//     'demo/define/index.ts',
//   ],
//   entryNames: '[dir]/[name]-[hash]',
//   bundle: true,
//   outbase: 'demo',
//   outdir: 'demo/entry-point/out',
// })

esbuild.build({
  entryPoints: [
    'src/demo/entry-point/index.ts',
    'src/define/index.ts',
  ],
  entryNames: '[dir]/[ext]/[name]-[hash]',
  bundle: true,
  outdir: 'src/demo/entry-point/out',
})