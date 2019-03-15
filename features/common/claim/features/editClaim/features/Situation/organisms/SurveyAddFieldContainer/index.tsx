import { FormFileInput } from '@app/features/common/uploader'
import IconCustom from '@app/ui/IconCustom'
import Input from '@app/ui/Input'
import { SectionDivider } from '@app/ui/organisms/AddFieldContainer'
import { Button, ButtonKind } from '@front/ui/button'
import cx from 'classnames'
import { range } from 'lodash'
import { size } from 'lodash'
import * as React from 'react'
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

interface State {
  count: number[]
  fieldType: FieldType
}

const INITIAL_COUNT = 1

class SurveyAddFieldContainer extends React.Component<Props, State> {
  public state = {
    // if initialCount is passed as a prop, we use it instead of defaults
    count: range(this.props.initialCount || INITIAL_COUNT),
    fieldType: FieldType.Files,
  }

  public render() {
    const { removeSectionFromState } = this.props
    const { count } = this.state

    return (
      <div>
        <div className={styles.fields}>
          {count.map((key, index) => (
            <React.Fragment key={key}>
              {index > 0 && <SectionDivider />}
              <label
                htmlFor={`otherFiles.${key}.title`}
                className={styles.labelSmall}
              >
                Название исследования
              </label>
              <Input name={`otherFiles.${key}.title`} />
              {this.state.fieldType === FieldType.Files ? (
                <FormFileInput
                  name={`otherFiles.${key}.url`}
                  remove={() => {
                    this.removeSection(
                      removeSectionFromState(key, 'otherFiles'),
                    )
                  }}
                />
              ) : (
                <>
                  <label
                    htmlFor={`otherFiles.${key}.link`}
                    className={styles.labelSmall}
                  >
                    Ссылка на файлы
                  </label>
                  <Input
                    name={`otherFiles.${key}.link`}
                    placeholder="https://"
                  />
                </>
              )}
            </React.Fragment>
          ))}
        </div>
        <Button
          onClick={this.onFilesButtonClick}
          className={cx(styles.addButton, styles.filesButton)}
          kind={ButtonKind.Extra}
        >
          <IconCustom className={styles.icon} name="24x24_plus" />
          Добавить другие файлы
        </Button>
        <Button
          onClick={this.onLinksButtonClick}
          className={cx(styles.addButton, styles.linksButton)}
          kind={ButtonKind.Extra}
        >
          <IconCustom className={styles.icon} name="24x24_plus" />
          Добавить ссылки на файлы
        </Button>
      </div>
    )
  }

  private onFilesButtonClick = () => {
    this.changeCount(1)
    this.setState({ fieldType: FieldType.Files })
  }

  private onLinksButtonClick = () => {
    this.changeCount(1)
    this.setState({ fieldType: FieldType.Links })
  }

  private removeSection: RemoveSection = changeState => {
    changeState()
    this.changeCount(-1)
  }

  private changeCount = (quantity: number) => {
    this.setState((state: State) => ({
      count: range(size(state.count) + quantity),
    }))
  }
}

export default SurveyAddFieldContainer
