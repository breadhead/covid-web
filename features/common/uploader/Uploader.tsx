import { head } from 'lodash'
import * as React from 'react'

import { getToken } from '@app/features/login'
import factory from '@app/lib/api/apiFactory'
import { connect } from 'react-redux'
import * as styles from './Uploader.css'

interface Props {
  onUploaded?: (url: string) => void
  id?: string
  token: string
}

interface State {
  path: string | null
  currentFiles: any
  file: any
}

class Uploader extends React.Component<Props, State> {
  public state = {
    path: null,
    currentFiles: [],
    file: '',
  } as State

  private fileInput: React.RefObject<HTMLInputElement> = React.createRef()

  public render() {
    const { id } = this.props
    const { path } = this.state

    return (
      <>
        <label className={styles.fileLabel} htmlFor={id}>
          <input
            onChange={this.onChange}
            className={styles.fileInput}
            type="file"
            ref={this.fileInput}
            id={id}
          />
          Загрузить
        </label>
        {path && <p>{path}</p>}
      </>
    )
  }

  private onChange = async () => {
    if (!this.fileInput.current) {
      return
    }

    const file = head(this.fileInput.current.files)

    if (!file) {
      return
    }

    const { onUploaded, token } = this.props
    const apiClient = factory(token)
    const { path } = await apiClient.uploadFile(file)

    this.setState({ currentFiles: this.fileInput.current.files, file })
    this.setState({ path }, () => onUploaded && onUploaded(path))
  }
}

const mapState = (state: any) => ({
  token: getToken(state),
})

export default connect(mapState)(Uploader)
