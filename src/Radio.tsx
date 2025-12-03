import React from 'react';
import type { Props as BaseProps } from './CheckboxBase';
import CheckboxBase from './CheckboxBase';

type Props = Omit<BaseProps, 'mode'>;

/** 单选框 */
const Radio = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { size = 16, ...rest } = props;
  return <CheckboxBase {...rest} size={size} mode="radio" ref={ref} />;
});

Radio.displayName = 'RSC-Radio';

export default Radio;
