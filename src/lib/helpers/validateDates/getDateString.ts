import { DateInterface } from './types';

const getDateString = ({ year, month, day = 1 }: DateInterface) =>
  `${year}-${month}-${day}`;

export { getDateString };
