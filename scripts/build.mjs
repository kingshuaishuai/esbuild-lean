import esbuild from 'esbuild'


// esbuild.build({
//   entryPoints: [
//     'app.jsx'
//   ],
//   bundle: true,
//   outfile: 'out.js',
//   minify: true,
//   sourcemap: true,
//   target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
// }).catch(err => {
//   process.exit(1)
// })

esbuild.build({
  entryPoints: [
    'app.jsx'
  ],
  bundle: true,
  outfile: 'out.js',
  // minify: true,
  sourcemap: true,
  platform: 'node',
  target: ['node10.4'],
  external: ['./node_modules/*'],
}).catch(err => {
  process.exit(1)
})