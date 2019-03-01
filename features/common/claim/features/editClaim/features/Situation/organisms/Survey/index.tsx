import * as React from 'react'

import cx from 'classnames'

import { Input } from '@app/features/common/form'
import { RemoveSection } from '@app/features/common/form'
import { FormFileInput } from '@app/features/common/uploader'
import { StylesType } from '@app/lib/config'
import AddFieldContainer, {
  SectionDivider,
  SectionHeader,
} from '@app/ui/organisms/AddFieldContainer'
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
    {!!claimData.localization && (
      <>
        <h3 className={styles.subtitle}>Гистология</h3>
        <p className={styles.secondaryText}>
          Последняя по дате. Прикрепите скан или фотографию
        </p>
        <FormFileInput name="histologyFile" />
      </>
    )}

    <h3 className={styles.subtitle}>Заключения и выписки</h3>
    <p className={styles.secondaryText}>
      Последние по дате. Прикрепите сканы или фотографии
    </p>
    <AddFieldContainer
      buttonClassName={styles.addButton}
      buttonText="Добавить другие заключения и выписки"
    >
      {(count, removeSection) =>
        count.map(key => (
          <React.Fragment key={key}>
            <SectionHeader
              index={key}
              onRemoveClick={() =>
                removeSection(removeSectionFromState(key, 'otherFiles'))
              }
            />
            <FormFileInput name={`dischargeFile${key}`} />
            <SectionDivider />
          </React.Fragment>
        ))
      }
    </AddFieldContainer>
    <AddFieldContainer
      initialCount={initial.otherFiles!.length}
      buttonClassName={styles.addButton}
      buttonText="Добавить другие файлы"
    >
      {(count, removeSection) =>
        count.map(key => (
          <React.Fragment key={key}>
            <SectionHeader
              index={key}
              onRemoveClick={() =>
                removeSection(removeSectionFromState(key, 'otherFiles'))
              }
            />
            <h3 className={styles.subtitle}>Дополнительный файл</h3>
            <label
              htmlFor={`otherFiles.${key}.title`}
              className={styles.labelSmall}
            >
              Название исследования
            </label>
            <Input name={`otherFiles.${key}.title`} />
            <FormFileInput name={`otherFile${key}mm`} />
            <SectionDivider />
          </React.Fragment>
        ))
      }
    </AddFieldContainer>
  </article>
)

export default Survey
