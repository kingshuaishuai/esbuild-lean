declare const DEBUG:boolean;

export function add(a: number, b: number) {
  if (DEBUG) {
    console.log('hello world')
  }
  return a + b;
}
