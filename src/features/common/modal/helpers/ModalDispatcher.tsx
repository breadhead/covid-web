import React, { ComponentType } from 'react';

export type Key = string;

interface Components {
  [key: string]: ComponentType;
}

export class ModalDispatcher {
  public static getInstance = () => {
    if (!ModalDispatcher.instance) {
      ModalDispatcher.instance = new ModalDispatcher();
    }

    return ModalDispatcher.instance;
  };

  private static instance: ModalDispatcher | null = null;

  private _components: Components = {};

  public get keys(): string[] {
    return Object.keys(this._components);
  }

  public get components(): any {
    return this._components;
  }

  public isModal = (key: string) => (ModalComponent: ComponentType) => {
    this._components = {
      ...this._components,
      [key]: ModalComponent,
    };

    return (props: any) => <ModalComponent {...props} />;
  };
}
