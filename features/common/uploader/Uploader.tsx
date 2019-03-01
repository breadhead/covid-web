import { head } from 'lodash'
import { useCallback, useMemo, useRef, useState } from 'react'
import { useMappedState } from 'redux-react-hook'

import { getToken } from '@app/features/login'
import factory from '@app/lib/api/apiFactory'
import { displayFileName } from './displayFileName'
import * as styles from './Uploader.css'

interface Props {
  initialValue?: string
  onUploaded?: (url: string) => void
  id?: string
}

const Uploader = ({ id, onUploaded, initialValue }: Props) => {
  const token = useMappedState(getToken)
  const api = useMemo(() => factory(token), [token])

  const [path, setPath] = useState(initialValue)

  const fileInput = useRef<HTMLInputElement>(null)

  const onChange = useCallback(
    async () => {
      if (!fileInput.current) {
        return
      }

      const currentFile = head(fileInput.current.files)

      if (!currentFile) {
        return
      }

      const { path: newPath } = await api.uploadFile(currentFile)

      if (onUploaded && newPath) {
        setPath(newPath)
        onUploaded(newPath)
      }
    },
    [path, fileInput, api],
  )

  return (
    <>
      <label className={styles.fileLabel} htmlFor={id}>
        <input
          onChange={onChange}
          className={styles.fileInput}
          type="file"
          ref={fileInput}
          id={id}
        />
        {path ? 'Загрузить другой другой файл' : 'Загрузить файл'}
      </label>
      {path ? (
        <p>{displayFileName(path)}</p>
      ) : (
        <p>Нажмите кнопку выше, чтобы загрузить файл</p>
      )}
    </>
  )
}

export default Uploader
