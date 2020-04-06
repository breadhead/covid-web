import { Partner } from '@app/src/domain/models/common/Partner';
import { Expert } from '@app/src/domain/models/common/Expert';
import { FormRequestType } from '@app/src/domain/models/common/FormRequestType';
import { User } from '@app/src/domain/models/common/User';
import { TagType } from '@app/src/domain/models/common/Tag';
import { NewsItem } from '@app/src/domain/models/common/NewsItem';

export interface UploadedFile {
  path: string;
}

export default interface ApiClient {
  token: string;
  login(login: string, password: string): Promise<User>;
  signUp(login: string, password: string, confirm: string): Promise<User>;
  currentUser(): Promise<User>;
  sendFeedback(feedbackFields: any): Promise<any>;
  uploadFile(
    file: File,
    onProgress?: (precent: number) => void,
  ): Promise<UploadedFile>;
  searchDoctor(query: string): Promise<string[]>;
  searchClinic(query: string): Promise<string[]>;
  searchClinicByRegion(region: string, name: string): Promise<string[]>;
  saveCoronaRequestForm(data: any, type: FormRequestType): Promise<any>;
  updateCoronaRequestForm(data: any): Promise<any>;
  getPartners(): Promise<Partner[]>;
  getExperts(): Promise<Expert[]>;
  getExpertBoard(): Promise<Expert[]>;
  getTags(): Promise<TagType[]>;
  getNews(query: string): Promise<NewsItem[]>;
  getNewsItem(query: string): Promise<NewsItem[]>;
}
