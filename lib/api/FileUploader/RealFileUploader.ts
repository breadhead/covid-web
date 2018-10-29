import FileUploader, { Uploaded } from './FileUploader'

export default class RealFileUploader implements FileUploader {
  public uploadUrl: string = `${this.baseUrl}/file/upload`

  public constructor(private readonly baseUrl: string) { }

  public parseResponse(json: string): Uploaded {
    return JSON.parse(json) as Uploaded
  }
}
