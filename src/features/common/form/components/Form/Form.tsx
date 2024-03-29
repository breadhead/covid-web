import {
  withAutoSaveOnFieldBlur,
  withAutoSaveWithDebounce,
} from '@breadhead/form-saver';
import React, { Component, createRef } from 'react';
import { Form as FinalForm, FormProps, FormSpy } from 'react-final-form';

import { FORM_ERROR_CLASSNAME } from '../../../formHOCs/withFinalForm';
import WithScrollToInvalid from '../../../formHOCs/withScrollToInvalid';
import { OwnProps } from './types/OwnProps';

type Props = OwnProps & FormProps;

type SubmitEvent = React.FormEvent<HTMLFormElement>;
type SubmitResult = Promise<object | undefined> | undefined;

const DebouncedSaver = withAutoSaveWithDebounce(FormSpy);
const BlurSaver = withAutoSaveOnFieldBlur(FormSpy);

class Form extends Component<Props> {
  public static defaultProps = {
    scrollToInvalid: true,
  };
  private formRef = createRef<HTMLFormElement>();

  public render() {
    const {
      children,
      className,
      resetAfterSubmit,
      scrollToInvalid,
      saveDebounced,
      debounce,
      saveOnBlur,
      onSubmit,
      ...rest
    } = this.props;

    return (
      <section className={className}>
        <FinalForm
          onSubmit={onSubmit}
          render={({
            values,
            form,
            submitFailed,
            handleSubmit,
            valid,
            submitting,
            submitSucceeded,
            submitError,
            hasValidationErrors,
          }) => {
            return (
              <form
                onKeyDown={this.onEnterPress}
                ref={this.formRef}
                onSubmit={this.onSubmit(form.reset, handleSubmit, valid)}
              >
                {!!saveDebounced && (
                  <DebouncedSaver debounce={debounce} save={saveDebounced} />
                )}
                {!!saveOnBlur && <BlurSaver save={saveOnBlur} />}
                {scrollToInvalid && (
                  <WithScrollToInvalid
                    formErrorClassName={FORM_ERROR_CLASSNAME}
                    submitFailed={submitFailed}
                  />
                )}
                {children({
                  submitting,
                  submitSucceeded,
                  submitFailed,
                  submitError,
                  hasValidationErrors,
                  removeSectionFromState: this.removeSection(
                    form.change,
                    values,
                  ),
                  changeField: form.change,
                  values,
                })}
              </form>
            );
          }}
          {...rest}
        />
      </section>
    );
  }

  private removeSection = (
    change: (name: string, value: any) => void,
    values: { [key: string]: any[] },
  ) => (key: number, name: string) => () => {
    const newValues = values[name].filter((_: any, i) => i !== key);
    change(name, newValues);
  };

  private onSubmit = (
    reset: () => void,
    handleSubmit: (event: SubmitEvent) => SubmitResult,
    isValid: boolean,
  ) => (event: SubmitEvent) => {
    const { resetAfterSubmit } = this.props;
    let promise: Promise<any>;
    try {
      promise = Promise.resolve(handleSubmit(event));
    } catch (e) {
      promise = Promise.reject(e);
    }

    return promise.then((data) => {
      if (resetAfterSubmit && isValid) {
        reset();
      }
      return data;
    });
  };

  private onEnterPress = (e: React.KeyboardEvent) => {
    const { forceSubmitOnEnter, preventDefault } = this.props;

    const buttonFits = e.keyCode === 13 && e.shiftKey === false;
    const element = this.formRef.current;

    const shouldSubmit = buttonFits && forceSubmitOnEnter && element;
    const shouldPreventDefault = element && preventDefault;

    if (shouldSubmit || shouldPreventDefault) {
      e.preventDefault();
      element!.dispatchEvent(new Event('submit', { cancelable: true }));
    }
  };
}

export default Form;
