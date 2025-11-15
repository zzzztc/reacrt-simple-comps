import React from 'react';
import styled, { keyframes } from 'styled-components';
import clsx from 'clsx';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * shape
   * @default rect
   * */
  shape?: 'rect' | 'circle';
};

const pulse = keyframes`
   0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
`;

const StyledWrap = styled.div`
  background-color: rgba(0, 0, 0, 0.08);
  animation: ${pulse} 1.5s ease-in-out 0.5s infinite;

  &.rect {
    height: 1.2em;
  }

  &.circle {
    border-radius: 50%;
    display: inline-block;
  }
`;

/** 骨架屏 组成基本元素，可以进一步封装为特定结构UI组件 */
const SkeletonElement = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { shape = 'rect', className, ...rest } = props;
  return (
    <StyledWrap {...rest} ref={ref} className={clsx('rsc-skeleton-element', shape, className)} />
  );
});

SkeletonElement.displayName = 'RSC-SkeletonElement';

export default SkeletonElement;
