declare module 'nanomerge' {
  export default function merge<T extends object, U extends object>(
    first: T,
    second: U,
  ): T & U;
}
