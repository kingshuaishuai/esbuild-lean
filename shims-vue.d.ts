declare module '*.vue' {
  import { Component } from 'vue'
  
  const instance:Component
  
  export default instance
}

declare module 'env' {
  const PATH: string;
  export {
    PATH
  }
}

