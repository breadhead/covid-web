import * as React from 'react'
import * as styles from '../../ClaimForm.css'

import Uploader from '@app/features/common/uploader'
import { NON_BREAKING_SPACE } from '@app/lib/config'
import Button, { ButtonKind } from '@app/ui/atoms/Button'
import Input from '@app/ui/atoms/Input'

const Survey = () => (
  <article className={styles.article}>
    <h2 className={styles.title}>Обследования</h2>

    <p className={styles.text}>
      Предоставьте имеющиеся у вас актуальные исследования. Для этого вам нужно
      выложить файлы с исследованиями на{NON_BREAKING_SPACE}сервисы типа
      Яндекс.Диск, Google Диск или Dropbox, открыть доступы к файлам и указать
      ссылки на них.
    </p>
    <h3 className={styles.subtitle}>Актуальные анализы крови</h3>
    <p className={styles.sectondaryText}>
      Не более чем 10-дневной давности, скан или фото, если есть
    </p>
    <label htmlFor="blood" className={styles.labelSmall}>
      Ссылка на файл
    </label>
    <Uploader id="blood" />

    <h3 className={styles.subtitle}>КТ или МРТ исследования</h3>
    <p className={styles.sectondaryText}>
      Прикрепите архивом папку DICOM с компакт-диска с исследованием. Если
      исследований было несколько, то пришлите крайнее.
    </p>
    <label htmlFor="blood-file" className={styles.labelSmall}>
      Ссылка на файл
    </label>
    <Uploader id="blood-file" />
    <h3 className={styles.subtitle}>Дополнительный файл</h3>
    <label htmlFor="study" className={styles.labelSmall}>
      Название исследования
    </label>
    <Input name="study" />
    <label htmlFor="study-file" className={styles.label}>
      Ссылка на файл
    </label>
    <Uploader id="study-file" />
    <Button className={styles.historyButton} kind={ButtonKind.Extra}>
      Добавить другие файлы
    </Button>
  </article>
)

export default Survey
