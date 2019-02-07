import { head } from 'lodash'
import * as React from 'react'

import Button, { ButtonType } from '@app/ui/atoms/Button'

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
}

class Uploader extends React.Component<Props, State> {
  public state = {
    path: null,
  } as State

  private fileInput: React.RefObject<HTMLInputElement> = React.createRef()

  public render() {
    const { id } = this.props
    const { path } = this.state

    return (
      <div className={styles.container}>
        <input type="file" ref={this.fileInput} id={id} />
        <Button onClick={this.onClick} type={ButtonType.Button}>
          Загрузить
        </Button>
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

    const { onUploaded, token } = this.props
    const apiClient = factory(token)
    const { path } = await apiClient.uploadFile(file)

    this.setState({ path }, () => onUploaded && onUploaded(path))
  }
}

const mapState = (state: any) => ({
  token: getToken(state),
})

export default connect(mapState)(Uploader)
