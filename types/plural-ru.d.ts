declare module 'plural-ru' {
  export default function pluralise(
    count: number,
    first: string,
    second: string,
    third: string = second,
  ): string;
}
