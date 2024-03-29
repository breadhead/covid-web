import cx from 'classnames';
import { head } from 'lodash';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { useMappedState } from 'redux-react-hook';

import factory from '@app/src/lib/api/apiFactory';
import { getPreviewLink } from '@app/src/helpers/getPreviewLink';
import { Button, ButtonKind } from '@app/src/ui/button';
import { NavLink } from '@app/src/ui/nav-link';
import { getToken } from '@app/src/domain/reducers/userReducer';

import ProgressBar from './atoms/ProgressBar';
import { displayFileName } from './displayFileName';
import * as styles from './Uploader.css';

interface Props {
  initialValue?: string;
  onUploaded?: (url: string) => void;
  id?: string;
  remove?: () => void;
  children?: React.ReactNode;
  className?: string;
}

const Uploader = ({
  id,
  onUploaded,
  initialValue,
  remove,
  children,
  className,
}: Props) => {
  const token = useMappedState(getToken);
  const api = useMemo(() => factory(token), [token]);

  const [path, setPath] = useState(initialValue);
  const [uploading, setUploading] = useState(false);
  const [precentage, setPercentage] = useState(0);

  const fileInput = useRef<HTMLInputElement>(null);

  const onChange = useCallback(async () => {
    if (!fileInput.current) {
      return;
    }

    const currentFile = head(fileInput.current.files);

    if (!currentFile) {
      return;
    }

    try {
      setUploading(true);
      setPercentage(0);

      const { path: newPath } = await api.uploadFile(
        currentFile,
        setPercentage,
      );

      // push({ message: 'Файл загружен' })
      setPath(newPath);

      if (onUploaded) {
        onUploaded(newPath);
      }
    } catch (e) {
      /*push({
          message: 'Что-то пошло не так',
          description: 'Попробуйте, пожалуйста, позже',
        })*/
    } finally {
      setUploading(false);
    }
  }, [path, fileInput, api]);

  return (
    <div className={cx(styles.container, className)}>
      <div className={styles.row}>
        <label className={styles.fileLabel} htmlFor={id}>
          <input
            onChange={onChange}
            className={styles.fileInput}
            type="file"
            ref={fileInput}
            id={id}
          />
          {children}
          {path ? 'Изменить файл' : 'Загрузить файл'}
        </label>
        {path && remove && (
          <Button kind={ButtonKind.Extra} onClick={remove}>
            Удалить
          </Button>
        )}
      </div>
      {uploading && <ProgressBar percentage={precentage} />}
      {!!path && (
        <NavLink blank href={getPreviewLink(path)} className={styles.link}>
          {displayFileName(path)}
        </NavLink>
      )}
    </div>
  );
};

export default Uploader;
