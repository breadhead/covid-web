import { User } from '@app/models/Users/User';
import { Partner } from '@app/models/sanity/Partner';
import { Expert } from '@app/models/sanity/Expert';

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
  saveCoronaRequestForm(data: any): Promise<any>;
  updateCoronaRequestForm(data: any): Promise<any>;
  getPartners(): Promise<Partner[]>;
  getExperts(): Promise<Expert[]>;
}
