import clsx from 'clsx';
import React from 'react';
import styled from 'styled-components';

const StyledWrap = styled.div`
  display: flex;
  justify-content: center;
  .content {
    flex: 0 1 auto;
  }
`;

/** 自动居中 */
const AutoCenter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <StyledWrap {...rest} ref={ref} className={clsx('rsc-auto-center')}>
      <div className="content">{children}</div>
    </StyledWrap>
  );
});

AutoCenter.displayName = 'RSC-AutoCenter';

export default AutoCenter;
