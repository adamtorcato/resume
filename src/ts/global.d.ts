/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="@emotion/react/types/css-prop" />
/// <reference types="react" />
/// <reference types="node" />
/// <reference types="next" />

declare module 'dompurify'

declare module '*.svg' {
  const content: string
  export default content
}

declare module '*.jpg' {
  const content: any
  export default content
}

declare module '*.jpeg' {
  const content: any
  export default content
}
declare module '*.png' {
  const content: any
  export default content
}

interface Window {
  __user: any
}
