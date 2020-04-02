export default class UnknownModalException extends Error {
  public readonly key: string;

  public constructor(key: string, message?: string) {
    super(message);

    this.key = key;
  }
}
