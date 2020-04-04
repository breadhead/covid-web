import { ErrorCode } from './erorCodes';

export type Validator = (dates: number[]) => ErrorCode | undefined;
type DateType = number | string;
export interface DateInterface {
  year: DateType;
  month: DateType;
  day?: DateType;
}
