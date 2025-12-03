import React, { useState } from 'react';
import { Button, Cell, PopConfirm, Switch, Toast } from 'react-simple-comps';
import DemoBlock from './common/DemoBlock';
import PageWrap from './common/PageWrap';

export default function App() {
  const [animate, setAnimate] = useState(true);

  return (
    <PageWrap>
      <Cell
        title="动画效果"
        content={
          <Switch checked={animate} onChange={(c) => setAnimate(c)}></Switch>
        }
      ></Cell>

      <DemoBlock title="默认">
        <PopConfirm
          placement="bottom-left"
          animate={animate}
          title="确定执行此操作?"
          style={{ width: '75%' }}
          onOk={() => {
            Toast.show('操作成功');
          }}
          onCancel={() => {
            Toast.show('取消执行');
          }}
        >
          <Button>操作</Button>
        </PopConfirm>
      </DemoBlock>
    </PageWrap>
  );
}
