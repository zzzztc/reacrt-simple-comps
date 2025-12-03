import React, { useState } from 'react';
import { Radio, Space } from 'react-simple-comps';
import DemoBlock from './common/DemoBlock';
import PageWrap from './common/PageWrap';

export default function App() {
  const [checked, setChecked] = useState(false);

  return (
    <PageWrap>
      <DemoBlock title="默认">
        <Radio checked={checked} onChange={setChecked}>
          默认
        </Radio>
      </DemoBlock>

      <DemoBlock title="非受控">
        <Space>
          <Radio onChange={(c) => console.log(c)}>非受控</Radio>
          <Radio defaultChecked>非受控</Radio>
        </Space>
      </DemoBlock>
    </PageWrap>
  );
}
