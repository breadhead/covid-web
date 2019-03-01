import { head } from 'lodash'
import { useCallback, useMemo, useRef, useState } from 'react'
import { useMappedState } from 'redux-react-hook'

import { push } from '@app/features/admin/features/toast'
import { getToken } from '@app/features/login'
import factory from '@app/lib/api/apiFactory'
import ExternalLink from '@app/ui/molecules/ExternalLink'
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

      try {
        const { path: newPath } = await api.uploadFile(currentFile)

        if (onUploaded && newPath) {
          setPath(newPath)
          onUploaded(newPath)
        }
      } catch (e) {
        push({
          message: 'Что-то пошло не так',
          description: 'Попробуйте, пожалуйста, позже',
        })
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
        {path ? 'Загрузить другой файл' : 'Загрузить файл'}
      </label>
      {!!path && (
        <ExternalLink href={path} className={styles.link}>
          Открыть файл
        </ExternalLink>
      )}
    </>
  )
}

export default Uploader
