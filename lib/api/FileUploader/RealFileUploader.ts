import FileUploader, { Uploaded } from './FileUploader'

export default class RealFileUploader implements FileUploader {
  public readonly uploadUrl: string

  public constructor(baseUrl: string) {
    this.uploadUrl = `${baseUrl}/file/upload`
  }

  public parseResponse(json: string): Uploaded {
    return JSON.parse(json) as Uploaded
  }
}
