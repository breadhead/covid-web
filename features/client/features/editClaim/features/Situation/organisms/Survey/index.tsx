import * as React from 'react'

import cx from 'classnames'

import { Input } from '@app/features/common/form'
import { RemoveSection } from '@app/features/common/form'
import { NON_BREAKING_SPACE, StylesType } from '@app/lib/config'
import AddFieldContainer from '@app/ui/organisms/AddFieldContainer'
import { ClaimData, SituationClaimFields } from '../../types'

interface Props {
  styles: StylesType
  claimData: ClaimData
  initial: Partial<SituationClaimFields>
  removeSectionFromState: RemoveSection
}

const Survey = ({
  styles,
  claimData,
  initial,
  removeSectionFromState,
}: Props) => (
  <article className={cx(styles.article, styles.articleSurvey)}>
    <h2 className={styles.title}>Обследования</h2>

    <p className={styles.text}>
      Предоставьте имеющиеся у вас актуальные исследования. Для этого вам нужно
      выложить файлы с исследованиями на{NON_BREAKING_SPACE}сервисы типа
      Яндекс.Диск, Google Диск или Dropbox, открыть доступы к файлам и указать
      ссылки на них.
    </p>
    {!!claimData.localization && (
      <>
        <h3 className={styles.subtitle}>Гистология</h3>
        <p className={styles.secondaryText}>
          Последняя по дате. Укажите ссылку на скан или фотографию
        </p>
        <label htmlFor="histology.url" className={styles.labelSmall}>
          Ссылка на файл
        </label>
        <Input placeholder="https://" name="histology.url" />
      </>
    )}

    <h3 className={styles.subtitle}>Заключения и выписки</h3>
    <p className={styles.secondaryText}>
      Последние по дате. Укажите ссылку на сканы или фотографии
    </p>
    <label htmlFor="discharge.url" className={styles.labelSmall}>
      Ссылка на файл
    </label>
    <Input placeholder="https://" name="discharge.url" />
    <AddFieldContainer
      initialCount={initial.otherFiles!.length}
      buttonClassName={styles.addButton}
      buttonText="Добавить другие файлы"
    >
      {(count, removeSection) =>
        count.map(key => (
          <React.Fragment key={key}>
            <h3 className={styles.subtitle}>Дополнительный файл</h3>
            <button
              type="button"
              onClick={() =>
                removeSection(removeSectionFromState(key, 'otherFiles'))
              }
            >
              удалить
            </button>
            <label
              htmlFor={`otherFiles.${key}.title`}
              className={styles.labelSmall}
            >
              Название исследования
            </label>
            <Input name={`otherFiles.${key}.title`} />
            <label htmlFor={`otherFiles.${key}.url`} className={styles.label}>
              Ссылка на файл
            </label>
            <Input placeholder="https://" name={`otherFiles.${key}.url`} />
          </React.Fragment>
        ))
      }
    </AddFieldContainer>
  </article>
)

export default Survey
