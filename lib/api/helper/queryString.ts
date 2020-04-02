type QueryValue = Date | number | string | null | undefined;

interface Query {
  [key: string]: QueryValue;
}

type UrlValue = Date | number | string;

interface UrlParameter {
  [key: string]: UrlValue;
}

const urlValueToString = (value: UrlValue): string => {
  if (value instanceof Date) {
    return value.toISOString();
  }

  if (typeof value === 'number') {
    return value.toString();
  }

  return value;
};

export const queryString = (query: Query = {}) =>
  Object.entries(query)

    .filter(([_, value]) => value !== undefined && value !== null)
    .map(([key, value]) => ({ key, value }))
    .map((parameter) => parameter as UrlParameter)
    .map(({ key, value }) => ({ key, value: urlValueToString(value) }))
    .map(({ key, value }) => ({ key, value: encodeURIComponent(value) }))
    .map(({ key, value }) => `${key}=${value}`)
    .join('&');
