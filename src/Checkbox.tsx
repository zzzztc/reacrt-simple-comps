import React from 'react';
import type { Props as BaseProps } from './CheckboxBase';
import CheckboxBase from './CheckboxBase';

type Props = Omit<BaseProps, 'mode'>;

/** 复选框 */
const Checkbox = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <CheckboxBase {...props} mode="checkbox" ref={ref} />;
});

Checkbox.displayName = 'RSC-Checkbox';

export default Checkbox;
