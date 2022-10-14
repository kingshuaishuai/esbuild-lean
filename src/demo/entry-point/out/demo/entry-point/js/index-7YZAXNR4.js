(() => {
  // src/demo/entry-point/add.ts
  function add(a, b) {
    return a + b;
  }

  // src/demo/entry-point/multi.ts
  function multi(a, b) {
    return a * b;
  }

  // src/demo/entry-point/index.ts
  var result = multi(add(1, 2), 3);
  console.log(result);
})();
