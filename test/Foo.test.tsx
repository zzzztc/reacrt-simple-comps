import { render } from '@testing-library/react';
import React from 'react';
import { Foo } from '../src/index'; // 根据实际路径调整

describe('Foo Component', () => {
  it('renders correctly with given title', () => {
    const { getByText } = render(<Foo title="Hello dumi!" />);
    expect(getByText('Hello dumi!')).toBeInTheDocument();
  });
});
