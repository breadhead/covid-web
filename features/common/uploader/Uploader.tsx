import { head } from 'lodash'
import * as React from 'react'

import ApiClientFactory from '@app/lib/api/ApiClientFactory'

import * as styles from './Uploader.css'

interface Props {
  onUploaded?: (url: string) => void
}

interface State {
  path: string | null
}

const apiClient = ApiClientFactory.getApiClient()

class Uploader extends React.Component<Props, State> {
  public state = {
    path: null,
  } as State

  private fileInput: React.RefObject<HTMLInputElement> = React.createRef()

  public render() {
    const { path } = this.state

    return (
      <div className={styles.container}>
        <input type="file" ref={this.fileInput} />
        <button onClick={this.onClick}>Загрузить</button>
        {path && <p>{path}</p>}
      </div>
    )
  }

  private onClick = async () => {
    if (!this.fileInput.current) {
      return
    }

    const file = head(this.fileInput.current.files)

    if (!file) {
      return
    }

    const { onUploaded } = this.props
    const { path } = await apiClient.uploadFile(file)

    this.setState({ path }, () => onUploaded && onUploaded(path))
  }
}

export default Uploader
