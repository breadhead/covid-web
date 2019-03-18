import IconCustom from '@app/ui/IconCustom'
import {
  SectionDivider,
  SectionHeader,
} from '@app/ui/organisms/AddFieldContainer'
import { Button, ButtonKind } from '@front/ui/button'
import cx from 'classnames'

import { Input } from '@app/features/common/form'
import * as React from 'react'
import FileField from './components/FileField'
import LinkField from './components/LinkField'
import * as styles from './SurveyAddFieldContainer.css'

type RemoveSection = (changeState: () => void, id: number) => void

export enum FieldType {
  Files = 'Files',
  Links = 'Links',
  Empty = '',
}
interface Props {
  buttonText?: string
  initialCount?: number
  removeSectionFromState: (key: number, id: string) => () => void
}

interface Field {
  id: number
  type: FieldType
}

interface State {
  count: number
  fields: Field[]
}

const INITIAL_COUNT = 1
class SurveyAddFieldContainer extends React.Component<Props, State> {
  public state = {
    count: this.props.initialCount || INITIAL_COUNT,
    fields: [{ id: 0, type: FieldType.Files }],
  }

  public render() {
    const { removeSectionFromState } = this.props

    return (
      <div>
        <div className={styles.fields}>
          {this.state.fields.length > 0 &&
            this.state.fields.map((field, index) => (
              <React.Fragment key={field.id}>
                {index > 0 && <SectionDivider />}
                {index > 0 && (
                  <SectionHeader
                    index={field.id}
                    onRemoveClick={() => {
                      this.removeSection(
                        removeSectionFromState(field.id, 'otherFiles'),
                        field.id,
                      )
                    }}
                  />
                )}
                <label
                  htmlFor={`otherFiles.${field.id}.title`}
                  className={styles.labelSmall}
                >
                  Название исследования
                </label>
                <Input name={`otherFiles.${field.id}.title`} />
                {this.getField(field, removeSectionFromState)}
              </React.Fragment>
            ))}
        </div>
        <Button
          onClick={() => this.onClick(FieldType.Files)}
          className={cx(styles.addButton, styles.filesButton)}
          kind={ButtonKind.Extra}
        >
          <IconCustom className={styles.icon} name="24x24_plus" />
          Добавить другие файлы
        </Button>
        <Button
          onClick={() => this.onClick(FieldType.Links)}
          className={cx(styles.addButton, styles.linksButton)}
          kind={ButtonKind.Extra}
        >
          <IconCustom className={styles.icon} name="24x24_plus" />
          Добавить ссылки на файлы
        </Button>
      </div>
    )
  }

  private onClick = (type: FieldType) => {
    this.addField({ id: this.state.count, type })
    this.changeCount(1)
  }

  private removeSection: RemoveSection = (changeState, id) => {
    changeState()
    this.setState((state: State) => ({
      fields: state.fields.filter(field => field.id !== id),
    }))
  }

  private changeCount = (quantity: number) => {
    this.setState((state: State) => ({
      count: state.count + quantity,
    }))
  }

  private addField = (field: Field) => {
    const { id, type } = field
    const newField = { id, type }
    this.setState((state: State) => ({ fields: state.fields.concat(newField) }))
  }

  private getField = (
    field: Field,
    removeSectionFromState: (key: number, id: string) => () => void,
  ) => {
    if (field.type === FieldType.Files) {
      return (
        <FileField
          name={`otherFiles.${field.id}.url`}
          remove={() => {
            this.removeSection(
              removeSectionFromState(field.id, 'otherFiles'),
              field.id,
            )
          }}
        />
      )
    } else if (field.type === FieldType.Links) {
      return <LinkField name={`otherFiles.${field.id}.link`} />
    } else {
      return ''
    }
  }
}

export default SurveyAddFieldContainer
