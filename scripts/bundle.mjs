import esbuild from 'esbuild'

// esbuild.build({
//   entryPoints: [
//     'app.jsx'
//   ],
//   bundle: true,
//   outfile: 'out.js',
// })

esbuild.build({
  entryPoints: [
    'demo/join/index.ts',
  ],
  bundle: true,
  outfile: 'demo/join/out.js',
})