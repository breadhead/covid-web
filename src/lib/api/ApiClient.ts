import { Partner } from '@app/src/domain/models/common/Partner';
import { Expert } from '@app/src/domain/models/common/Expert';
import { FormRequestType } from '@app/src/domain/models/common/FormRequestType';
import { User } from '@app/src/domain/models/common/User';
import { Tag } from '@app/src/domain/models/common/Tag';

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
  getTags(): Promise<Tag[]>;
}
