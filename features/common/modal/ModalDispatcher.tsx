import { uniq } from 'lodash'
import { ComponentType } from 'react'

export type Key = string

class ModalDispatcher {
  public static getInstance = () => {
    if (!ModalDispatcher.instance) {
      ModalDispatcher.instance = new ModalDispatcher()
    }

    return ModalDispatcher.instance
  }

  private static instance: ModalDispatcher | null = null

  private _keys: string[] = []
  private _components: {
    [key: string]: ComponentType,
  } = {}

  public get keys(): string[] { return this._keys }
  public get components(): any { return this._components }

  private constructor() { }

  public isModal = (key: string) => {
    this._keys = uniq([...this._keys, key])

    return (ModalComponent: ComponentType) => {
      this._components = {
        ...this._components,
        [key]: ModalComponent,
      }

      return (props: any) => <ModalComponent {...props} />
    }
  }
}

export default ModalDispatcher
