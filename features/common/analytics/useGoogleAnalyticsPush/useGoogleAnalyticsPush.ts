import EventPusher from './EventPusher';

export const useGoogleAnalyticsPush = (sourceName: string) => {
  const gtmPush = new EventPusher(sourceName);

  return gtmPush;
};
