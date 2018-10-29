import * as nanoid from 'nanoid'
import * as React from 'react'
import FileUploadProgress from 'react-fileupload-progress'

import ApiClientFactory from '@app/lib/api/ApiClientFactory'

interface Props {
  onUploaded: (url: string) => void
}

interface State {
  key: string
}

class Uploading extends React.Component<Props, State> {

  public state = {
    key: nanoid(),
  } as State

  public render() {
    const { key } = this.state
    const url = ApiClientFactory.getApiClient().fileUploader.uploadUrl

    return (
      <React.Fragment>
        <FileUploadProgress
          key={key} url={url}
          beforeSend={this.prepareRequest}
          onLoad={this.handleResponse}
        />
      </React.Fragment>
    )
  }

  private prepareRequest = (xhr: XMLHttpRequest) => {
    xhr.setRequestHeader('Authorization', `Bearer ${ApiClientFactory.getApiClient().token}`)
    return xhr
  }

  private handleResponse = (response: ProgressEvent) => {
    const responseContent = (response!.currentTarget! as any).response

    const { path } = ApiClientFactory
      .getApiClient()
      .fileUploader
      .parseResponse(
        responseContent,
      )

    this.props.onUploaded(path)
  }
}

export default Uploading
