import {
  SectionDivider,
  SectionHeader,
} from '@app/ui/organisms/AddFieldContainer'
import { Button, ButtonKind } from '@front/ui/button'
import { Icon } from '@front/ui/icon'
import cx from 'classnames'

import { Input } from '@app/features/common/form'
import { IconsList } from '@app/src/ui/sprite/IconsList'
import * as React from 'react'
import FileField from './components/FileField'
import LinkField from './components/LinkField'
import * as styles from './SurveyAddFieldContainer.css'

export enum FieldType {
  Files = 'Files',
  Links = 'Links',
}
interface Props {
  initialCount?: number
  removeSectionFromState: (key: number, id: string) => () => void
}

interface Field {
  id: number
  type: FieldType
}

const INITIAL_COUNT = 1
const INITIAL_FIELDS = [{ id: 0, type: FieldType.Files }]

const SurveyAddFieldContainer = ({
  initialCount,
  removeSectionFromState,
}: Props) => {
  const [count, setCount] = React.useState(initialCount || INITIAL_COUNT)
  const [fields, setFields] = React.useState(INITIAL_FIELDS)

  const onClick = (type: FieldType) => {
    addField({ id: count, type })
    changeCount(1)
  }

  const removeSection = (index: number, id: number) => {
    removeSectionFromState(index, 'otherFiles')()
    setFields(fields.filter(field => field.id !== id))
  }

  const changeCount = (quantity: number) => {
    setCount(count + quantity)
  }

  const addField = (field: Field) => {
    setFields(fields.concat(field))
  }

  const getField = (index: number, field: Field) => {
    if (field.type === FieldType.Files) {
      return (
        <FileField
          name={`otherFiles.${index}.url`}
          remove={() => {
            removeSection(index, field.id)
          }}
        />
      )
    } else if (field.type === FieldType.Links) {
      return <LinkField name={`otherFiles.${index}.link`} />
    } else {
      return ''
    }
  }

  return (
    <div>
      <div className={styles.fields}>
        {fields.length > 0 &&
          fields.map((field, index) => (
            <React.Fragment key={field.id}>
              {index > 0 && <SectionDivider />}
              {index > 0 && (
                <SectionHeader
                  index={field.id}
                  onRemoveClick={() => {
                    removeSection(index, field.id)
                  }}
                />
              )}
              <label
                htmlFor={`otherFiles.${index}.title`}
                className={styles.labelSmall}
              >
                Название исследования
              </label>
              <Input name={`otherFiles.${index}.title`} />
              {getField(index, field)}
            </React.Fragment>
          ))}
      </div>
      <Button
        onClick={() => onClick(FieldType.Files)}
        className={cx(styles.addButton, styles.filesButton)}
        kind={ButtonKind.Extra}
      >
        <Icon className={styles.icon} name={IconsList.Plus} />
        Добавить другие файлы
      </Button>
      <Button
        onClick={() => onClick(FieldType.Links)}
        className={cx(styles.addButton, styles.linksButton)}
        kind={ButtonKind.Extra}
      >
        <Icon className={styles.icon} name={IconsList.Plus} />
        Добавить ссылки на файлы
      </Button>
    </div>
  )
}

export default SurveyAddFieldContainer
