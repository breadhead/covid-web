import axios, { AxiosInstance } from 'axios';

import { FormRequestType } from '@app/src/domain/models/common/FormRequestType';
import { User } from '@app/src/domain/models/common/User';
import { getFromConfig } from '@app/src/helpers/getPublicRuntimeConfig';
import { ACTIVE_AND_NOT_DRAFT_SANITY } from '@app/src/helpers/activeAndNotDraftSanity';
import { tagsQuery } from '@app/src/domain/reducers/tagsReducer/config';

import ApiClient, { UploadedFile } from './ApiClient';
import { queryString } from './helper/queryString';
import { SendFeedbackRequest } from './request/SendFeedback';
import { sanityClient } from '../sanity-client';

export default class RealApiClient implements ApiClient {
  private readonly axiosInstance: AxiosInstance;
  private readonly apiProxyInstance: AxiosInstance;
  private _token = '';

  public constructor(baseUrl: string, token?: string) {
    const bearer = !!token && token.length > 1 ? `Bearer ${token}` : null;

    this.axiosInstance = axios.create({
      baseURL: baseUrl,
      headers: {
        Authorization: bearer,
      },
    });

    this.apiProxyInstance = axios.create({
      baseURL: getFromConfig('prodUrl') + '/api/query/',
    });
  }

  public get token() {
    return this._token;
  }

  public set token(newToken: string) {
    this._token = newToken;
  }

  public login = (login: string, password: string) =>
    this.axiosInstance
      .post('/auth/login', { login, password })
      .then((response) => response.data as User);

  public signUp = (login: string, password: string, confirm: string) =>
    this.axiosInstance
      .post('/auth/register', {
        email: login,
        password,
        confirm,
      })
      .then((response) => response.data as User);

  public currentUser = () =>
    this.axiosInstance
      .get('/users/current')
      .then((response) => response.data as User);

  public sendFeedback = (feedback: SendFeedbackRequest) =>
    this.axiosInstance
      .post('/feedback/send', feedback)
      .then((response) => response.data as SendFeedbackRequest);

  public uploadFile = async (
    file: File,
    onProgress?: (precent: number) => void,
  ) => {
    const form = new FormData();
    form.append('file', file);

    const response = await this.axiosInstance.post('/file/upload', form, {
      headers: { 'Content-Type': 'multipart/form-data' },
      onUploadProgress: ({ loaded, total }) =>
        onProgress && onProgress((loaded / total) * 100),
    });

    return response.data as UploadedFile;
  };

  public searchDoctor = (query: string) =>
    this.axiosInstance
      .get(`/base/doctors?${queryString({ query })}`)
      .then((res) => res.data as string[]);

  public searchClinic = (query: string) =>
    this.axiosInstance
      .get(`/base/hospitals?${queryString({ query })}`)
      .then((res) => res.data as string[]);

  public searchClinicByRegion = (region: string, name: string) => {
    return this.axiosInstance
      .get(
        `/base/hospitals-by-region?${queryString({
          region,
          name,
        })}`,
      )
      .then((res) => res.data as any[]);
  };

  public saveCoronaRequestForm = (data: any, type: FormRequestType) =>
    this.axiosInstance
      .post('/form/save', {
        type: type,
        fields: data,
      })
      .then((res) => res.data as any);

  public updateCoronaRequestForm = (data: any) =>
    this.axiosInstance
      .post('/form/update', data)
      .then((res) => res.data as any);

  public getPartners = () => {
    return this.apiProxyInstance
      .get(`*[_type == "partner" &&  ${ACTIVE_AND_NOT_DRAFT_SANITY}]`)
      .then((res) => res.data);
  };

  public getExperts = () => {
    return this.apiProxyInstance
      .get(`*[_type == "expert" &&  ${ACTIVE_AND_NOT_DRAFT_SANITY}]`)
      .then((res) => res.data);
  };

  public getExpertBoard = () => {
    return this.apiProxyInstance
      .get(`*[_type == "expertBoard" &&  ${ACTIVE_AND_NOT_DRAFT_SANITY}]`)
      .then((res) => res.data);
  };

  public getTags = () => {
    return this.apiProxyInstance.get(tagsQuery).then((res) => res.data);
  };
  public getNews = (query: string) => {
    return this.apiProxyInstance.get(query).then((res) => res.data);
  };
  public getNewsItem = (query: string) => {
    return this.apiProxyInstance.get(query).then((res) => res.data);
  };

  public getArticles = (query: string) => {
    return this.apiProxyInstance.get(query).then((res) => res.data);
  };
  public getArticlesItem = (query: string) => {
    return this.apiProxyInstance.get(query).then((res) => res.data);
  };

  public getResources = () => {
    return this.apiProxyInstance
      .get(`*[_type == "resource" &&  ${ACTIVE_AND_NOT_DRAFT_SANITY}]`)
      .then((res) => res.data);
  };
  public getHospitals = () => {
    return this.apiProxyInstance
      .get(
        `*[_type == "hospital" &&  ${ACTIVE_AND_NOT_DRAFT_SANITY}] | order(sortIndex desc)`,
      )
      .then((res) => res.data);
  };
}
