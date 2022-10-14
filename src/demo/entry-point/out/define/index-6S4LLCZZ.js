(() => {
  // src/define/index.ts
  function add(a, b) {
    if (DEBUG) {
      console.log("hello world");
    }
    return a + b;
  }
})();
