export interface Uploaded {
  path: string
}

export default interface FileUploader {
  uploadUrl: string
  parseResponse(json: string): Uploaded
}
