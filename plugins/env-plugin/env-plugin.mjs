export const envPlugin = {
  name: 'env',
  setup(build) {
    // 拦截"env"导入路径，esbuild就不会尝试将其与文件系统中的路径进行映射了
    // 然后通过namespace将其标记为"env-ns"，
    build.onResolve({ filter: /^env$/ }, args => ({
      path: args.path,
      namespace: 'env-ns',
    }))

    // 用“env-ns”命名空间标记的加载路径，其行为就好像它们指向一个包含环境变量的JSON文件。
    build.onLoad({ filter: /.*/, namespace: 'env-ns' }, () => ({
      contents: JSON.stringify(process.env),
      loader: 'json',
    }))
  },
}
