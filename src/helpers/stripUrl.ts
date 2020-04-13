import Url from 'url-parse';

export const stripUrl = (url: string) => {
  return new Url(url).hostname.replace(/^www./gi, '');
};
