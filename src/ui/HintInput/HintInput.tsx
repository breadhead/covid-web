import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { AutoComplete } from 'antd';
import { AutoCompleteProps } from 'antd/lib/auto-complete';
import { OptionProps } from 'antd/lib/select';
import { toString } from 'lodash';

import './HintInput.css?CSSModulesDisable';

const { Option, OptGroup } = AutoComplete;

export interface ComplexOptions {
  title: string;
  children: string[];
}

export enum HintInputTypes {
  Simple = 'Simple',
  Complex = 'Complex',
}

interface OwnProps {
  name: string;
  options: string[] | ComplexOptions[];
  className?: string;
  type?: HintInputTypes;
}

type Option = React.ReactElement<OptionProps>;

export type Props = OwnProps & AutoCompleteProps;

export const HintInput = ({
  name,
  className,
  options,
  type = HintInputTypes.Simple,
  ...rest
}: Props) => {
  const [currentOptions, setCurrentOptions] = useState<
    string[] | JSX.Element[] | null
  >([]);

  useEffect(() => {
    switch (type) {
      case HintInputTypes.Simple:
        setCurrentOptions(options as string[]);
        break;
      case HintInputTypes.Complex:
        const opts = (options as ComplexOptions[])
          .filter((opt) => opt.children.length > 0)
          .map((group) => (
            <OptGroup key={group.title} label={group.title}>
              {group.children.map((opt) => {
                return (
                  <Option key={opt} value={opt}>
                    {opt}
                  </Option>
                );
              })}
            </OptGroup>
          ));

        setCurrentOptions(opts as any[]);

        break;
      default:
        setCurrentOptions(options as string[]);
        break;
    }
  }, [options[0], type]);

  const getfilterOptions = (input: string, option: Option) =>
    toString(option.props.children).toLowerCase().includes(input.toLowerCase());

  return (
    <AutoComplete
      id={name}
      dataSource={currentOptions as any}
      className={cx('hintInput', type === HintInputTypes.Complex && 'complex')}
      notFoundContent={null}
      autoFocus={false}
      filterOption={getfilterOptions}
      {...rest}
    />
  );
};
