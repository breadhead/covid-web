import IconCustom from '@app/ui/IconCustom'
import Input from '@app/ui/Input'
import { SectionDivider } from '@app/ui/organisms/AddFieldContainer'
import { Button, ButtonKind } from '@front/ui/button'
import cx from 'classnames'

import * as React from 'react'
import FileField from './components/FileField'
import LinkField from './components/LinkField'
import * as styles from './SurveyAddFieldContainer.css'

type RemoveSection = (changeState: () => void) => void

export enum FieldType {
  Files = 'Files',
  Links = 'Links',
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
const initialFields = [{ id: 1, type: FieldType.Files }]
class SurveyAddFieldContainer extends React.Component<Props, State> {
  public state = {
    count: this.props.initialCount || INITIAL_COUNT,
    fields: initialFields,
    fieldType: FieldType.Files,
  }

  public render() {
    const { removeSectionFromState } = this.props
    return (
      <div>
        <div className={styles.fields}>
          {this.state.fields.map((field, index) => (
            <React.Fragment key={field.id}>
              {index > 0 && <SectionDivider />}
              <label
                htmlFor={`otherFiles.${field.id}.title`}
                className={styles.labelSmall}
              >
                Название исследования
              </label>
              <Input name={`otherFiles.${field.id}.title`} />
              {field.type === FieldType.Files ? (
                <FileField
                  name={`otherFiles.${field.id}.url`}
                  remove={() => {
                    this.removeSection(
                      removeSectionFromState(field.id, 'otherFiles'),
                    )
                  }}
                />
              ) : (
                <LinkField name={`otherFiles.${field.id}.link`} />
              )}
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
    this.changeCount(1)
    this.addField({ id: this.state.count, type })
  }

  private removeSection: RemoveSection = changeState => {
    changeState()
    this.changeCount(-1)
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
}

export default SurveyAddFieldContainer
